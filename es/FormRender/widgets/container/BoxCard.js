import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/row/style";
import _Row from "antd/es/row";
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var schema = props.schema,
    renderCore = props.renderCore,
    rootPath = props.rootPath,
    path = props.path,
    children = props.children;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(_Card, {
      title: schema === null || schema === void 0 ? void 0 : schema.title,
      size: "small",
      children: /*#__PURE__*/_jsx(_Row, {
        gutter: 18,
        children: children ? children : renderCore({
          schema: schema.properties,
          rootPath: [].concat(_toConsumableArray(rootPath), [path])
        })
      })
    })
  });
});