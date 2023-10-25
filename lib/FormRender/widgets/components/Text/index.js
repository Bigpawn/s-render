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

// src/FormRender/widgets/components/Text/index.tsx
var Text_exports = {};
__export(Text_exports, {
  default: () => Text_default
});
module.exports = __toCommonJS(Text_exports);
var import_editor_for_react = require("@wangeditor/editor-for-react");
var TextComponent = (props) => {
  const defaultConfig = {
    readOnly: true
  };
  return /* @__PURE__ */ React.createElement(import_editor_for_react.Editor, { defaultConfig, value: props == null ? void 0 : props.value });
};
var Text_default = TextComponent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
