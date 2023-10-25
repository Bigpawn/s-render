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

// src/FormRender/widgets/components/PercentComponent/index.tsx
var PercentComponent_exports = {};
__export(PercentComponent_exports, {
  default: () => PercentComponent_default
});
module.exports = __toCommonJS(PercentComponent_exports);
var import_antd = require("antd");
var import_react = require("react");
var import_index = require("./index.less");
var PercentComponent = (props) => {
  const { value, onChange, ...otherProps } = props;
  const [_value, setValue] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    setValue((value == null ? void 0 : value.replace("%", "")) || null);
  }, [value]);
  const handleChange = (changeValue) => {
    setValue(changeValue);
    onChange == null ? void 0 : onChange(changeValue ? `${changeValue}%` : null);
  };
  return /* @__PURE__ */ React.createElement(import_antd.InputNumber, { ...otherProps, value: _value, onChange: handleChange });
};
var PercentComponent_default = PercentComponent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
