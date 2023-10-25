import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import "antd/es/button/style";
import _Button from "antd/es/button";
import _UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import "antd/es/message/style";
import _message from "antd/es/message";
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { get } from 'lodash-es';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function UploadRender(_ref) {
  var action = _ref.action,
    value = _ref.value,
    _onChange = _ref.onChange,
    uploadProps = _ref.uploadProps,
    buttonProps = _ref.buttonProps,
    schema = _ref.schema;
  var props = _objectSpread({
    name: 'file',
    type: 'file',
    action: action,
    // 旧的兼容
    onChange: function onChange(info) {
      if (info.file.status === 'done') {
        _message.success("".concat(info.file.name, " \u4E0A\u4F20\u6210\u529F"));
        var path = get(schema, 'props.path', '');
        var url = path ? get(info.file.response, path) : info.file.response.url;
        _onChange(url);
      } else if (info.file.status === 'error') {
        _message.error("".concat(info.file.name, " \u4E0A\u4F20\u5931\u8D25"));
      }
    },
    onRemove: function onRemove() {
      _onChange('');
    }
  }, uploadProps);
  var defaultBtnProps = {
    icon: /*#__PURE__*/_jsx(_UploadOutlined, {}),
    children: '上传'
  };
  var btnProps = _objectSpread(_objectSpread({}, defaultBtnProps), buttonProps);
  return /*#__PURE__*/_jsxs("div", {
    className: "fr-upload-mod",
    children: [/*#__PURE__*/_jsx(_Upload, _objectSpread(_objectSpread({}, props), {}, {
      className: "fr-upload-file",
      children: /*#__PURE__*/_jsx(_Button, _objectSpread({}, btnProps))
    })), value && /*#__PURE__*/_jsx("a", {
      href: value,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fr-upload-preview",
      children: "\u4E0A\u4F20\u5730\u5740"
    })]
  });
}