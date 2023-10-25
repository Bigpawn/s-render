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

// src/FormRender/models/formCoreUtils.ts
var formCoreUtils_exports = {};
__export(formCoreUtils_exports, {
  getSchemaFullPath: () => getSchemaFullPath,
  getSessionItem: () => getSessionItem,
  getUUID: () => getUUID,
  getValueIndexArr: () => getValueIndexArr,
  immediateWatch: () => immediateWatch,
  msToTime: () => msToTime,
  replaceStringByIndexArr: () => replaceStringByIndexArr,
  setSessionItem: () => setSessionItem,
  transformFieldsError: () => transformFieldsError,
  valuesWatch: () => valuesWatch,
  yymmdd: () => yymmdd
});
module.exports = __toCommonJS(formCoreUtils_exports);
var import_lodash_es = require("lodash-es");
var import_utils = require("../utils");
var buildGroupFullKey = (parentPath, schema, currentItem) => {
  let fullPath = parentPath;
  const getSchema = (0, import_lodash_es.get)(schema, parentPath, {});
  (function deepBuild(_getSchema, _currentItem, _parentPath) {
    Object.entries(_getSchema).forEach(([key, value]) => {
      if (key === _currentItem) {
        fullPath = `${_parentPath}.${key}`;
        return;
      }
      if ((value == null ? void 0 : value.type) === "Group") {
        deepBuild(
          (value == null ? void 0 : value.properties) || {},
          _currentItem,
          `${_parentPath}.${key}.properties`
        );
      }
    });
  })(getSchema, currentItem, parentPath);
  return fullPath;
};
var getSchemaFullPath = (path, schema) => {
  if (!path) {
    return "properties." + path;
  }
  while (path.includes("[]")) {
    const index = path.indexOf("[]");
    path = path.substring(0, index) + path.substring(index + 2);
  }
  let result = "properties";
  const paths = path.split(".");
  paths.forEach((item, index) => {
    const key = result + "." + item;
    const itemSchema = (0, import_lodash_es.get)(schema, key, {});
    if (Object.keys(itemSchema).length === 0) {
      result = buildGroupFullKey(result, schema, item);
      return;
    }
    if ((itemSchema == null ? void 0 : itemSchema.type) === "Form" && paths.length - 1 !== index) {
      result = key + ".properties";
      return;
    }
    result = key;
  });
  return result;
};
var immediateWatch = (watch, values) => {
  var _a;
  if (((_a = Object.keys(watch || {})) == null ? void 0 : _a.length) === 0) {
    return;
  }
  Object.keys(watch).forEach((path) => {
    const value = (0, import_lodash_es.get)(values, path);
    const watchItem = watch[path];
    if ((watchItem == null ? void 0 : watchItem.immediate) && (0, import_utils.isFunction)(watchItem == null ? void 0 : watchItem.handler)) {
      try {
        watchItem.handler(value);
      } catch (error) {
        console.log(`${path}对应的watch函数执行报错：`, error);
      }
    }
  });
};
var executeCallBack = (watchItem, value, path, index) => {
  if ((0, import_utils.isFunction)(watchItem)) {
    try {
      watchItem(value, index);
    } catch (e) {
      console.log(`${path}对应的watch函数执行报错：`, e);
    }
  }
  if ((0, import_utils.isFunction)(watchItem == null ? void 0 : watchItem.handler)) {
    try {
      watchItem.handler(value, index);
    } catch (e) {
      console.log(`${path}对应的watch函数执行报错：`, e);
    }
  }
};
var traverseValues = ({ changedValues, allValues, flatValues }) => {
  const traverseArray = (list, fullList, path, index) => {
    const _path = `${path}[]`;
    const filterLength = list.filter(
      (item) => item || item === void 0
    ).length;
    let flag = list.length > 1 && filterLength === (fullList == null ? void 0 : fullList.length);
    let isRemove = false;
    if (filterLength > 1 && filterLength < (fullList == null ? void 0 : fullList.length)) {
      flag = false;
      isRemove = true;
    }
    list.forEach((item, ind) => {
      if (!isRemove) {
        flatValues[_path] = { value: fullList[ind], index };
      }
      if ((0, import_utils.isObject)(item) && item) {
        traverseObj(item, fullList[ind], _path, [...index, ind], flag);
      }
      if ((0, import_utils.isArray)(item) && item) {
        traverseArray(item, fullList[ind], _path, [...index, ind]);
      }
    });
  };
  const traverseObj = (obj, fullObj, path, index, flag) => {
    Object.keys(obj || {}).forEach((key) => {
      const item = obj == null ? void 0 : obj[key];
      const fullItem = fullObj == null ? void 0 : fullObj[key];
      let value = item;
      const _path = path ? `${path}.${key}` : key;
      let last = true;
      if ((0, import_utils.isArray)(item)) {
        value = [...fullItem || []];
        last = false;
        traverseArray(item, fullItem, _path, index);
      }
      if ((0, import_utils.isObject)(item)) {
        last = false;
        traverseObj(item, fullItem, _path, index, flag);
      }
      if (!last || !flag) {
        flatValues[_path] = {
          value,
          index
        };
      }
    });
  };
  traverseObj(changedValues, allValues, null, []);
};
var valuesWatch = (changedValues, allValues, watch) => {
  var _a;
  if (((_a = Object.keys(watch)) == null ? void 0 : _a.length) === 0) {
    return;
  }
  const flatValues = {
    "#": {
      value: allValues,
      index: allValues
    }
  };
  traverseValues({
    changedValues,
    allValues,
    flatValues
  });
  Object.keys(watch).forEach((path) => {
    if (!(0, import_lodash_es.has)(flatValues, path)) {
      return;
    }
    const { value, index } = (0, import_lodash_es.get)(flatValues, path);
    const item = watch[path];
    executeCallBack(item, value, path, index);
  });
};
function yymmdd(timeStamp) {
  const date_ob = new Date(Number(timeStamp));
  const adjustZero = (num) => ("0" + num).slice(-2);
  let day = adjustZero(date_ob.getDate());
  let month = adjustZero(date_ob.getMonth());
  let year = date_ob.getFullYear();
  let hours = adjustZero(date_ob.getHours());
  let minutes = adjustZero(date_ob.getMinutes());
  let seconds = adjustZero(date_ob.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
var transformFieldsError = (_fieldsError) => {
  let fieldsError = _fieldsError;
  if ((0, import_utils.isObject)(fieldsError)) {
    fieldsError = [fieldsError];
  }
  if (!((0, import_utils.isArray)(fieldsError) && fieldsError.length > 0)) {
    return;
  }
  return fieldsError.map((field) => ({ errors: field.error, ...field }));
};
function msToTime(duration) {
  let seconds = Math.floor(duration / 1e3 % 60);
  let minutes = Math.floor(duration / (1e3 * 60) % 60);
  let hours = Math.floor(duration / (1e3 * 60 * 60) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds;
}
var setSessionItem = (key, data) => {
  sessionStorage.setItem(key, data + "");
};
var getSessionItem = (key) => {
  return Number(sessionStorage.getItem(key) || 0);
};
var getUUID = () => {
  return new Date().getTime() + Math.random().toString(36).substr(2);
};
var getValueIndexArr = (path) => {
  return path.filter((item) => (0, import_lodash_es.isNumber)(item));
};
var replaceStringByIndexArr = (str, indexArr) => {
  return str.replace(/\[]/g, () => {
    if (indexArr.length > 0) {
      return `.${indexArr.shift()}`;
    }
    return ".";
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getSchemaFullPath,
  getSessionItem,
  getUUID,
  getValueIndexArr,
  immediateWatch,
  msToTime,
  replaceStringByIndexArr,
  setSessionItem,
  transformFieldsError,
  valuesWatch,
  yymmdd
});
