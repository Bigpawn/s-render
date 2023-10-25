function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/switch/style";
import _Switch from "antd/es/switch";
import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/tree-select/style";
import _TreeSelect from "antd/es/tree-select";
import "antd/es/select/style";
import _Select from "antd/es/select";
var _excluded = ["addons", "schema", "globalProps", "dependValues"],
  _excluded2 = ["valueType"],
  _excluded3 = ["addons", "schema", "globalProps", "dependValues"],
  _excluded4 = ["addons", "schema", "globalProps", "dependValues"],
  _excluded5 = ["addons", "schema", "globalProps", "dependValues"],
  _excluded6 = ["addons", "schema", "globalProps", "dependValues"],
  _excluded7 = ["addons", "schema", "globalProps", "dependValues"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import RemoteOptionsComponent from "../../FormRender/widgets/components/RemoteOptionsComponent";
import CapCurrency from "./components/CapCurrency";
import DatePickerCustomer, { DatePickerValueType } from "./components/DatePickerCustomer";
import PercentComponent from "./components/PercentComponent";
import ReadOnlyText from "./components/ReadOnlyText";
import TextComponent from "./components/Text";
import UploadRender from "./components/UploadRender";
import BoxCard from "./container/BoxCard";
import CollapseList from "./container/CollapseList";
import TableList from "./container/TableList";
import { jsx as _jsx } from "react/jsx-runtime";
export function withWrap(Comp, config) {
  return function (props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var addons = props.addons,
      schema = props.schema,
      globalProps = props.globalProps,
      dependValues = props.dependValues,
      otherProps = _objectWithoutProperties(props, _excluded);
    var _ref = config || {},
      valueType = _ref.valueType,
      otherConfig = _objectWithoutProperties(_ref, _excluded2);
    if (schema !== null && schema !== void 0 && schema.sourceAction) {
      return /*#__PURE__*/_jsx(RemoteOptionsComponent, _objectSpread(_objectSpread({}, props), config));
    }
    var options = schema === null || schema === void 0 ? void 0 : schema.options;
    if (options) {
      return /*#__PURE__*/_jsx(Comp, _objectSpread(_objectSpread(_objectSpread({}, otherProps), otherConfig !== null && otherConfig !== void 0 ? otherConfig : {}), {}, {
        options: options || []
      }));
    }
    if (otherProps !== null && otherProps !== void 0 && otherProps.prefix || schema !== null && schema !== void 0 && schema.prefix) {
      var isThousandth = {
        formatter: function formatter(value) {
          return "".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        parser: function parser(value) {
          return value.replace(/\$\s?|(,*)/g, '');
        }
      };
      return /*#__PURE__*/_jsx(Comp, _objectSpread(_objectSpread(_objectSpread({}, otherProps), config !== null && config !== void 0 ? config : {}), {}, {
        prefix: (schema === null || schema === void 0 ? void 0 : schema.prefix) || (otherProps === null || otherProps === void 0 ? void 0 : otherProps.prefix)
      }, (schema === null || schema === void 0 ? void 0 : schema.isThousandth) && isThousandth || {}));
    }
    return /*#__PURE__*/_jsx(Comp, _objectSpread(_objectSpread({}, otherProps), otherConfig !== null && otherConfig !== void 0 ? otherConfig : {}));
  };
}
export function DateWrap(Component, config) {
  return function (props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var addons = props.addons,
      schema = props.schema,
      globalProps = props.globalProps,
      dependValues = props.dependValues,
      otherProps = _objectWithoutProperties(props, _excluded3);
    return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, otherProps), config !== null && config !== void 0 ? config : {}));
  };
}
export function EmptyWrap(Component, config) {
  return function (props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var addons = props.addons,
      schema = props.schema,
      globalProps = props.globalProps,
      dependValues = props.dependValues,
      otherProps = _objectWithoutProperties(props, _excluded4);
    return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, otherProps), config !== null && config !== void 0 ? config : {}));
  };
}
var withWrapSelect = function withWrapSelect() {
  return function (props) {
    var _schema$options;
    var addons = props.addons,
      schema = props.schema,
      globalProps = props.globalProps,
      dependValues = props.dependValues,
      otherProps = _objectWithoutProperties(props, _excluded5);
    var options = (_schema$options = schema === null || schema === void 0 ? void 0 : schema.options) !== null && _schema$options !== void 0 ? _schema$options : [];
    return /*#__PURE__*/_jsx(_Select, _objectSpread({
      allowClear: true,
      showSearch: true,
      optionFilterProp: "label",
      popupMatchSelectWidth: true,
      options: options,
      dropdownStyle: {
        minWidth: '200px'
      }
    }, otherProps));
  };
};
var withWrapSelectMultiple = function withWrapSelectMultiple() {
  return function (props) {
    var _schema$options2;
    var addons = props.addons,
      schema = props.schema,
      globalProps = props.globalProps,
      dependValues = props.dependValues,
      otherProps = _objectWithoutProperties(props, _excluded6);
    var options = (_schema$options2 = schema === null || schema === void 0 ? void 0 : schema.options) !== null && _schema$options2 !== void 0 ? _schema$options2 : [];
    return /*#__PURE__*/_jsx(_Select, _objectSpread({
      allowClear: true,
      showSearch: true,
      optionFilterProp: "label",
      popupMatchSelectWidth: true,
      options: options,
      mode: "multiple",
      dropdownStyle: {
        minWidth: '200px'
      }
    }, otherProps));
  };
};
var withWrapTreeSelect = function withWrapTreeSelect() {
  return function (props) {
    var _schema$options3;
    var addons = props.addons,
      schema = props.schema,
      globalProps = props.globalProps,
      dependValues = props.dependValues,
      otherProps = _objectWithoutProperties(props, _excluded7);
    var options = (_schema$options3 = schema === null || schema === void 0 ? void 0 : schema.options) !== null && _schema$options3 !== void 0 ? _schema$options3 : [];
    return /*#__PURE__*/_jsx(_TreeSelect, _objectSpread({
      allowClear: true,
      showSearch: true,
      treeNodeLabelProp: "label",
      popupMatchSelectWidth: true,
      treeData: options,
      dropdownStyle: {
        minWidth: '200px'
      }
    }, otherProps));
  };
};
export var widgets = {
  boxCard: BoxCard,
  collapseList: CollapseList,
  tableList: TableList,
  String: withWrap(_Input),
  Int: withWrap(_InputNumber, {
    style: {
      width: '100%'
    },
    formatter: function formatter(value) {
      return value === 0 ? undefined : value;
    },
    controls: false
  }),
  Boolean: withWrap(_Switch),
  Percent: withWrap(PercentComponent, {
    addonAfter: '%',
    style: {
      width: '100%'
    },
    formatter: function formatter(value) {
      return value === 0 ? undefined : value;
    },
    controls: false
  }),
  Money: withWrap(_InputNumber, {
    prefix: '￥',
    style: {
      width: '100%'
    },
    formatter: function formatter(value) {
      return value === 0 ? undefined : value;
    },
    controls: false
  }),
  Date: DateWrap(DatePickerCustomer, {
    valueType: DatePickerValueType.DatePicker,
    style: {
      width: '100%'
    }
  }),
  DateRange: DateWrap(DatePickerCustomer, {
    valueType: DatePickerValueType.DateRange,
    placeholder: ['开始时间', '结束时间'],
    style: {
      width: '100%'
    }
  }),
  DateTimeRange: DateWrap(DatePickerCustomer, {
    valueType: DatePickerValueType.DateTimeRange,
    placeholder: ['开始时间', '结束时间'],
    style: {
      width: '100%'
    }
  }),
  DateTime: DateWrap(DatePickerCustomer, {
    valueType: DatePickerValueType.DateTime,
    style: {
      width: '100%'
    }
  }),
  Number: withWrap(_InputNumber, {
    style: {
      width: '100%'
    },
    formatter: function formatter(value) {
      return value === 0 ? undefined : value;
    },
    controls: false
  }),
  Enum: withWrapSelect(),
  Select: withWrapSelect(),
  SelectMultiple: withWrapSelectMultiple(),
  SelectTree: withWrapTreeSelect(),
  Checkbox: withWrap(_Checkbox.Group),
  Radio: withWrap(_Radio.Group),
  CapCurrency: withWrap(CapCurrency),
  File: withWrap(UploadRender),
  Text: EmptyWrap(TextComponent, {}),
  ReadOnlyText: EmptyWrap(ReadOnlyText, {}),
  TextArea: withWrap(_Input.TextArea)
};