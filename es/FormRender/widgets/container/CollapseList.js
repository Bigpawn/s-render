import _PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import "antd/es/collapse/style";
import _Collapse from "antd/es/collapse";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/popconfirm/style";
import _Popconfirm from "antd/es/popconfirm";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/divider/style";
import _Divider from "antd/es/divider";
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
import { useEffect, useMemo, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var schema = props.schema,
    fields = props.fields,
    addItem = props.addItem,
    renderCore = props.renderCore,
    rootPath = props.rootPath,
    removeItem = props.removeItem,
    copyItem = props.copyItem,
    form = props.form,
    moveItem = props.moveItem;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  useEffect(function () {
    setActiveKey(fields === null || fields === void 0 ? void 0 : fields.map(function (item) {
      return item.name;
    }));
  }, [JSON.stringify(fields)]);
  var collapseChange = function collapseChange(keys) {
    setActiveKey(keys);
  };
  var extraButtonStyle = {
    padding: 0
  };
  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };
  var onDelete = function onDelete(name) {
    return function (e) {
      stopPropagation(e);
      removeItem(name);
    };
  };
  var onCopy = function onCopy(name) {
    return function (e) {
      stopPropagation(e);
      var value = form.getFieldValue(rootPath.concat(name));
      copyItem(value !== null && value !== void 0 ? value : {});
    };
  };
  var onMove = function onMove(from, to) {
    return function (e) {
      stopPropagation(e);
      moveItem(from, to);
    };
  };
  var extraRender = useMemo(function () {
    return function (name) {
      return /*#__PURE__*/_jsxs(_Space, {
        split: /*#__PURE__*/_jsx(_Divider, {
          type: "vertical"
        }),
        children: [/*#__PURE__*/_jsx(_Button, {
          type: "link",
          style: extraButtonStyle,
          disabled: name === 0,
          onClick: onMove(name, name - 1),
          children: "\u4E0A\u79FB"
        }), /*#__PURE__*/_jsx(_Button, {
          type: "link",
          style: extraButtonStyle,
          disabled: name === fields.length - 1,
          onClick: onMove(name, name + 1),
          children: "\u4E0B\u79FB"
        }), /*#__PURE__*/_jsx(_Popconfirm, {
          title: "\u786E\u5B9A\u5220\u9664\u5417\uFF1F",
          onCancel: stopPropagation,
          onConfirm: onDelete(name),
          children: /*#__PURE__*/_jsx(_Button, {
            type: "link",
            style: extraButtonStyle,
            danger: true,
            onClick: stopPropagation,
            children: "\u5220\u9664"
          })
        }), /*#__PURE__*/_jsx(_Button, {
          type: "link",
          style: extraButtonStyle,
          onClick: onCopy(name),
          children: "\u590D\u5236"
        })]
      });
    };
  }, [JSON.stringify(fields)]);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [fields.length > 0 && /*#__PURE__*/_jsx(_Collapse, {
      activeKey: activeKey,
      onChange: collapseChange,
      style: {
        marginBottom: '24px'
      },
      size: "small",
      children: fields === null || fields === void 0 ? void 0 : fields.map(function (item) {
        return /*#__PURE__*/_jsx(_Collapse.Panel, {
          header: "".concat(schema === null || schema === void 0 ? void 0 : schema.title, " ").concat(item.name + 1),
          extra: extraRender(item.name),
          children: /*#__PURE__*/_jsx(_Row, {
            gutter: 18,
            children: renderCore({
              schema: schema === null || schema === void 0 ? void 0 : schema.properties,
              parentPath: [item.name],
              rootPath: [].concat(_toConsumableArray(rootPath), [item.name])
            })
          })
        }, item.name);
      })
    }), /*#__PURE__*/_jsx(_Button, {
      icon: /*#__PURE__*/_jsx(_PlusOutlined, {}),
      type: "dashed",
      block: (fields === null || fields === void 0 ? void 0 : fields.length) > 0,
      onClick: function onClick() {
        addItem({});
      },
      children: "\u65B0\u589E\u4E00\u6761"
    })]
  });
});