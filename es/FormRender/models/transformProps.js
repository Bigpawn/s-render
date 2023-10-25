function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["schema", "beforeFinish", "onMount", "watch", "removeHiddenData", "readOnly", "column", "mapping", "debugCss", "locale", "configProvider", "allCollapsed", "debounceInput", "validateMessages", "debug", "id", "labelWidth", "maxWidth", "form", "onFinish", "onFinishFailed", "builtOperation", "operateExtra", "logOnMount", "logOnSubmit", "labelCol", "fieldCol", "hiddenSubmitButton", "hasExportButton", "exportFunc"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// const displayTypeEnum = {
//   column: 'vertical',
//   row: 'horizontal',
//   inline: 'inline',
// };

var transformProps = function transformProps(props) {
  var schema = props.schema,
    beforeFinish = props.beforeFinish,
    onMount = props.onMount,
    watch = props.watch,
    _props$removeHiddenDa = props.removeHiddenData,
    removeHiddenData = _props$removeHiddenDa === void 0 ? true : _props$removeHiddenDa,
    readOnly = props.readOnly,
    _props$column = props.column,
    column = _props$column === void 0 ? 1 : _props$column,
    mapping = props.mapping,
    debugCss = props.debugCss,
    locale = props.locale,
    configProvider = props.configProvider,
    allCollapsed = props.allCollapsed,
    debounceInput = props.debounceInput,
    validateMessages = props.validateMessages,
    debug = props.debug,
    id = props.id,
    labelWidth = props.labelWidth,
    maxWidth = props.maxWidth,
    form = props.form,
    onFinish = props.onFinish,
    onFinishFailed = props.onFinishFailed,
    builtOperation = props.builtOperation,
    operateExtra = props.operateExtra,
    logOnMount = props.logOnMount,
    logOnSubmit = props.logOnSubmit,
    labelCol = props.labelCol,
    fieldCol = props.fieldCol,
    hiddenSubmitButton = props.hiddenSubmitButton,
    hasExportButton = props.hasExportButton,
    exportFunc = props.exportFunc,
    otherProps = _objectWithoutProperties(props, _excluded);
  var formProps = _objectSpread({}, otherProps);

  // if (displayType) {
  //   formProps.layout = (displayTypeEnum as any)[displayType] || 'horizontal';
  // }

  return {
    formProps: formProps,
    schema: schema,
    // displayType,
    onFinish: onFinish,
    beforeFinish: beforeFinish,
    // form 没有这个 api, 感觉找不到时机
    onMount: onMount,
    watch: watch,
    readOnly: readOnly,
    column: column,
    mapping: mapping,
    debugCss: debugCss,
    // 好像没用了
    locale: locale,
    configProvider: configProvider,
    builtOperation: builtOperation,
    form: form,
    labelWidth: labelWidth,
    allCollapsed: allCollapsed,
    debounceInput: debounceInput,
    // 好像没用了
    validateMessages: validateMessages,
    debug: debug,
    // 换成 form 还有用吗？
    id: id,
    onFinishFailed: onFinishFailed,
    removeHiddenData: removeHiddenData,
    operateExtra: operateExtra,
    logOnMount: logOnMount,
    logOnSubmit: logOnSubmit,
    labelCol: labelCol,
    fieldCol: fieldCol,
    maxWidth: maxWidth,
    hiddenSubmitButton: hiddenSubmitButton,
    hasExportButton: hasExportButton,
    exportFunc: exportFunc
  };
};
export default transformProps;