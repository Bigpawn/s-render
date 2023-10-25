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

// src/FormRender/widgets/index.tsx
var widgets_exports = {};
__export(widgets_exports, {
  DateWrap: () => DateWrap,
  EmptyWrap: () => EmptyWrap,
  widgets: () => widgets,
  withWrap: () => withWrap
});
module.exports = __toCommonJS(widgets_exports);
var import_antd = require("antd");
var import_RemoteOptionsComponent = __toESM(require("../../FormRender/widgets/components/RemoteOptionsComponent"));
var import_CapCurrency = __toESM(require("./components/CapCurrency"));
var import_DatePickerCustomer = __toESM(require("./components/DatePickerCustomer"));
var import_PercentComponent = __toESM(require("./components/PercentComponent"));
var import_ReadOnlyText = __toESM(require("./components/ReadOnlyText"));
var import_Text = __toESM(require("./components/Text"));
var import_UploadRender = __toESM(require("./components/UploadRender"));
var import_BoxCard = __toESM(require("./container/BoxCard"));
var import_CollapseList = __toESM(require("./container/CollapseList"));
var import_TableList = __toESM(require("./container/TableList"));
function withWrap(Comp, config) {
  return (props) => {
    const { addons, schema, globalProps, dependValues, ...otherProps } = props;
    const { valueType, ...otherConfig } = config || {};
    if (schema == null ? void 0 : schema.sourceAction) {
      return /* @__PURE__ */ React.createElement(import_RemoteOptionsComponent.default, { ...props, ...config });
    }
    const options = schema == null ? void 0 : schema.options;
    if (options) {
      return /* @__PURE__ */ React.createElement(
        Comp,
        {
          ...otherProps,
          ...otherConfig ?? {},
          options: options || []
        }
      );
    }
    if ((otherProps == null ? void 0 : otherProps.prefix) || (schema == null ? void 0 : schema.prefix)) {
      const isThousandth = {
        formatter: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        parser: (value) => value.replace(/\$\s?|(,*)/g, "")
      };
      return /* @__PURE__ */ React.createElement(
        Comp,
        {
          ...otherProps,
          ...config ?? {},
          prefix: (schema == null ? void 0 : schema.prefix) || (otherProps == null ? void 0 : otherProps.prefix),
          ...(schema == null ? void 0 : schema.isThousandth) && isThousandth || {}
        }
      );
    }
    return /* @__PURE__ */ React.createElement(Comp, { ...otherProps, ...otherConfig ?? {} });
  };
}
function DateWrap(Component, config) {
  return (props) => {
    const { addons, schema, globalProps, dependValues, ...otherProps } = props;
    return /* @__PURE__ */ React.createElement(Component, { ...otherProps, ...config ?? {} });
  };
}
function EmptyWrap(Component, config) {
  return (props) => {
    const { addons, schema, globalProps, dependValues, ...otherProps } = props;
    return /* @__PURE__ */ React.createElement(Component, { ...otherProps, ...config ?? {} });
  };
}
var withWrapSelect = () => {
  return (props) => {
    const { addons, schema, globalProps, dependValues, ...otherProps } = props;
    const options = (schema == null ? void 0 : schema.options) ?? [];
    return /* @__PURE__ */ React.createElement(
      import_antd.Select,
      {
        allowClear: true,
        showSearch: true,
        optionFilterProp: "label",
        popupMatchSelectWidth: true,
        options,
        dropdownStyle: { minWidth: "200px" },
        ...otherProps
      }
    );
  };
};
var withWrapSelectMultiple = () => {
  return (props) => {
    const { addons, schema, globalProps, dependValues, ...otherProps } = props;
    const options = (schema == null ? void 0 : schema.options) ?? [];
    return /* @__PURE__ */ React.createElement(
      import_antd.Select,
      {
        allowClear: true,
        showSearch: true,
        optionFilterProp: "label",
        popupMatchSelectWidth: true,
        options,
        mode: "multiple",
        dropdownStyle: { minWidth: "200px" },
        ...otherProps
      }
    );
  };
};
var withWrapTreeSelect = () => {
  return (props) => {
    const { addons, schema, globalProps, dependValues, ...otherProps } = props;
    const options = (schema == null ? void 0 : schema.options) ?? [];
    return /* @__PURE__ */ React.createElement(
      import_antd.TreeSelect,
      {
        allowClear: true,
        showSearch: true,
        treeNodeLabelProp: "label",
        popupMatchSelectWidth: true,
        treeData: options,
        dropdownStyle: { minWidth: "200px" },
        ...otherProps
      }
    );
  };
};
var widgets = {
  boxCard: import_BoxCard.default,
  collapseList: import_CollapseList.default,
  tableList: import_TableList.default,
  String: withWrap(import_antd.Input),
  Int: withWrap(import_antd.InputNumber, {
    style: { width: "100%" },
    formatter: (value) => value === 0 ? void 0 : value,
    controls: false
  }),
  Boolean: withWrap(import_antd.Switch),
  Percent: withWrap(import_PercentComponent.default, {
    addonAfter: "%",
    style: { width: "100%" },
    formatter: (value) => value === 0 ? void 0 : value,
    controls: false
  }),
  Money: withWrap(import_antd.InputNumber, {
    prefix: "￥",
    style: { width: "100%" },
    formatter: (value) => value === 0 ? void 0 : value,
    controls: false
  }),
  Date: DateWrap(import_DatePickerCustomer.default, {
    valueType: import_DatePickerCustomer.DatePickerValueType.DatePicker,
    style: { width: "100%" }
  }),
  DateRange: DateWrap(import_DatePickerCustomer.default, {
    valueType: import_DatePickerCustomer.DatePickerValueType.DateRange,
    placeholder: ["开始时间", "结束时间"],
    style: { width: "100%" }
  }),
  DateTimeRange: DateWrap(import_DatePickerCustomer.default, {
    valueType: import_DatePickerCustomer.DatePickerValueType.DateTimeRange,
    placeholder: ["开始时间", "结束时间"],
    style: { width: "100%" }
  }),
  DateTime: DateWrap(import_DatePickerCustomer.default, {
    valueType: import_DatePickerCustomer.DatePickerValueType.DateTime,
    style: { width: "100%" }
  }),
  Number: withWrap(import_antd.InputNumber, {
    style: { width: "100%" },
    formatter: (value) => value === 0 ? void 0 : value,
    controls: false
  }),
  Enum: withWrapSelect(),
  Select: withWrapSelect(),
  SelectMultiple: withWrapSelectMultiple(),
  SelectTree: withWrapTreeSelect(),
  Checkbox: withWrap(import_antd.Checkbox.Group),
  Radio: withWrap(import_antd.Radio.Group),
  CapCurrency: withWrap(import_CapCurrency.default),
  File: withWrap(import_UploadRender.default),
  Text: EmptyWrap(import_Text.default, {}),
  ReadOnlyText: EmptyWrap(import_ReadOnlyText.default, {}),
  TextArea: withWrap(import_antd.Input.TextArea)
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DateWrap,
  EmptyWrap,
  widgets,
  withWrap
});
