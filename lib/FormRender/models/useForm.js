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

// src/FormRender/models/useForm.ts
var useForm_exports = {};
__export(useForm_exports, {
  default: () => useForm_default
});
module.exports = __toCommonJS(useForm_exports);
var import_antd = require("antd");
var import_lodash_es = require("lodash-es");
var import_react = require("react");
var import_utils = require("../utils");
var import_bindValues = require("./bindValues");
var import_flattenSchema = require("./flattenSchema");
var import_formCoreUtils = require("./formCoreUtils");
var updateSchemaByPath = (_path, _newSchema, formSchema) => {
  const path = (0, import_formCoreUtils.getSchemaFullPath)(_path, formSchema);
  const currSchema = (0, import_lodash_es.get)(formSchema, path, {});
  const newSchema = (0, import_utils.isFunction)(_newSchema) ? _newSchema(currSchema) : _newSchema;
  const result = (0, import_utils._merge)(currSchema, newSchema);
  (0, import_lodash_es.set)(formSchema, path, result);
};
var getFieldPath = (_path) => {
  if (!_path) {
    return void 0;
  }
  if (typeof _path === "boolean") {
    return _path;
  }
  if ((0, import_utils.isArray)(_path)) {
    return _path.map((item) => {
      return item.split(".").map((ite) => {
        if (!isNaN(Number(ite))) {
          return ite * 1;
        }
        return ite;
      });
    });
  }
  return _path.split(".").map((item) => {
    if (!isNaN(Number(item))) {
      return item * 1;
    }
    return item;
  });
};
var useForm = () => {
  const [form] = import_antd.Form.useForm();
  const storeRef = (0, import_react.useRef)();
  const schemaRef = (0, import_react.useRef)({});
  const flattenSchemaRef = (0, import_react.useRef)({});
  const setStoreData = (data) => {
    const { setState } = storeRef.current;
    if (!setState) {
      setTimeout(() => {
        setState({
          schema: schemaRef.current,
          flattenSchema: flattenSchemaRef.current
        });
      }, 0);
    }
    setState(data);
  };
  const handleSchemaUpdate = (newSchema) => {
    flattenSchemaRef.current = (0, import_flattenSchema.flattenSchema)(newSchema);
    schemaRef.current = newSchema;
    setStoreData({
      schema: newSchema,
      flattenSchema: flattenSchemaRef.current
    });
  };
  form.getValues = (nameList, filterFunc) => {
    let values = form.getFieldsValue(getFieldPath(nameList), filterFunc);
    values = (0, import_utils.valueRemoveUndefined)(values);
    return (0, import_bindValues.parseValuesToBind)(values, flattenSchemaRef.current);
  };
  form.setSchema = (obj, cover = false) => {
    if (!(0, import_utils.isObject)(obj)) {
      return;
    }
    if (cover) {
      handleSchemaUpdate(obj);
      return;
    }
    const schema = (0, import_utils._cloneDeep)(schemaRef.current);
    Object.keys(obj).forEach((path) => {
      updateSchemaByPath(path, obj[path], schema);
    });
    handleSchemaUpdate(schema);
  };
  form.__initStore = (store) => {
    storeRef.current = store;
  };
  form.setValueByPath = (path, value) => {
    const name = getFieldPath(path);
    form.setFieldValue(name, value);
  };
  form.getSchemaByPath = (_path) => {
    if (typeof _path !== "string") {
      console.warn("请输入正确的路径");
    }
    const path = (0, import_formCoreUtils.getSchemaFullPath)(_path, schemaRef.current);
    return (0, import_lodash_es.get)(schemaRef.current, path);
  };
  form.setSchemaByPath = (_path, _newSchema) => {
    const schema = (0, import_lodash_es.cloneDeep)(schemaRef.current);
    updateSchemaByPath(_path, _newSchema, schema);
    handleSchemaUpdate(schema);
  };
  form.setSchemaByFullPath = (_path, newSchema) => {
    const schema = (0, import_utils._cloneDeep)(schemaRef.current);
    const currSchema = (0, import_lodash_es.get)(schema, _path, {});
    const result = (0, import_utils._merge)(newSchema, currSchema);
    (0, import_lodash_es.set)(schema, _path, result);
    handleSchemaUpdate(schema);
  };
  return form;
};
var useForm_default = useForm;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
