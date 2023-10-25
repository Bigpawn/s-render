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

// src/FormRender/models/formDataSkeleton.ts
var formDataSkeleton_exports = {};
__export(formDataSkeleton_exports, {
  createDataSkeleton: () => createDataSkeleton
});
module.exports = __toCommonJS(formDataSkeleton_exports);
var import_lodash_es = require("lodash-es");
var import_utils = require("../utils");
var createDataSkeleton = (schema, formData) => {
  let _formData = (0, import_lodash_es.cloneDeep)(formData);
  let result = _formData;
  if ((0, import_utils.isObjType)(schema)) {
    if (_formData === void 0 || typeof _formData !== "object") {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach((key) => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      result[key] = createDataSkeleton(childSchema, childData);
    });
  } else if ((schema == null ? void 0 : schema.default) !== void 0) {
    result = (0, import_lodash_es.cloneDeep)(schema.default);
  } else if (_formData !== void 0) {
  } else if ((0, import_utils.isListType)(schema)) {
    result = [createDataSkeleton(schema.items)];
  } else {
    result = void 0;
  }
  return result;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDataSkeleton
});
