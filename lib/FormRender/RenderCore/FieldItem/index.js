var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/FormRender/RenderCore/FieldItem/index.tsx
var FieldItem_exports = {};
__export(FieldItem_exports, {
  default: () => FieldItem_default
});
module.exports = __toCommonJS(FieldItem_exports);
var import_antd = require("antd");
var import_lodash_es = require("lodash-es");
var import_react = require("react");
var import_formCoreUtils = require("../../../FormRender/models/formCoreUtils");
var import_context = require("../../models/context");
var import_expression = require("../../models/expression");
var import_Main = __toESM(require("./Main"));
var FieldItem_default = (props) => {
  const { schema, rootPath, ...otherProps } = props;
  const store = (0, import_react.useContext)(import_context.FormRenderContext);
  const { schema: formSchema } = store.getState();
  if (!(0, import_expression.isHasExpression)(schema) && !(schema == null ? void 0 : schema.dependencies)) {
    return /* @__PURE__ */ React.createElement(import_Main.default, { ...props, store });
  }
  const indexArr = (0, import_formCoreUtils.getValueIndexArr)([
    ...rootPath || [],
    ...otherProps.path || []
  ]);
  return /* @__PURE__ */ React.createElement(import_antd.Form.Item, { noStyle: true, shouldUpdate: () => true }, ({ getFieldsValue }) => {
    const formData = getFieldsValue(true);
    const dependValues = (schema.dependencies || []).map((item) => {
      if (item.indexOf("[]") >= 0) {
        return (0, import_lodash_es.get)(formData, (0, import_formCoreUtils.replaceStringByIndexArr)(item, indexArr));
      }
      return (0, import_lodash_es.get)(formData, item);
    });
    const newSchema = (0, import_expression.parseAllExpression)(
      schema,
      formData,
      rootPath,
      formSchema
    );
    return /* @__PURE__ */ React.createElement(
      import_Main.default,
      {
        schema: newSchema,
        ...otherProps,
        dependValues,
        rootPath,
        store,
        dependencies: schema == null ? void 0 : schema.dependencies
      }
    );
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
