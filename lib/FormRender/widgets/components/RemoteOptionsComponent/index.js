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

// src/FormRender/widgets/components/RemoteOptionsComponent/index.tsx
var RemoteOptionsComponent_exports = {};
__export(RemoteOptionsComponent_exports, {
  RemoteOptionsValueType: () => RemoteOptionsValueType,
  default: () => RemoteOptionsComponent_default
});
module.exports = __toCommonJS(RemoteOptionsComponent_exports);
var import_antd = require("antd");
var import_react = require("react");
var import_context = require("../../../models/context");
var RemoteOptionsValueType = /* @__PURE__ */ ((RemoteOptionsValueType2) => {
  RemoteOptionsValueType2["Select"] = "Select";
  RemoteOptionsValueType2["TreeSelect"] = "TreeSelect";
  RemoteOptionsValueType2["Checkbox"] = "Checkbox";
  RemoteOptionsValueType2["Radio"] = "Radio";
  return RemoteOptionsValueType2;
})(RemoteOptionsValueType || {});
var RemoteOptionsComponent = (0, import_react.memo)((props) => {
  const { request } = (0, import_react.useContext)(import_context.ConfigContext);
  const {
    schema,
    valueType,
    addons,
    globalProps,
    dependValues,
    ...otherProps
  } = props;
  const { sourceAction, sourceParams, sourceMethod, dependenciesParamKeys } = schema || {};
  const [options, setOptions] = (0, import_react.useState)([]);
  const timerRef = (0, import_react.useRef)(0);
  if (!request) {
    throw new Error("请配置request");
  }
  const getList = () => {
    const params = dependenciesParamKeys == null ? void 0 : dependenciesParamKeys.reduce(
      (obj, current, index) => {
        obj[current] = dependValues[index];
        return obj;
      },
      {}
    );
    request({
      url: sourceAction,
      method: sourceMethod,
      data: {
        ...sourceParams,
        params: dependValues && (dependValues == null ? void 0 : dependValues.length) > 0 ? params : {}
      }
    }).then((res) => {
      var _a;
      setOptions(
        (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((item) => ({
          label: item == null ? void 0 : item.comment,
          value: item == null ? void 0 : item.code
        }))
      );
    });
  };
  (0, import_react.useEffect)(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      getList();
    }, 300);
  }, [JSON.stringify(dependValues)]);
  const Components = {
    ["Select" /* Select */]: import_antd.Select,
    ["TreeSelect" /* TreeSelect */]: import_antd.TreeSelect,
    ["Checkbox" /* Checkbox */]: import_antd.Checkbox.Group,
    ["Radio" /* Radio */]: import_antd.Radio.Group
  };
  const Component = Components[valueType] ?? import_antd.Select;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Component, { options, ...otherProps }));
});
var RemoteOptionsComponent_default = RemoteOptionsComponent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RemoteOptionsValueType
});
