function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
var _excluded = ["valueType", "onChange", "value"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekDay from 'dayjs/plugin/weekday';
import { isArray } from 'lodash-es';
import { useEffect, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
dayjs.extend(weekDay);
dayjs.extend(localeData);
export var DatePickerValueType;
(function (DatePickerValueType) {
  DatePickerValueType["DatePicker"] = "DatePicker";
  DatePickerValueType["DateRange"] = "DateRange";
  DatePickerValueType["DateTimeRange"] = "DateTimeRange";
  DatePickerValueType["DateTime"] = "DateTime";
})(DatePickerValueType || (DatePickerValueType = {}));
var DatePickerCustomer = function DatePickerCustomer(props) {
  var valueType = props.valueType,
    onChange = props.onChange,
    value = props.value,
    otherProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    _value = _useState2[0],
    setValue = _useState2[1];
  useEffect(function () {
    if (value) {
      setValue(isArray(value) ? value.map(function (item) {
        return dayjs(new Date(item));
      }) : dayjs(new Date(value)));
    }
  }, [value]);
  var handleChange = function handleChange(date, dateString) {
    if (onChange) {
      onChange(dateString);
      setValue(date);
    }
  };
  if (valueType === DatePickerValueType.DateRange) {
    return /*#__PURE__*/_jsx(_DatePicker.RangePicker, _objectSpread(_objectSpread({}, otherProps), {}, {
      onChange: handleChange,
      value: _value
    }));
  }
  if (valueType === DatePickerValueType.DateTime) {
    return /*#__PURE__*/_jsx(_DatePicker, _objectSpread(_objectSpread({
      showTime: true
    }, otherProps), {}, {
      onChange: handleChange,
      value: _value
    }));
  }
  if (valueType === DatePickerValueType.DateTimeRange) {
    return /*#__PURE__*/_jsx(_DatePicker.RangePicker, _objectSpread(_objectSpread({
      showTime: true
    }, otherProps), {}, {
      onChange: handleChange,
      value: _value
    }));
  }
  return /*#__PURE__*/_jsx(_DatePicker, _objectSpread(_objectSpread({}, otherProps), {}, {
    onChange: handleChange,
    value: _value
  }));
};
export default DatePickerCustomer;