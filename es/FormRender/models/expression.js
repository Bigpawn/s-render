import { cloneDeep, get, isArray, isObject } from 'lodash-es';
import { createDataSkeleton } from "./formDataSkeleton";
export var isExpression = function isExpression(str) {
  if (typeof str !== 'string') {
    return false;
  }
  var pattern = /^{\s*{(.+)}\s*}$/;
  var reg1 = /^{\s*{function\(.+}\s*}$/;
  return str.match(pattern) && !str.match(reg1);
};
var recursionArray = function recursionArray(list) {
  return list.some(function (item) {
    if (isArray(item)) {
      return recursionArray(item);
    }
    if (isObject(item)) {
      return isHasExpression(item);
    }
    return isExpression(item);
  });
};
export var isHasExpression = function isHasExpression(schema) {
  return Object.keys(schema).some(function (key) {
    var item = schema[key];
    if (key === 'properties') {
      return false;
    }
    if (isArray(item)) {
      return recursionArray(item);
    }
    if (isObject(item)) {
      return isHasExpression(item);
    }
    return isExpression(item);
  });
};
export var parseExpression = function parseExpression(func) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parentPath = arguments.length > 2 ? arguments[2] : undefined;
  var parentData = get(formData, parentPath) || {};
  if (typeof func === 'string') {
    var funcBody = func.replace(/^{\s*{/g, '').replace(/}\s*}$/g, '');
    var funcStr = "\n      return ".concat(funcBody.replace(/formData/g, JSON.stringify(formData)).replace(/rootValue/g, JSON.stringify(parentData)), "\n    ");
    try {
      return Function(funcStr)();
    } catch (e) {
      console.log(e, func, parentPath);
      return null; // 如果计算有错误，return null 最合适
    }
  }

  return func;
};
export var parseAllExpression = function parseAllExpression(_schema, _formData, dataPath, formSchema) {
  var schema = cloneDeep(_schema);
  var formData = _formData;
  if (formSchema) {
    formData = createDataSkeleton(formSchema, formData);
  }
  var recursionArray = function recursionArray(list) {
    return list.map(function (item) {
      if (isArray(item)) {
        return recursionArray(item);
      }
      if (isObject(item)) {
        return parseAllExpression(item, formData, dataPath);
      }
      if (isExpression(item)) {
        return parseExpression(item, formData, dataPath);
      }
      return item;
    });
  };
  Object.keys(schema).forEach(function (key) {
    var value = schema[key];
    if (isArray(value)) {
      schema[key] = recursionArray(value);
    } else if (isObject(value)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseExpression(value, formData, dataPath);
    } else if (typeof key === 'string' && key.toLowerCase().indexOf('props') > -1) {
      var propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(function (k) {
          schema[key][k] = parseExpression(
          // @ts-ignore
          propsObj[k], _formData, dataPath);
        });
      }
    }
  });
  return schema;
};