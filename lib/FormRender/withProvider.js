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

// src/FormRender/withProvider.tsx
var withProvider_exports = {};
__export(withProvider_exports, {
  default: () => withProvider_default
});
module.exports = __toCommonJS(withProvider_exports);
var import_antd = require("antd");
var import_en_US = __toESM(require("antd/lib/locale/en_US"));
var import_zh_CN = __toESM(require("antd/lib/locale/zh_CN"));
var import_dayjs = __toESM(require("dayjs"));
var import_zh_cn = require("dayjs/locale/zh-cn");
var import_react = require("react");
var import_context = require("../FormRender/models/context");
var import_store = require("../FormRender/models/store");
var import_widgets = require("./widgets");
var import_withProvider = require("./withProvider.scss");
var withProvider = (Element) => {
  return (props) => {
    const {
      configProvider,
      locale = "zh-CN",
      widgets,
      methods,
      form,
      validateMessages,
      globalProps = {},
      globalConfig = {},
      themeConfig = {},
      request,
      ...otherProps
    } = props;
    const storeRef = (0, import_react.useRef)((0, import_store.create)());
    const store = storeRef.current;
    (0, import_react.useEffect)(() => {
      if (locale === "en-US") {
        import_dayjs.default.locale("en");
        return;
      }
      import_dayjs.default.locale("zh-cn");
    }, [locale]);
    (0, import_react.useEffect)(() => {
      return () => {
        form == null ? void 0 : form.resetFields();
      };
    }, []);
    if (!form) {
      console.warn("Please provide a form instance to FormRender");
      return null;
    }
    const configContext = {
      locale,
      widgets: { ...import_widgets.widgets, ...widgets },
      methods,
      form,
      globalProps,
      globalConfig,
      request,
      themeConfig
    };
    const antdLocale = locale === "zh-CN" ? import_zh_CN.default : import_en_US.default;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "s-render-box",
        style: (themeConfig == null ? void 0 : themeConfig.colorPrimary) ? {
          // @ts-ignore
          "--data-primary": themeConfig.colorPrimary
        } : {}
      },
      /* @__PURE__ */ React.createElement(
        import_antd.ConfigProvider,
        {
          theme: {
            token: themeConfig
          },
          ...configProvider,
          locale: antdLocale,
          form: {
            validateMessages
          }
        },
        /* @__PURE__ */ React.createElement(import_context.ConfigContext.Provider, { value: configContext }, /* @__PURE__ */ React.createElement(import_context.FormRenderContext.Provider, { value: store }, /* @__PURE__ */ React.createElement(Element, { form, ...otherProps })))
      )
    );
  };
};
var withProvider_default = withProvider;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
