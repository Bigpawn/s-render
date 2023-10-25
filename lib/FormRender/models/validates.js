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

// src/FormRender/models/validates.ts
var validates_exports = {};
__export(validates_exports, {
  default: () => validates_default
});
module.exports = __toCommonJS(validates_exports);
var import_lodash_es = require("lodash-es");
var getRuleList = (schema, form, methods) => {
  let {
    required,
    max,
    min,
    maxLength,
    minLength,
    rules: ruleList = [],
    pattern,
    message,
    title,
    format,
    type
  } = schema;
  let rules = [...ruleList];
  max = max ?? maxLength;
  min = min ?? minLength;
  if (max) {
    rules.push({
      max,
      message: message == null ? void 0 : message.max
    });
  }
  if (min) {
    rules.push({ min, message: message == null ? void 0 : message.min });
  }
  if (required) {
    rules.push({
      required: true,
      message: (message == null ? void 0 : message.required) || title + "不可为空"
    });
  }
  if (pattern) {
    rules.push({ pattern, message: message == null ? void 0 : message.pattern });
  }
  if (format === "url") {
    rules.push({ type: "url", message: message == null ? void 0 : message.url });
  }
  if (format === "email") {
    rules.push({ type: "email", message: message == null ? void 0 : message.email });
  }
  if (type === "Int") {
    rules.push({ type: "integer", message: (message == null ? void 0 : message.integer) || "请输入整数" });
  }
  rules = rules.map((item) => {
    if (item.validator && !item.transformed) {
      const validator = (0, import_lodash_es.isFunction)(item.validator) ? item.validator : methods[item.validator];
      item.validator = async (_, value) => {
        const result = await validator(_, value, { form });
        if ((0, import_lodash_es.isObject)(result)) {
          return (result == null ? void 0 : result.status) ? Promise.resolve() : (
            // @ts-ignore
            Promise.reject(new Error(result.message || item.message))
          );
        }
        return result ? Promise.resolve() : Promise.reject(new Error(item.message));
      };
      item.transformed = true;
    }
    return item;
  });
  return rules;
};
var validates_default = getRuleList;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
