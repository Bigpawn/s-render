function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import GroupCard from "../../FormRender/widgets/container/GroupCard";
import FieldItem from "../RenderCore/FieldItem";
import FieldList from "../RenderCore/FieldList";
import { filterSchema } from "../utils";
import { jsx as _jsx } from "react/jsx-runtime";
var renderItem = function renderItem(props) {
  var schema = props.schema,
    rootPath = props.rootPath,
    path = props.path,
    key = props.key,
    tableInline = props.tableInline,
    throttledOnValuesChange = props.throttledOnValuesChange;
  if (schema.type === 'Group') {
    return /*#__PURE__*/_jsx(GroupCard, _objectSpread(_objectSpread({}, props), {}, {
      renderCore: RenderCore
    }));
  }
  if (schema.type === 'Form' && schema !== null && schema !== void 0 && schema.list) {
    return /*#__PURE__*/_jsx(FieldList, {
      schema: schema,
      path: path,
      rootPath: rootPath,
      renderCore: RenderCore,
      renderItem: renderItem,
      throttledOnValuesChange: throttledOnValuesChange
    }, key);
  }
  var child = null;
  if (schema !== null && schema !== void 0 && schema.properties) {
    child = RenderCore({
      schema: schema === null || schema === void 0 ? void 0 : schema.properties,
      parentPath: path,
      rootPath: rootPath
    });
    path = undefined;
  }
  return /*#__PURE__*/_jsx(FieldItem, {
    schema: schema,
    path: path,
    rootPath: rootPath,
    renderCore: RenderCore,
    tableInline: tableInline,
    children: child
  }, key);
};
var RenderCore = function RenderCore(props) {
  var schema = props.schema,
    _props$rootPath = props.rootPath,
    rootPath = _props$rootPath === void 0 ? [] : _props$rootPath,
    _props$parentPath = props.parentPath,
    parentPath = _props$parentPath === void 0 ? [] : _props$parentPath,
    throttledOnValuesChange = props.throttledOnValuesChange;
  var newSchema = filterSchema(schema);
  if (!newSchema || newSchema.length === 0) {
    return null;
  }
  return newSchema.map(function (key) {
    var item = schema[key];
    var path = [].concat(_toConsumableArray(parentPath), [key]);
    return renderItem({
      schema: item,
      path: path,
      key: key,
      rootPath: rootPath,
      throttledOnValuesChange: throttledOnValuesChange
    });
  });
};
export default RenderCore;