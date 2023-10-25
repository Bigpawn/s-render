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

// src/FormRender/widgets/container/BoxCard.tsx
var BoxCard_exports = {};
__export(BoxCard_exports, {
  default: () => BoxCard_default
});
module.exports = __toCommonJS(BoxCard_exports);
var import_antd = require("antd");
var BoxCard_default = (props) => {
  const { schema, renderCore, rootPath, path, children } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_antd.Card, { title: schema == null ? void 0 : schema.title, size: "small" }, /* @__PURE__ */ React.createElement(import_antd.Row, { gutter: 18 }, children ? children : renderCore({
    schema: schema.properties,
    rootPath: [...rootPath, path]
  }))));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
