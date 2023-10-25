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

// src/FormRender/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  _cloneDeep: () => _cloneDeep,
  _merge: () => _merge,
  digitUppercase: () => digitUppercase,
  filterSchema: () => filterSchema,
  isArray: () => isArray,
  isFormType: () => isFormType,
  isFunction: () => isFunction,
  isListType: () => isListType,
  isObjType: () => isObjType,
  isObject: () => isObject,
  valueRemoveUndefined: () => valueRemoveUndefined
});
module.exports = __toCommonJS(utils_exports);
var import_lodash_es = require("lodash-es");
var _cloneDeep = import_lodash_es.cloneDeep;
var _merge = import_lodash_es.merge;
var isArray = (data) => {
  const str = Object.prototype.toString.call(data);
  return str.indexOf("Array") > -1;
};
var isObject = (data) => {
  const str = Object.prototype.toString.call(data);
  return str.indexOf("Object") > -1;
};
var isFunction = (data) => typeof data === "function";
var isObjType = (schema) => {
  return (schema == null ? void 0 : schema.type) === "Form" && schema.properties && !schema.list;
};
var isListType = (schema) => {
  return (schema == null ? void 0 : schema.type) === "Form" && schema.list && schema.properties;
};
var isFormType = (schema) => {
  return (schema == null ? void 0 : schema.type) === "Form" && (schema == null ? void 0 : schema.properties);
};
var valueRemoveUndefined = (values) => {
  const recursionArray = (list) => {
    let result = list.map((item) => {
      if (isObject(item)) {
        return recursionObj(item);
      }
      if (isArray(item)) {
        return recursionArray(item);
      }
      return item;
    });
    if (Object.keys(result).length === 0) {
      return void 0;
    }
    return result;
  };
  const recursionObj = (_data) => {
    let data = (0, import_lodash_es.omitBy)(_data, import_lodash_es.isUndefined);
    Object.keys(data).forEach((key) => {
      const item = data[key];
      if (isObject(item)) {
        data[key] = recursionObj(item);
      }
      if (isArray(item)) {
        data[key] = recursionArray(item);
      }
    });
    data = (0, import_lodash_es.omitBy)(data, import_lodash_es.isUndefined);
    if (Object.keys(data).length === 0) {
      return void 0;
    }
    return data;
  };
  return recursionObj(values) || {};
};
var accMul = (arg1, arg2) => {
  let m = 0;
  const s1 = arg1.toString(), s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {
  }
  try {
    m += s2.split(".")[1].length;
  } catch (e) {
  }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
};
var digitUppercase = (text) => {
  if (!text) {
    return "";
  }
  if (/[\u4E00-\u9FFF]/.test(text.toString())) {
    return text.toString();
  }
  if (text === 0 || text === "0") {
    return "零元整";
  }
  const fraction = ["角", "分"];
  const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"]
  ];
  let numberText = Number(text);
  const head = numberText < 0 ? "欠" : "";
  numberText = Math.abs(Number(numberText));
  let s = "";
  for (let i = 0; i < fraction.length; i++) {
    s += digit[Math.floor(accMul(10 * Math.pow(10, i), numberText)) % 10] + fraction[i];
  }
  if (s.indexOf("零角") > -1) {
    if (!s.endsWith("零分")) {
      s = s.replace(/零角/, "零");
    } else {
      s = "";
    }
  } else {
    if (s.endsWith("零分")) {
      s = s.replace(/零分/, "");
    }
  }
  const smallNumber = s || "整";
  let integerNumber = "";
  s = s || "整";
  numberText = Math.floor(numberText);
  for (let i = 0; i < unit[0].length && numberText > 0; i++) {
    let p = "";
    for (let j = 0; j < unit[1].length && numberText > 0; j++) {
      p = digit[numberText % 10] + unit[1][j] + p;
      numberText = Math.floor(numberText / 10);
    }
    integerNumber = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + integerNumber;
  }
  return head + integerNumber.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整") + smallNumber;
};
var filterSchema = (schema) => {
  return Object.keys(schema || {}).sort(
    (a, b) => schema[a].sort - schema[b].sort
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  _cloneDeep,
  _merge,
  digitUppercase,
  filterSchema,
  isArray,
  isFormType,
  isFunction,
  isListType,
  isObjType,
  isObject,
  valueRemoveUndefined
});
