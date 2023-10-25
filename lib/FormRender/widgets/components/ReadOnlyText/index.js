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

// src/FormRender/widgets/components/ReadOnlyText/index.tsx
var ReadOnlyText_exports = {};
__export(ReadOnlyText_exports, {
  default: () => ReadOnlyText_default
});
module.exports = __toCommonJS(ReadOnlyText_exports);
var ReadOnlyText = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, props.value !== null && props.value !== void 0 ? props.value : "-");
};
var ReadOnlyText_default = ReadOnlyText;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
