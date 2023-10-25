var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/FormRender/models/transformProps.ts
var transformProps_exports = {};
__export(transformProps_exports, {
  default: () => transformProps_default
});
module.exports = __toCommonJS(transformProps_exports);
var transformProps = (props) => {
  const {
    schema,
    beforeFinish,
    onMount,
    // displayType = 'horizontal',
    watch,
    removeHiddenData = true,
    readOnly,
    column = 1,
    mapping,
    debugCss,
    locale,
    configProvider,
    allCollapsed,
    debounceInput,
    validateMessages,
    debug,
    id,
    labelWidth,
    maxWidth,
    form,
    onFinish,
    onFinishFailed,
    builtOperation,
    operateExtra,
    logOnMount,
    logOnSubmit,
    labelCol,
    fieldCol,
    hiddenSubmitButton,
    hasExportButton,
    exportFunc,
    ...otherProps
  } = props;
  const formProps = {
    ...otherProps
  };
  return {
    formProps,
    schema,
    // displayType,
    onFinish,
    beforeFinish,
    // form 没有这个 api, 感觉找不到时机
    onMount,
    watch,
    readOnly,
    column,
    mapping,
    debugCss,
    // 好像没用了
    locale,
    configProvider,
    builtOperation,
    form,
    labelWidth,
    allCollapsed,
    debounceInput,
    // 好像没用了
    validateMessages,
    debug,
    // 换成 form 还有用吗？
    id,
    onFinishFailed,
    removeHiddenData,
    operateExtra,
    logOnMount,
    logOnSubmit,
    labelCol,
    fieldCol,
    maxWidth,
    hiddenSubmitButton,
    hasExportButton,
    exportFunc
  };
};
var transformProps_default = transformProps;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
