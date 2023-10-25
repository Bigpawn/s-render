function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { _cloneDeep, isArray, isObject } from "../utils";
import { get, set, unset } from "lodash-es";
var isMultiBind = function isMultiBind(array) {
  return isArray(array) && array.every(function (item) {
    return typeof item === 'string';
  });
};
var transformPath = function transformPath(path) {
  var result = [];
  var recursion = function recursion(str) {
    var index = str.indexOf('[]');
    if (index === -1) {
      result.push(str);
      return;
    }
    result.push(str.substring(0, index));
    recursion(str.substring(index + 3));
  };
  recursion(path);
  if (result.length === 1) {
    return result[0];
  }
  return result;
};
var transformValueToBind = function transformValueToBind(data, path, bind) {
  if (bind === false) {
    unset(data, path);
    return;
  }
  if (typeof bind === 'string') {
    var value = get(data, path);
    var preValue = get(data, bind);
    if (isObject(preValue)) {
      value = _objectSpread(_objectSpread({}, preValue), value);
    }
    set(data, bind, value);
    unset(data, path);
    return;
  }

  // The array is converted to multiple fields.
  if (isMultiBind(bind)) {
    var _value = get(data, path);
    unset(data, path);
    if (Array.isArray(_value)) {
      _value.forEach(function (item, index) {
        var bindPath = bind[index];
        if (bindPath) {
          set(data, bindPath, item);
        }
      });
    }
  }
};
export var parseValuesToBind = function parseValuesToBind(values, flatten) {
  if (!JSON.stringify(flatten).includes('bind')) {
    return values;
  }
  var data = _cloneDeep(values);
  Object.keys(flatten).forEach(function (key) {
    var _flatten$key, _flatten$key$schema;
    var bind = (_flatten$key = flatten[key]) === null || _flatten$key === void 0 ? void 0 : (_flatten$key$schema = _flatten$key.schema) === null || _flatten$key$schema === void 0 ? void 0 : _flatten$key$schema.bind;
    if (bind === undefined) {
      return;
    }
    var path = transformPath(key);
    if (isArray(path)) {
      return;
    }
    transformValueToBind(data, path, bind);
  });
  return data;
};