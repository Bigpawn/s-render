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

// src/FormRender/models/bindValues.ts
var bindValues_exports = {};
__export(bindValues_exports, {
  parseValuesToBind: () => parseValuesToBind
});
module.exports = __toCommonJS(bindValues_exports);
var import_utils = require("../utils");
var import_lodash_es = require("lodash-es");
var isMultiBind = (array) => (0, import_utils.isArray)(array) && array.every((item) => typeof item === "string");
var transformPath = (path) => {
  const result = [];
  const recursion = (str) => {
    const index = str.indexOf("[]");
    if (index === -1) {
      result.push(str);
      return;
    }
    result.push(str.substring(0, index));
    recursion(str.substring(index + 3));
  };
  recursion(path);
  if (result.length === 1) {
    return result[0];
  }
  return result;
};
var transformValueToBind = (data, path, bind) => {
  if (bind === false) {
    (0, import_lodash_es.unset)(data, path);
    return;
  }
  if (typeof bind === "string") {
    let value = (0, import_lodash_es.get)(data, path);
    const preValue = (0, import_lodash_es.get)(data, bind);
    if ((0, import_utils.isObject)(preValue)) {
      value = { ...preValue, ...value };
    }
    (0, import_lodash_es.set)(data, bind, value);
    (0, import_lodash_es.unset)(data, path);
    return;
  }
  if (isMultiBind(bind)) {
    const value = (0, import_lodash_es.get)(data, path);
    (0, import_lodash_es.unset)(data, path);
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const bindPath = bind[index];
        if (bindPath) {
          (0, import_lodash_es.set)(data, bindPath, item);
        }
      });
    }
  }
};
var parseValuesToBind = (values, flatten) => {
  if (!JSON.stringify(flatten).includes("bind")) {
    return values;
  }
  const data = (0, import_utils._cloneDeep)(values);
  Object.keys(flatten).forEach((key) => {
    var _a, _b;
    const bind = (_b = (_a = flatten[key]) == null ? void 0 : _a.schema) == null ? void 0 : _b.bind;
    if (bind === void 0) {
      return;
    }
    const path = transformPath(key);
    if ((0, import_utils.isArray)(path)) {
      return;
    }
    transformValueToBind(data, path, bind);
  });
  return data;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  parseValuesToBind
});
