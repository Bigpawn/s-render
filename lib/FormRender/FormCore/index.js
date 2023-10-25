var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/FormRender/FormCore/index.tsx
var FormCore_exports = {};
__export(FormCore_exports, {
  default: () => FormCore_default
});
module.exports = __toCommonJS(FormCore_exports);
var import_icons = require("@ant-design/icons");
var import_antd = require("antd");
var import_lodash_es = require("lodash-es");
var import_react = require("react");
var import_zustand = require("zustand");
var import_RenderCore = __toESM(require("../RenderCore"));
var import_bindValues = require("../models/bindValues");
var import_context = require("../models/context");
var import_formCoreUtils = require("../models/formCoreUtils");
var import_transformProps = __toESM(require("../models/transformProps"));
var import_utils = require("../utils");
var import_index = require("./index.less");
var FormCore = (0, import_react.memo)((props) => {
  const store = (0, import_react.useContext)(import_context.FormRenderContext);
  const schema = (0, import_zustand.useStore)(store, (state) => state.schema);
  const flattSchema = (0, import_zustand.useStore)(store, (state) => state.flattenSchema);
  const setContext = (0, import_zustand.useStore)(store, (state) => state.setContext);
  const { type, properties, ...schemaProps } = schema || {};
  const {
    formProps,
    // displayType,
    beforeFinish,
    watch = {},
    onMount,
    column,
    labelWidth,
    labelCol,
    fieldCol,
    maxWidth,
    form,
    onFinish,
    onFinishFailed,
    readOnly,
    removeHiddenData,
    operateExtra,
    logOnMount,
    logOnSubmit,
    id,
    hiddenSubmitButton,
    hasExportButton,
    exportFunc
  } = (0, import_transformProps.default)({ ...props, ...schemaProps });
  const onMountLogger = () => {
    const start = new Date().getTime();
    if ((0, import_utils.isFunction)(logOnMount) || (0, import_utils.isFunction)(logOnSubmit)) {
      (0, import_formCoreUtils.setSessionItem)("FORM_MOUNT_TIME", start);
      (0, import_formCoreUtils.setSessionItem)("FORM_START", start);
    }
    if ((0, import_utils.isFunction)(logOnMount)) {
      const logParams = {
        schema: props.schema,
        url: location.href,
        formData: JSON.stringify(form.getValues()),
        formMount: (0, import_formCoreUtils.yymmdd)(start)
      };
      if (id) {
        logParams.id = id;
      }
      logOnMount(logParams);
    }
    if ((0, import_utils.isFunction)(logOnSubmit)) {
      (0, import_formCoreUtils.setSessionItem)("NUMBER_OF_SUBMITS", 0);
      (0, import_formCoreUtils.setSessionItem)("FAILED_ATTEMPTS", 0);
    }
  };
  const initial = async () => {
    if (onMount) {
      await onMount();
    }
    const values = form.getValues();
    (0, import_formCoreUtils.immediateWatch)(watch, values);
    onMountLogger();
  };
  (0, import_react.useEffect)(() => {
    form.__initStore(store);
    setTimeout(initial, 0);
  }, []);
  (0, import_react.useEffect)(() => {
    form.setSchema(props.schema, true);
  }, [props.schema]);
  (0, import_react.useEffect)(() => {
    const context = {
      column,
      readOnly,
      labelWidth,
      // displayType,
      labelCol,
      fieldCol,
      maxWidth,
      layout: formProps == null ? void 0 : formProps.layout
    };
    setContext(context);
  }, [column, labelCol, fieldCol, labelWidth, maxWidth, readOnly]);
  const onReset = () => {
    form.resetFields();
  };
  const onSubmitLogger = (params) => {
    if (!(0, import_utils.isFunction)(logOnSubmit)) {
      return;
    }
    const start = (0, import_formCoreUtils.getSessionItem)("FORM_START");
    const mount = (0, import_formCoreUtils.getSessionItem)("FORM_MOUNT_TIME");
    const numberOfSubmits = (0, import_formCoreUtils.getSessionItem)("NUMBER_OF_SUBMITS") + 1;
    const end = new Date().getTime();
    let failedAttempts = (0, import_formCoreUtils.getSessionItem)("FAILED_ATTEMPTS");
    if (params.errorFields.length > 0) {
      failedAttempts = failedAttempts + 1;
    }
    const logParams = {
      formMount: (0, import_formCoreUtils.yymmdd)(mount),
      ms: end - start,
      duration: (0, import_formCoreUtils.msToTime)(end - start),
      numberOfSubmits,
      failedAttempts,
      url: location.href,
      formData: JSON.stringify(params.values),
      errors: JSON.stringify(params.errorFields),
      schema: JSON.stringify(schema)
    };
    if (id) {
      logParams.id = id;
    }
    logOnSubmit(logParams);
    (0, import_formCoreUtils.setSessionItem)("FORM_START", end);
    (0, import_formCoreUtils.setSessionItem)("NUMBER_OF_SUBMITS", numberOfSubmits);
    (0, import_formCoreUtils.setSessionItem)("FAILED_ATTEMPTS", failedAttempts);
  };
  const handleFinish = async (_values) => {
    onSubmitLogger({ values: _values });
    let values = (0, import_utils._cloneDeep)(_values);
    if (!removeHiddenData) {
      values = (0, import_utils._cloneDeep)(form.getFieldsValue(true));
    }
    let fieldsError = beforeFinish ? await beforeFinish({ data: values, schema, errors: [] }) : null;
    fieldsError = (0, import_formCoreUtils.transformFieldsError)(fieldsError);
    if (fieldsError) {
      form.setFields(fieldsError);
      return;
    }
    if (onFinish) {
      onFinish(values, []);
    }
  };
  const handleFinishFailed = async (params) => {
    onSubmitLogger(params);
    if (!onFinishFailed) {
      return;
    }
    let values = (0, import_lodash_es.cloneDeep)((params == null ? void 0 : params.values) || {});
    if (!removeHiddenData) {
      values = (0, import_lodash_es.cloneDeep)(form.getFieldsValue(true));
    }
    values = (0, import_bindValues.parseValuesToBind)(values, flattSchema);
    values = (0, import_utils.valueRemoveUndefined)(values);
    let fieldsError = beforeFinish ? await beforeFinish({ data: values, schema, errors: [] }) : null;
    fieldsError = (0, import_formCoreUtils.transformFieldsError)(fieldsError);
    if (fieldsError) {
      form.setFields(fieldsError);
      return;
    }
    if (onFinish) {
      onFinish(values, []);
    }
  };
  const handleValuesChange = (changedValues, _allValues) => {
    const allValues = (0, import_utils.valueRemoveUndefined)(_allValues);
    (0, import_formCoreUtils.valuesWatch)(changedValues, allValues, watch);
  };
  const throttledOnValuesChange = (0, import_lodash_es.debounce)(handleValuesChange, 500);
  const exportClick = () => {
    if ((0, import_utils.isFunction)(exportFunc)) {
      exportFunc({
        physicalName: schema == null ? void 0 : schema.key
      });
    }
  };
  const importBefore = (file) => {
    const fileRender = new FileReader();
    fileRender.readAsText(file, "utf-8");
    fileRender.onload = (res) => {
      const result = res.target.result;
      const data = result && result.length > 0 ? JSON.parse(result) : {};
      form.setFieldsValue(data);
    };
  };
  return schema && Object.keys(schema).length > 0 && /* @__PURE__ */ React.createElement("div", { className: `form-wrapper ${readOnly ? "s-render-read-only" : ""}` }, /* @__PURE__ */ React.createElement(
    import_antd.Form,
    {
      ...formProps,
      form,
      labelWrap: true,
      onFinish: handleFinish,
      scrollToFirstError: true,
      onFinishFailed: handleFinishFailed,
      onValuesChange: throttledOnValuesChange
    },
    schema && /* @__PURE__ */ React.createElement(import_antd.Row, { gutter: 24 }, /* @__PURE__ */ React.createElement(import_antd.Col, { span: 24 / column }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", marginBottom: "24px" } }, /* @__PURE__ */ React.createElement(import_antd.Space, null, !readOnly && [
      !hiddenSubmitButton && /* @__PURE__ */ React.createElement(import_antd.Button, { type: "primary", htmlType: "submit", key: "submit" }, "提交"),
      /* @__PURE__ */ React.createElement(import_antd.Button, { onClick: onReset, key: "reset" }, "重置"),
      /* @__PURE__ */ React.createElement(
        import_antd.Upload,
        {
          showUploadList: false,
          beforeUpload: importBefore,
          accept: ".json",
          key: "import"
        },
        /* @__PURE__ */ React.createElement(import_antd.Button, { icon: /* @__PURE__ */ React.createElement(import_icons.ImportOutlined, null) }, "导入")
      )
    ], hasExportButton && /* @__PURE__ */ React.createElement(import_antd.Button, { icon: /* @__PURE__ */ React.createElement(import_icons.ExportOutlined, null), onClick: exportClick }, "导出"))))),
    /* @__PURE__ */ React.createElement(import_antd.Row, { gutter: 24 }, /* @__PURE__ */ React.createElement(
      import_RenderCore.default,
      {
        schema: schema == null ? void 0 : schema.properties,
        throttledOnValuesChange: handleValuesChange
      }
    ), operateExtra)
  ));
});
var FormCore_default = FormCore;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
