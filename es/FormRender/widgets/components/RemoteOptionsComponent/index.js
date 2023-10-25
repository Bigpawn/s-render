function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/tree-select/style";
import _TreeSelect from "antd/es/tree-select";
import "antd/es/select/style";
import _Select from "antd/es/select";
var _excluded = ["schema", "valueType", "addons", "globalProps", "dependValues"];
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
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { ConfigContext } from "../../../models/context";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var RemoteOptionsValueType;
(function (RemoteOptionsValueType) {
  RemoteOptionsValueType["Select"] = "Select";
  RemoteOptionsValueType["TreeSelect"] = "TreeSelect";
  RemoteOptionsValueType["Checkbox"] = "Checkbox";
  RemoteOptionsValueType["Radio"] = "Radio";
})(RemoteOptionsValueType || (RemoteOptionsValueType = {}));
var RemoteOptionsComponent = /*#__PURE__*/memo(function (props) {
  var _Components, _Components2;
  var _useContext = useContext(ConfigContext),
    request = _useContext.request;
  var schema = props.schema,
    valueType = props.valueType,
    addons = props.addons,
    globalProps = props.globalProps,
    dependValues = props.dependValues,
    otherProps = _objectWithoutProperties(props, _excluded);
  var _ref = schema || {},
    sourceAction = _ref.sourceAction,
    sourceParams = _ref.sourceParams,
    sourceMethod = _ref.sourceMethod,
    dependenciesParamKeys = _ref.dependenciesParamKeys;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var timerRef = useRef(0);
  if (!request) {
    throw new Error('请配置request');
  }
  var getList = function getList() {
    var params = dependenciesParamKeys === null || dependenciesParamKeys === void 0 ? void 0 : dependenciesParamKeys.reduce(function (obj, current, index) {
      obj[current] = dependValues[index];
      return obj;
    }, {});
    request({
      url: sourceAction,
      method: sourceMethod,
      data: _objectSpread(_objectSpread({}, sourceParams), {}, {
        params: dependValues && (dependValues === null || dependValues === void 0 ? void 0 : dependValues.length) > 0 ? params : {}
      })
    }).then(function (res) {
      var _res$data;
      setOptions(res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.map(function (item) {
        return {
          label: item === null || item === void 0 ? void 0 : item.comment,
          value: item === null || item === void 0 ? void 0 : item.code
        };
      }));
    });
  };
  useEffect(function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // 新建一个定时器，500毫秒后执行请求函数
    timerRef.current = setTimeout(function () {
      getList();
    }, 300);
  }, [JSON.stringify(dependValues)]);
  var Components = (_Components = {}, _defineProperty(_Components, RemoteOptionsValueType.Select, _Select), _defineProperty(_Components, RemoteOptionsValueType.TreeSelect, _TreeSelect), _defineProperty(_Components, RemoteOptionsValueType.Checkbox, _Checkbox.Group), _defineProperty(_Components, RemoteOptionsValueType.Radio, _Radio.Group), _Components);
  var Component = (_Components2 = Components[valueType]) !== null && _Components2 !== void 0 ? _Components2 : _Select;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(Component, _objectSpread({
      options: options
    }, otherProps))
  });
});
export default RemoteOptionsComponent;