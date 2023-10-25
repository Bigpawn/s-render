function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { get, has, isNumber } from 'lodash-es';
import { isArray, isFunction, isObject } from "../utils";
var buildGroupFullKey = function buildGroupFullKey(parentPath, schema, currentItem) {
  var fullPath = parentPath;
  var getSchema = get(schema, parentPath, {});
  (function deepBuild(_getSchema, _currentItem, _parentPath) {
    Object.entries(_getSchema).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      if (key === _currentItem) {
        fullPath = "".concat(_parentPath, ".").concat(key);
        return;
      }
      if ((value === null || value === void 0 ? void 0 : value.type) === 'Group') {
        deepBuild((value === null || value === void 0 ? void 0 : value.properties) || {}, _currentItem, "".concat(_parentPath, ".").concat(key, ".properties"));
      }
    });
  })(getSchema, currentItem, parentPath);
  return fullPath;
};
export var getSchemaFullPath = function getSchemaFullPath(path, schema) {
  if (!path) {
    return 'properties.' + path;
  }

  // 补全 list 类型 path 路径
  while (path.includes('[]')) {
    var index = path.indexOf('[]');
    // eslint-disable-next-line no-param-reassign
    path = path.substring(0, index) + path.substring(index + 2);
  }

  // 补全 object 类型 path 路径
  var result = 'properties';
  var paths = path.split('.');
  paths.forEach(function (item, index) {
    var key = result + '.' + item;
    var itemSchema = get(schema, key, {});
    if (Object.keys(itemSchema).length === 0) {
      result = buildGroupFullKey(result, schema, item);
      return;
    }
    if ((itemSchema === null || itemSchema === void 0 ? void 0 : itemSchema.type) === 'Form' && paths.length - 1 !== index) {
      result = key + '.properties';
      return;
    }
    result = key;
  });
  return result;
};
export var immediateWatch = function immediateWatch(watch, values) {
  var _Object$keys;
  if (((_Object$keys = Object.keys(watch || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) === 0) {
    return;
  }
  Object.keys(watch).forEach(function (path) {
    var value = get(values, path);
    var watchItem = watch[path];
    if (watchItem !== null && watchItem !== void 0 && watchItem.immediate && isFunction(watchItem === null || watchItem === void 0 ? void 0 : watchItem.handler)) {
      try {
        watchItem.handler(value);
      } catch (error) {
        console.log("".concat(path, "\u5BF9\u5E94\u7684watch\u51FD\u6570\u6267\u884C\u62A5\u9519\uFF1A"), error);
      }
    }
  });
};
var executeCallBack = function executeCallBack(watchItem, value, path, index) {
  if (isFunction(watchItem)) {
    try {
      watchItem(value, index);
    } catch (e) {
      console.log("".concat(path, "\u5BF9\u5E94\u7684watch\u51FD\u6570\u6267\u884C\u62A5\u9519\uFF1A"), e);
    }
  }
  if (isFunction(watchItem === null || watchItem === void 0 ? void 0 : watchItem.handler)) {
    try {
      watchItem.handler(value, index);
    } catch (e) {
      console.log("".concat(path, "\u5BF9\u5E94\u7684watch\u51FD\u6570\u6267\u884C\u62A5\u9519\uFF1A"), e);
    }
  }
};
var traverseValues = function traverseValues(_ref3) {
  var changedValues = _ref3.changedValues,
    allValues = _ref3.allValues,
    flatValues = _ref3.flatValues;
  var traverseArray = function traverseArray(list, fullList, path, index) {
    var _path = "".concat(path, "[]");
    var filterLength = list.filter(function (item) {
      return item || item === undefined;
    }).length;
    var flag = list.length > 1 && filterLength === (fullList === null || fullList === void 0 ? void 0 : fullList.length);
    var isRemove = false;
    if (filterLength > 1 && filterLength < (fullList === null || fullList === void 0 ? void 0 : fullList.length)) {
      flag = false;
      isRemove = true;
    }
    list.forEach(function (item, ind) {
      if (!isRemove) {
        flatValues[_path] = {
          value: fullList[ind],
          index: index
        };
      }
      if (isObject(item) && item) {
        traverseObj(item, fullList[ind], _path, [].concat(_toConsumableArray(index), [ind]), flag);
      }
      if (isArray(item) && item) {
        traverseArray(item, fullList[ind], _path, [].concat(_toConsumableArray(index), [ind]));
      }
    });
  };
  var traverseObj = function traverseObj(obj, fullObj, path, index, flag) {
    Object.keys(obj || {}).forEach(function (key) {
      var item = obj === null || obj === void 0 ? void 0 : obj[key];
      var fullItem = fullObj === null || fullObj === void 0 ? void 0 : fullObj[key];
      var value = item;
      var _path = path ? "".concat(path, ".").concat(key) : key;
      var last = true;
      if (isArray(item)) {
        value = _toConsumableArray(fullItem || []);
        last = false;
        traverseArray(item, fullItem, _path, index);
      }
      if (isObject(item)) {
        last = false;
        traverseObj(item, fullItem, _path, index, flag);
      }
      if (!last || !flag) {
        flatValues[_path] = {
          value: value,
          index: index
        };
      }
    });
  };
  traverseObj(changedValues, allValues, null, []);
};

/**
 * 监听数据变化，调用对应的外部watch方法
 */
export var valuesWatch = function valuesWatch(changedValues, allValues, watch) {
  var _Object$keys2;
  if (((_Object$keys2 = Object.keys(watch)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.length) === 0) {
    return;
  }
  var flatValues = {
    '#': {
      value: allValues,
      index: allValues
    }
  };
  traverseValues({
    changedValues: changedValues,
    allValues: allValues,
    flatValues: flatValues
  });
  Object.keys(watch).forEach(function (path) {
    if (!has(flatValues, path)) {
      return;
    }
    var _get = get(flatValues, path),
      value = _get.value,
      index = _get.index;
    var item = watch[path];
    executeCallBack(item, value, path, index);
  });
};
export function yymmdd(timeStamp) {
  var date_ob = new Date(Number(timeStamp));
  var adjustZero = function adjustZero(num) {
    return ('0' + num).slice(-2);
  };
  var day = adjustZero(date_ob.getDate());
  var month = adjustZero(date_ob.getMonth());
  var year = date_ob.getFullYear();
  var hours = adjustZero(date_ob.getHours());
  var minutes = adjustZero(date_ob.getMinutes());
  var seconds = adjustZero(date_ob.getSeconds());
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
export var transformFieldsError = function transformFieldsError(_fieldsError) {
  var fieldsError = _fieldsError;
  if (isObject(fieldsError)) {
    fieldsError = [fieldsError];
  }
  if (!(isArray(fieldsError) && fieldsError.length > 0)) {
    return;
  }
  return fieldsError.map(function (field) {
    return _objectSpread({
      errors: field.error
    }, field);
  });
};
export function msToTime(duration) {
  var seconds = Math.floor(duration / 1000 % 60);
  var minutes = Math.floor(duration / (1000 * 60) % 60);
  var hours = Math.floor(duration / (1000 * 60 * 60) % 24);
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}
export var setSessionItem = function setSessionItem(key, data) {
  sessionStorage.setItem(key, data + '');
};
export var getSessionItem = function getSessionItem(key) {
  return Number(sessionStorage.getItem(key) || 0);
};
export var getUUID = function getUUID() {
  return new Date().getTime() + Math.random().toString(36).substr(2);
};

/**
 * 获取list数据当前值的索引路径
 * @return string[]
 */
export var getValueIndexArr = function getValueIndexArr(path) {
  return path.filter(function (item) {
    return isNumber(item);
  });
};

/**
 * 替换字符串中的[]
 * @param str
 * @param indexArr
 */
export var replaceStringByIndexArr = function replaceStringByIndexArr(str, indexArr) {
  return str.replace(/\[]/g, function () {
    if (indexArr.length > 0) {
      return ".".concat(indexArr.shift());
    }
    return '.';
  });
};