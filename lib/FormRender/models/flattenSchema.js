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

// src/FormRender/models/flattenSchema.ts
var flattenSchema_exports = {};
__export(flattenSchema_exports, {
  flattenSchema: () => flattenSchema
});
module.exports = __toCommonJS(flattenSchema_exports);
var import_utils = require("../utils");
var flattenSchema = (_schema = {}, name, parent, _result) => {
  const result = _result || {};
  const schema = (0, import_utils._cloneDeep)(_schema) || {};
  let _name = name || "#";
  if (!schema.$id) {
    schema.$id = _name;
  }
  const children = [];
  if ((0, import_utils.isFormType)(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = (0, import_utils.isListType)(value) ? key + "[]" : key;
      const uniqueName = _name === "#" ? _key : _name + "." + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.properties = {};
  }
  if (schema.type) {
    result[_name] = { parent, schema, children };
  }
  return result;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  flattenSchema
});
