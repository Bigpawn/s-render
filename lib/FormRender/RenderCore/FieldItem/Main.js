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

// src/FormRender/RenderCore/FieldItem/Main.tsx
var Main_exports = {};
__export(Main_exports, {
  default: () => Main_default
});
module.exports = __toCommonJS(Main_exports);
var import_antd = require("antd");
var import_lodash_es = require("lodash-es");
var import_react = require("react");
var import_zustand = require("zustand");
var import_context = require("../../models/context");
var import_validates = __toESM(require("../../models/validates"));
var valuePropNameMap = {
  Boolean: "checked"
};
var Main_default = (props) => {
  const { schema, path, dependValues, tableInline, rootPath } = props;
  const configCtx = (0, import_react.useContext)(import_context.ConfigContext);
  const formRenderContext = (0, import_react.useContext)(import_context.FormRenderContext);
  const { readOnly, layout } = (0, import_zustand.useStore)(
    formRenderContext,
    (state) => state == null ? void 0 : state.context
  );
  const { form, widgets, globalConfig, methods, globalRules } = configCtx;
  const { type, title, list, valueType, businessType, hidden } = schema;
  if (type === "Form" && !list) {
    if (hidden)
      return null;
    const Widget2 = widgets["boxCard"];
    return /* @__PURE__ */ React.createElement(import_antd.Col, { span: 24, style: { marginBottom: "24px" } }, /* @__PURE__ */ React.createElement(Widget2, { ...props }));
  }
  const mergeReadOnly = readOnly ?? (schema == null ? void 0 : schema.readOnly);
  const textWidget = type === "Text" ? "Text" : "ReadOnlyText";
  const widgetName = businessType ? businessType : mergeReadOnly ? textWidget : valueType ?? type;
  const Widget = widgets[widgetName];
  const defaultValue = schema.default ?? schema.defaultValue;
  const ruleList = (0, import_validates.default)(schema, form, methods);
  const valuePropName = schema.valuePropName || valuePropNameMap[valueType ?? type] || void 0;
  const span = (schema == null ? void 0 : schema.span) || (globalConfig == null ? void 0 : globalConfig.span) || 3;
  if (!Widget) {
    return null;
  }
  const Component = (0, import_react.useMemo)(() => {
    return (config) => {
      return Widget({
        placeholder: title,
        schema,
        dependValues,
        disabled: (config == null ? void 0 : config.disabled) ?? (schema == null ? void 0 : schema.disabled),
        readOnly: (config == null ? void 0 : config.readOnly) ?? mergeReadOnly,
        bordered: config == null ? void 0 : config.bordered,
        className: config == null ? void 0 : config.className
      });
    };
  }, [
    title,
    JSON.stringify(schema),
    JSON.stringify(dependValues),
    tableInline,
    span,
    hidden,
    widgetName,
    mergeReadOnly
  ]);
  const allPath = (0, import_react.useMemo)(() => {
    if (!path) {
      return void 0;
    }
    const _path = path.slice(0, path.length - 1);
    const currentName = path[path.length - 1];
    if (!currentName) {
      return void 0;
    }
    return [...rootPath || [], ..._path, "rules", currentName];
  }, [JSON.stringify(path), JSON.stringify(rootPath)]);
  return /* @__PURE__ */ React.createElement(import_antd.Col, { span: hidden ? 0 : tableInline ? 24 : 24 / span }, /* @__PURE__ */ React.createElement(
    import_antd.Form.Item,
    {
      noStyle: true,
      shouldUpdate: (prevValues, nextValues) => {
        if (allPath) {
          return !(0, import_lodash_es.isEqual)((0, import_lodash_es.get)(prevValues, allPath), (0, import_lodash_es.get)(nextValues, allPath));
        }
        return false;
      }
    },
    ({ getFieldValue }) => {
      const currentRule = allPath ? getFieldValue(allPath) : {};
      return /* @__PURE__ */ React.createElement(
        import_antd.Form.Item,
        {
          label: tableInline ? "" : title,
          labelCol: layout !== "vertical" ? { flex: "0 0 100px" } : {},
          colon: !tableInline,
          style: tableInline && {
            marginBottom: 0
          } || {},
          name: path,
          hidden,
          initialValue: (valueType ?? type) === "Boolean" ? false : defaultValue,
          valuePropName,
          rules: hidden ? [] : ruleList
        },
        Component({
          ...currentRule,
          bordered: !tableInline,
          className: tableInline ? "s-render-table-inline-component" : ""
        })
      );
    }
  ));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
