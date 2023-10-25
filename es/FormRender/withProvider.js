function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
var _excluded = ["configProvider", "locale", "widgets", "methods", "form", "validateMessages", "globalProps", "globalConfig", "themeConfig", "request"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useEffect, useRef } from 'react';
import { ConfigContext, FormRenderContext } from "../FormRender/models/context";
import { create } from "../FormRender/models/store";
import { widgets as defaultWidgets } from "./widgets";
import "./withProvider.scss";
import { jsx as _jsx } from "react/jsx-runtime";
var withProvider = function withProvider(Element) {
  return function (props) {
    var configProvider = props.configProvider,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'zh-CN' : _props$locale,
      widgets = props.widgets,
      methods = props.methods,
      form = props.form,
      validateMessages = props.validateMessages,
      _props$globalProps = props.globalProps,
      globalProps = _props$globalProps === void 0 ? {} : _props$globalProps,
      _props$globalConfig = props.globalConfig,
      globalConfig = _props$globalConfig === void 0 ? {} : _props$globalConfig,
      _props$themeConfig = props.themeConfig,
      themeConfig = _props$themeConfig === void 0 ? {} : _props$themeConfig,
      request = props.request,
      otherProps = _objectWithoutProperties(props, _excluded);
    var storeRef = useRef(create());
    var store = storeRef.current;
    useEffect(function () {
      if (locale === 'en-US') {
        dayjs.locale('en');
        return;
      }
      dayjs.locale('zh-cn');
    }, [locale]);

    // 组件卸载
    useEffect(function () {
      return function () {
        form === null || form === void 0 ? void 0 : form.resetFields();
      };
    }, []);
    if (!form) {
      console.warn('Please provide a form instance to FormRender');
      return null;
    }
    var configContext = {
      locale: locale,
      widgets: _objectSpread(_objectSpread({}, defaultWidgets), widgets),
      methods: methods,
      form: form,
      globalProps: globalProps,
      globalConfig: globalConfig,
      request: request,
      themeConfig: themeConfig
    };
    var antdLocale = locale === 'zh-CN' ? zhCN : enUS;
    return /*#__PURE__*/_jsx("div", {
      className: "s-render-box",
      style: themeConfig !== null && themeConfig !== void 0 && themeConfig.colorPrimary ? {
        // @ts-ignore
        '--data-primary': themeConfig.colorPrimary
      } : {},
      children: /*#__PURE__*/_jsx(_ConfigProvider, _objectSpread(_objectSpread({
        theme: {
          token: themeConfig
        }
      }, configProvider), {}, {
        locale: antdLocale,
        form: {
          validateMessages: validateMessages
        },
        children: /*#__PURE__*/_jsx(ConfigContext.Provider, {
          value: configContext,
          children: /*#__PURE__*/_jsx(FormRenderContext.Provider, {
            value: store,
            children: /*#__PURE__*/_jsx(Element, _objectSpread({
              form: form
            }, otherProps))
          })
        })
      }))
    });
  };
};
export default withProvider;