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

// src/FormRender/RenderCore/FieldList/index.tsx
var FieldList_exports = {};
__export(FieldList_exports, {
  default: () => FieldList_default
});
module.exports = __toCommonJS(FieldList_exports);
var import_antd = require("antd");
var import_react = require("react");
var import_zustand = require("zustand");
var import_context = require("../../models/context");
var import_Main = __toESM(require("./Main"));
var FieldList_default = (props) => {
  const { schema } = props;
  const store = (0, import_react.useContext)(import_context.FormRenderContext);
  const configContext = (0, import_react.useContext)(import_context.ConfigContext);
  const formCtx = (0, import_zustand.useStore)(store, (state) => state.context);
  const { form, widgets } = configContext;
  let { widget = "collapseList" } = schema;
  if (schema == null ? void 0 : schema.hidden) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(import_antd.Col, { span: 24 }, /* @__PURE__ */ React.createElement(
    import_antd.Form.Item,
    {
      label: ["tableList", "collapseList"].includes(widget) ? "" : schema == null ? void 0 : schema.title,
      colon: !["tableList", "collapseList"].includes(widget)
    },
    /* @__PURE__ */ React.createElement(
      import_Main.default,
      {
        ...props,
        form,
        formCtx,
        widgets,
        configContext
      }
    )
  ));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
