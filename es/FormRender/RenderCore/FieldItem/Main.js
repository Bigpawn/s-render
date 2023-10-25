import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/col/style";
import _Col from "antd/es/col";
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
import { get, isEqual } from 'lodash-es';
import { useContext, useMemo } from 'react';
import { useStore } from 'zustand';
import { ConfigContext, FormRenderContext } from "../../models/context";
import getRuleList from "../../models/validates";
import { jsx as _jsx } from "react/jsx-runtime";
var valuePropNameMap = {
  Boolean: 'checked'
};
var layoutCol = {
  1: {
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 9
    }
  },
  2: {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 14
    }
  },
  3: {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 16
    }
  },
  4: {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 16
    }
  }
};
export default (function (props) {
  var _schema$default;
  var schema = props.schema,
    path = props.path,
    dependValues = props.dependValues,
    tableInline = props.tableInline,
    rootPath = props.rootPath;
  var configCtx = useContext(ConfigContext);
  var formRenderContext = useContext(FormRenderContext);
  var _useStore = useStore(formRenderContext, function (state) {
      return state === null || state === void 0 ? void 0 : state.context;
    }),
    readOnly = _useStore.readOnly,
    layout = _useStore.layout;
  // globalRules 为全局配置的规则
  var form = configCtx.form,
    widgets = configCtx.widgets,
    globalConfig = configCtx.globalConfig,
    methods = configCtx.methods,
    globalRules = configCtx.globalRules;
  var type = schema.type,
    title = schema.title,
    list = schema.list,
    valueType = schema.valueType,
    businessType = schema.businessType,
    hidden = schema.hidden;
  if (type === 'Form' && !list) {
    if (hidden) return null;
    var _Widget = widgets['boxCard'];
    return /*#__PURE__*/_jsx(_Col, {
      span: 24,
      style: {
        marginBottom: '24px'
      },
      children: /*#__PURE__*/_jsx(_Widget, _objectSpread({}, props))
    });
  }
  // businessType 当需要做一些特殊的业务处理时使用，比如：在组件渲染之前调用接口获取数据
  // readOnly 为只读状态 直接使用Text
  var mergeReadOnly = readOnly !== null && readOnly !== void 0 ? readOnly : schema === null || schema === void 0 ? void 0 : schema.readOnly;
  var textWidget = type === 'Text' ? 'Text' : 'ReadOnlyText';
  var widgetName = businessType ? businessType : mergeReadOnly ? textWidget : valueType !== null && valueType !== void 0 ? valueType : type;
  var Widget = widgets[widgetName];
  var defaultValue = (_schema$default = schema.default) !== null && _schema$default !== void 0 ? _schema$default : schema.defaultValue;
  var ruleList = getRuleList(schema, form, methods);
  var valuePropName = schema.valuePropName || valuePropNameMap[valueType !== null && valueType !== void 0 ? valueType : type] || undefined;
  var span = (schema === null || schema === void 0 ? void 0 : schema.span) || (globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.span) || 3;
  if (!Widget) {
    return null;
  }
  var Component = useMemo(function () {
    return function (config) {
      var _config$disabled, _config$readOnly;
      return Widget({
        placeholder: title,
        schema: schema,
        dependValues: dependValues,
        disabled: (_config$disabled = config === null || config === void 0 ? void 0 : config.disabled) !== null && _config$disabled !== void 0 ? _config$disabled : schema === null || schema === void 0 ? void 0 : schema.disabled,
        readOnly: (_config$readOnly = config === null || config === void 0 ? void 0 : config.readOnly) !== null && _config$readOnly !== void 0 ? _config$readOnly : mergeReadOnly,
        bordered: config === null || config === void 0 ? void 0 : config.bordered,
        className: config === null || config === void 0 ? void 0 : config.className
      });
    };
  }, [title, JSON.stringify(schema), JSON.stringify(dependValues), tableInline, span, hidden, widgetName, mergeReadOnly]);
  var allPath = useMemo(function () {
    if (!path) {
      return undefined;
    }
    var _path = path.slice(0, path.length - 1);
    var currentName = path[path.length - 1];
    if (!currentName) {
      return undefined;
    }
    return [].concat(_toConsumableArray(rootPath || []), _toConsumableArray(_path), ['rules', currentName]);
  }, [JSON.stringify(path), JSON.stringify(rootPath)]);
  return /*#__PURE__*/_jsx(_Col, {
    span: hidden ? 0 : tableInline ? 24 : 24 / span,
    children: /*#__PURE__*/_jsx(_Form.Item, {
      noStyle: true,
      shouldUpdate: function shouldUpdate(prevValues, nextValues) {
        if (allPath) {
          return !isEqual(get(prevValues, allPath), get(nextValues, allPath));
        }
        return false;
      },
      children: function children(_ref) {
        var getFieldValue = _ref.getFieldValue;
        var currentRule = allPath ? getFieldValue(allPath) : {};
        return /*#__PURE__*/_jsx(_Form.Item, {
          label: tableInline ? '' : title,
          labelCol: layout !== 'vertical' ? {
            flex: '0 0 100px'
          } : {},
          colon: !tableInline,
          style: tableInline && {
            marginBottom: 0
          } || {},
          name: path,
          hidden: hidden
          // dependencies={dependencies}
          ,
          initialValue: (valueType !== null && valueType !== void 0 ? valueType : type) === 'Boolean' ? false : defaultValue,
          valuePropName: valuePropName,
          rules: hidden ? [] : ruleList,
          children: Component(_objectSpread(_objectSpread({}, currentRule), {}, {
            bordered: !tableInline,
            className: tableInline ? 's-render-table-inline-component' : ''
          }))
        });
      }
    })
  });
});