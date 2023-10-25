import "antd/es/form/style";
import _Form from "antd/es/form";
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (props) {
  var form = props.form,
    schema = props.schema,
    path = props.path,
    parentLitPath = props.parentLitPath,
    renderCore = props.renderCore,
    rootPath = props.rootPath,
    configContext = props.configContext,
    renderItem = props.renderItem,
    throttledOnValuesChange = props.throttledOnValuesChange;
  if (schema !== null && schema !== void 0 && schema.hidden) {
    return null;
  }
  var widgets = configContext.widgets;
  var widget = schema.widget;
  var Widget = widgets[widget || 'tableList'];
  var preRootPath = (rootPath || []).splice(0, rootPath.length - 1);
  var handleAdd = function handleAdd(add) {
    return function (data) {
      add(data !== null && data !== void 0 ? data : {});
    };
  };
  var handleRemove = function handleRemove(remove) {
    return function (index) {
      remove(index);
    };
  };
  var handleMove = function handleMove(move) {
    return function (from, to) {
      move(from, to);
    };
  };
  var handleCopy = function handleCopy(add) {
    return function (value) {
      add(value);
    };
  };

  // TODO 默认值，暂时处理为空对象
  var defaultValue = [{}];
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(_Form.List, {
      name: path,
      initialValue: defaultValue,
      children: function children(fields, operation, _ref) {
        var errors = _ref.errors;
        return /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(Widget, {
            configContext: configContext,
            form: form,
            schema: schema,
            fields: fields,
            operation: operation,
            path: path,
            listName: path,
            parentLitPath: parentLitPath,
            rootPath: [].concat(_toConsumableArray(preRootPath), _toConsumableArray(path)),
            renderCore: renderCore,
            renderItem: renderItem,
            widgets: widgets
            // TODO 暂时不考虑隐藏操作按钮
            // hideAdd={hideAdd}
            // hideCopy={hideCopy}
            // hideDelete={hideDelete}
            // hideMove={hideMove}
            ,
            addItem: handleAdd(operation.add),
            removeItem: handleRemove(operation.remove),
            moveItem: handleMove(operation.move),
            copyItem: handleCopy(operation.add),
            throttledOnValuesChange: throttledOnValuesChange
          }), (errors === null || errors === void 0 ? void 0 : errors.length) !== 0 && /*#__PURE__*/_jsx("div", {
            style: {
              marginBottom: '12px'
            },
            children: /*#__PURE__*/_jsx(_Form.ErrorList, {
              errors: errors
            })
          })]
        });
      }
    })
  });
});