var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/FormRender/models/expression.ts
var expression_exports = {};
__export(expression_exports, {
  isExpression: () => isExpression,
  isHasExpression: () => isHasExpression,
  parseAllExpression: () => parseAllExpression,
  parseExpression: () => parseExpression
});
module.exports = __toCommonJS(expression_exports);
var import_lodash_es = require("lodash-es");
var import_formDataSkeleton = require("./formDataSkeleton");
var isExpression = (str) => {
  if (typeof str !== "string") {
    return false;
  }
  const pattern = /^{\s*{(.+)}\s*}$/;
  const reg1 = /^{\s*{function\(.+}\s*}$/;
  return str.match(pattern) && !str.match(reg1);
};
var recursionArray = (list) => {
  return list.some((item) => {
    if ((0, import_lodash_es.isArray)(item)) {
      return recursionArray(item);
    }
    if ((0, import_lodash_es.isObject)(item)) {
      return isHasExpression(item);
    }
    return isExpression(item);
  });
};
var isHasExpression = (schema) => {
  return Object.keys(schema).some((key) => {
    const item = schema[key];
    if (key === "properties") {
      return false;
    }
    if ((0, import_lodash_es.isArray)(item)) {
      return recursionArray(item);
    }
    if ((0, import_lodash_es.isObject)(item)) {
      return isHasExpression(item);
    }
    return isExpression(item);
  });
};
var parseExpression = (func, formData = {}, parentPath) => {
  const parentData = (0, import_lodash_es.get)(formData, parentPath) || {};
  if (typeof func === "string") {
    const funcBody = func.replace(/^{\s*{/g, "").replace(/}\s*}$/g, "");
    const funcStr = `
      return ${funcBody.replace(/formData/g, JSON.stringify(formData)).replace(/rootValue/g, JSON.stringify(parentData))}
    `;
    try {
      return Function(funcStr)();
    } catch (e) {
      console.log(e, func, parentPath);
      return null;
    }
  }
  return func;
};
var parseAllExpression = (_schema, _formData, dataPath, formSchema) => {
  const schema = (0, import_lodash_es.cloneDeep)(_schema);
  let formData = _formData;
  if (formSchema) {
    formData = (0, import_formDataSkeleton.createDataSkeleton)(formSchema, formData);
  }
  const recursionArray2 = (list) => {
    return list.map((item) => {
      if ((0, import_lodash_es.isArray)(item)) {
        return recursionArray2(item);
      }
      if ((0, import_lodash_es.isObject)(item)) {
        return parseAllExpression(item, formData, dataPath);
      }
      if (isExpression(item)) {
        return parseExpression(item, formData, dataPath);
      }
      return item;
    });
  };
  Object.keys(schema).forEach((key) => {
    const value = schema[key];
    if ((0, import_lodash_es.isArray)(value)) {
      schema[key] = recursionArray2(value);
    } else if ((0, import_lodash_es.isObject)(value)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseExpression(value, formData, dataPath);
    } else if (typeof key === "string" && key.toLowerCase().indexOf("props") > -1) {
      const propsObj = schema[key];
      if ((0, import_lodash_es.isObject)(propsObj)) {
        Object.keys(propsObj).forEach((k) => {
          schema[key][k] = parseExpression(
            // @ts-ignore
            propsObj[k],
            _formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isExpression,
  isHasExpression,
  parseAllExpression,
  parseExpression
});
