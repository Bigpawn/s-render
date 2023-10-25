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

// src/FormRender/widgets/container/GroupCard.tsx
var GroupCard_exports = {};
__export(GroupCard_exports, {
  default: () => GroupCard_default
});
module.exports = __toCommonJS(GroupCard_exports);
var import_antd = require("antd");
var GroupCard = (props) => {
  const { schema, renderCore, rootPath } = props;
  if (schema == null ? void 0 : schema.hidden)
    return null;
  return /* @__PURE__ */ React.createElement(import_antd.Col, { span: 24 }, /* @__PURE__ */ React.createElement(import_antd.Form.Item, null, /* @__PURE__ */ React.createElement(import_antd.Card, { size: "small", title: schema == null ? void 0 : schema.title }, /* @__PURE__ */ React.createElement(import_antd.Row, { gutter: 18 }, renderCore({
    schema: schema.properties,
    rootPath,
    parentPath: rootPath.length > 0 ? [rootPath == null ? void 0 : rootPath[rootPath.length - 1]] : []
  })))));
};
var GroupCard_default = GroupCard;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
