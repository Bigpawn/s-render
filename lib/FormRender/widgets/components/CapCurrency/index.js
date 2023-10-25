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

// src/FormRender/widgets/components/CapCurrency/index.tsx
var CapCurrency_exports = {};
__export(CapCurrency_exports, {
  default: () => CapCurrency_default
});
module.exports = __toCommonJS(CapCurrency_exports);
var import_antd = require("antd");
var import_react = require("react");
var import_utils = require("../../../utils");
var CapCurrency = (props) => {
  const { value, onChange, ...other } = props;
  const [_value, setValue] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const valueString = (0, import_utils.digitUppercase)(value);
    setValue(valueString);
  }, [value]);
  const inputChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = (e) => {
    const inputValue = e.target.value;
    const valueString = (0, import_utils.digitUppercase)(inputValue);
    setValue(valueString);
    if (onChange) {
      onChange(valueString);
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    import_antd.Input,
    {
      placeholder: "请输入",
      ...other,
      value: _value,
      onChange: inputChange,
      onBlur
    }
  ));
};
var CapCurrency_default = CapCurrency;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
