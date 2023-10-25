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

// src/FormRender/widgets/components/DatePickerCustomer/index.tsx
var DatePickerCustomer_exports = {};
__export(DatePickerCustomer_exports, {
  DatePickerValueType: () => DatePickerValueType,
  default: () => DatePickerCustomer_default
});
module.exports = __toCommonJS(DatePickerCustomer_exports);
var import_antd = require("antd");
var import_dayjs = __toESM(require("dayjs"));
var import_localeData = __toESM(require("dayjs/plugin/localeData"));
var import_weekday = __toESM(require("dayjs/plugin/weekday"));
var import_lodash_es = require("lodash-es");
var import_react = require("react");
import_dayjs.default.extend(import_weekday.default);
import_dayjs.default.extend(import_localeData.default);
var DatePickerValueType = /* @__PURE__ */ ((DatePickerValueType2) => {
  DatePickerValueType2["DatePicker"] = "DatePicker";
  DatePickerValueType2["DateRange"] = "DateRange";
  DatePickerValueType2["DateTimeRange"] = "DateTimeRange";
  DatePickerValueType2["DateTime"] = "DateTime";
  return DatePickerValueType2;
})(DatePickerValueType || {});
var DatePickerCustomer = (props) => {
  const { valueType, onChange, value, ...otherProps } = props;
  const [_value, setValue] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (value) {
      setValue(
        (0, import_lodash_es.isArray)(value) ? value.map((item) => (0, import_dayjs.default)(new Date(item))) : (0, import_dayjs.default)(new Date(value))
      );
    }
  }, [value]);
  const handleChange = (date, dateString) => {
    if (onChange) {
      onChange(dateString);
      setValue(date);
    }
  };
  if (valueType === "DateRange" /* DateRange */) {
    return /* @__PURE__ */ React.createElement(
      import_antd.DatePicker.RangePicker,
      {
        ...otherProps,
        onChange: handleChange,
        value: _value
      }
    );
  }
  if (valueType === "DateTime" /* DateTime */) {
    return /* @__PURE__ */ React.createElement(
      import_antd.DatePicker,
      {
        showTime: true,
        ...otherProps,
        onChange: handleChange,
        value: _value
      }
    );
  }
  if (valueType === "DateTimeRange" /* DateTimeRange */) {
    return /* @__PURE__ */ React.createElement(
      import_antd.DatePicker.RangePicker,
      {
        showTime: true,
        ...otherProps,
        onChange: handleChange,
        value: _value
      }
    );
  }
  return /* @__PURE__ */ React.createElement(import_antd.DatePicker, { ...otherProps, onChange: handleChange, value: _value });
};
var DatePickerCustomer_default = DatePickerCustomer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DatePickerValueType
});
