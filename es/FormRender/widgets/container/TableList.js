function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/table/style";
import _Table from "antd/es/table";
import _ExportOutlined from "@ant-design/icons/lib/icons/ExportOutlined";
import _ImportOutlined from "@ant-design/icons/lib/icons/ImportOutlined";
import _PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import "antd/es/space/style";
import _Space from "antd/es/space";
import _CopyOutlined from "@ant-design/icons/lib/icons/CopyOutlined";
import "antd/es/popconfirm/style";
import _Popconfirm from "antd/es/popconfirm";
import _DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import _VerticalAlignBottomOutlined from "@ant-design/icons/lib/icons/VerticalAlignBottomOutlined";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
import "antd/es/button/style";
import _Button from "antd/es/button";
import _VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
var _excluded = ["schema", "record", "dataIndex", "title", "index", "children"];
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { cloneDeep, set } from 'lodash-es';
import { useContext, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useStore } from 'zustand';
import { FormRenderContext } from "../../models/context";
import { filterSchema } from "../../utils";
import ExcelUtil from "../../utils/excelUtil";
import ImportModal from "../components/ImportModal";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var RequiredTitle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &::before {\n    display: inline-block;\n    margin-inline-end: 4px;\n    color: #ff4d4f;\n    font-size: 14px;\n    font-family: SimSun, sans-serif;\n    line-height: 1;\n    content: '*';\n  }\n"])));
var TableList = function TableList(props) {
  var rootPath = props.rootPath,
    schema = props.schema,
    renderItem = props.renderItem,
    fields = props.fields,
    addItem = props.addItem,
    moveItem = props.moveItem,
    copyItem = props.copyItem,
    removeItem = props.removeItem,
    form = props.form,
    throttledOnValuesChange = props.throttledOnValuesChange;
  var importModalRef = useRef();
  var excelUtilRef = useRef();
  var formRenderContext = useContext(FormRenderContext);
  var _useStore = useStore(formRenderContext, function (state) {
      return state === null || state === void 0 ? void 0 : state.context;
    }),
    readOnly = _useStore.readOnly;
  useEffect(function () {
    if (schema) {
      excelUtilRef.current = new ExcelUtil((schema === null || schema === void 0 ? void 0 : schema.properties) || {});
    }
  }, [JSON.stringify(schema)]);
  var extraButtonStyle = {
    padding: 0
  };
  var onMove = function onMove(from, to) {
    return function () {
      moveItem(from, to);
    };
  };
  var onDelete = function onDelete(name) {
    return function () {
      removeItem(name);
    };
  };
  var onCopy = function onCopy(name) {
    return function () {
      var value = form.getFieldValue(rootPath.concat(name));
      copyItem(value !== null && value !== void 0 ? value : {});
    };
  };
  var getRequireBySchema = useMemo(function () {
    var _schema$properties;
    return Object.values((_schema$properties = schema === null || schema === void 0 ? void 0 : schema.properties) !== null && _schema$properties !== void 0 ? _schema$properties : {}).some(function (item) {
      return (item === null || item === void 0 ? void 0 : item.required) === true;
    });
  }, [JSON.stringify(schema === null || schema === void 0 ? void 0 : schema.properties)]);
  var columns = useMemo(function () {
    return filterSchema(schema === null || schema === void 0 ? void 0 : schema.properties).filter(function (key) {
      var _schema$properties2, _schema$properties2$k;
      return (schema === null || schema === void 0 ? void 0 : (_schema$properties2 = schema.properties) === null || _schema$properties2 === void 0 ? void 0 : (_schema$properties2$k = _schema$properties2[key]) === null || _schema$properties2$k === void 0 ? void 0 : _schema$properties2$k.hidden) !== true;
    }).map(function (key) {
      var item = schema === null || schema === void 0 ? void 0 : schema.properties[key];
      return {
        dataIndex: key,
        title: item !== null && item !== void 0 && item.required ? /*#__PURE__*/_jsx(RequiredTitle, {
          children: item === null || item === void 0 ? void 0 : item.title
        }) : item === null || item === void 0 ? void 0 : item.title,
        onCell: function onCell(record) {
          return {
            record: record,
            schema: item,
            dataIndex: key,
            title: item === null || item === void 0 ? void 0 : item.title
          };
        }
      };
    }).concat(!readOnly && [{
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
      width: 100,
      onCell: function onCell(record) {
        return {
          record: record,
          dataIndex: 'action'
        };
      },
      render: function render(_, record) {
        return /*#__PURE__*/_jsxs(_Space, {
          children: [/*#__PURE__*/_jsx(_Tooltip, {
            title: "\u4E0A\u79FB",
            children: /*#__PURE__*/_jsx(_Button, {
              type: "link",
              disabled: (record === null || record === void 0 ? void 0 : record.name) === 0,
              style: extraButtonStyle,
              onClick: onMove(record === null || record === void 0 ? void 0 : record.name, (record === null || record === void 0 ? void 0 : record.name) - 1),
              icon: /*#__PURE__*/_jsx(_VerticalAlignTopOutlined, {})
            })
          }), /*#__PURE__*/_jsx(_Tooltip, {
            title: "\u4E0B\u79FB",
            children: /*#__PURE__*/_jsx(_Button, {
              type: "link",
              style: extraButtonStyle,
              disabled: (record === null || record === void 0 ? void 0 : record.name) === fields.length - 1,
              onClick: onMove(record === null || record === void 0 ? void 0 : record.name, (record === null || record === void 0 ? void 0 : record.name) + 1),
              icon: /*#__PURE__*/_jsx(_VerticalAlignBottomOutlined, {})
            })
          }), /*#__PURE__*/_jsx(_Tooltip, {
            title: "\u5220\u9664",
            children: !(getRequireBySchema && fields.length === 1) && /*#__PURE__*/_jsx(_Popconfirm, {
              title: "\u786E\u5B9A\u5220\u9664\u5417\uFF1F",
              onConfirm: onDelete(record === null || record === void 0 ? void 0 : record.name),
              children: /*#__PURE__*/_jsx(_Button, {
                type: "link",
                danger: true,
                style: extraButtonStyle,
                icon: /*#__PURE__*/_jsx(_DeleteOutlined, {})
              })
            })
          }), /*#__PURE__*/_jsx(_Tooltip, {
            title: "\u590D\u5236",
            children: /*#__PURE__*/_jsx(_Button, {
              type: "link",
              style: extraButtonStyle,
              onClick: onCopy(record === null || record === void 0 ? void 0 : record.name),
              icon: /*#__PURE__*/_jsx(_CopyOutlined, {})
            })
          })]
        });
      }
    }] || []);
  }, [JSON.stringify(schema === null || schema === void 0 ? void 0 : schema.properties), fields === null || fields === void 0 ? void 0 : fields.length, getRequireBySchema, readOnly]);
  var EditableCell = function EditableCell(props) {
    var schema = props.schema,
      record = props.record,
      dataIndex = props.dataIndex,
      title = props.title,
      index = props.index,
      children = props.children,
      otherProps = _objectWithoutProperties(props, _excluded);
    if (dataIndex === 'action') {
      return /*#__PURE__*/_jsx("td", _objectSpread(_objectSpread({}, otherProps), {}, {
        children: children
      }));
    }
    return /*#__PURE__*/_jsx("td", _objectSpread(_objectSpread({}, otherProps), {}, {
      children: schema && renderItem({
        schema: schema,
        path: [record === null || record === void 0 ? void 0 : record.name, dataIndex],
        rootPath: rootPath,
        key: dataIndex,
        tableInline: true
      })
    }));
  };
  var onAddClick = function onAddClick() {
    addItem({});
  };

  /**
   * 打开导入弹窗
   */
  var importClick = function importClick() {
    var _importModalRef$curre;
    (_importModalRef$curre = importModalRef.current) === null || _importModalRef$curre === void 0 ? void 0 : _importModalRef$curre.onOpen();
  };
  var importOk = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(list) {
      var _list, values, allValues;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _list = cloneDeep(list);
            values = form.getFieldsValue(); // const currentValuesByPath = get(values, rootPath) || [];
            // const currentValuesByPathLength = currentValuesByPath?.length;
            allValues = cloneDeep(values);
            set(allValues, rootPath, _toConsumableArray(_list));
            form.setFieldsValue(allValues);
            _list === null || _list === void 0 ? void 0 : _list.forEach(function (item, index) {
              // const _index = currentValuesByPathLength + index;
              var _index = index;
              var newArr = [];
              var current = {};
              newArr[_index] = item;
              set(current, rootPath, newArr);
              throttledOnValuesChange === null || throttledOnValuesChange === void 0 ? void 0 : throttledOnValuesChange(current, allValues);
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function importOk(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var exportClick = function exportClick() {
    var _excelUtilRef$current;
    var values = form.getFieldValue(rootPath);
    (_excelUtilRef$current = excelUtilRef.current) === null || _excelUtilRef$current === void 0 ? void 0 : _excelUtilRef$current.exportExcelFile(values, "".concat(schema === null || schema === void 0 ? void 0 : schema.title, ".xlsx"));
  };
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs(_Card, {
      title: schema === null || schema === void 0 ? void 0 : schema.title,
      size: "small",
      extra: /*#__PURE__*/_jsxs(_Space, {
        children: [!readOnly && /*#__PURE__*/_jsx(_Button, {
          icon: /*#__PURE__*/_jsx(_PlusOutlined, {}),
          type: "primary",
          size: "small",
          onClick: onAddClick,
          children: "\u6DFB\u52A0"
        }), (schema === null || schema === void 0 ? void 0 : schema.isImport) && !readOnly && /*#__PURE__*/_jsx(_Button, {
          icon: /*#__PURE__*/_jsx(_ImportOutlined, {}),
          size: "small",
          onClick: importClick,
          children: "\u5BFC\u5165"
        }), /*#__PURE__*/_jsx(_Button, {
          size: "small",
          icon: /*#__PURE__*/_jsx(_ExportOutlined, {}),
          onClick: exportClick,
          children: "\u5BFC\u51FA"
        })]
      }),
      children: [/*#__PURE__*/_jsx(_Table, {
        columns: columns,
        size: "small",
        dataSource: fields !== null && fields !== void 0 ? fields : [],
        className: "s-render-table-wrapper",
        pagination: false,
        bordered: true,
        components: {
          body: {
            cell: EditableCell
          }
        },
        scroll: {
          x: 'max-content'
        }
      }), /*#__PURE__*/_jsx(ImportModal, {
        title: schema === null || schema === void 0 ? void 0 : schema.title,
        onOk: importOk,
        ref: importModalRef,
        schema: (schema === null || schema === void 0 ? void 0 : schema.properties) || {}
      })]
    })
  });
};
export default TableList;