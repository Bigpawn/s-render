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

// src/FormRender/widgets/components/UploadRender/index.tsx
var UploadRender_exports = {};
__export(UploadRender_exports, {
  default: () => UploadRender
});
module.exports = __toCommonJS(UploadRender_exports);
var import_icons = require("@ant-design/icons");
var import_antd = require("antd");
var import_lodash_es = require("lodash-es");
function UploadRender({
  action,
  value,
  onChange,
  uploadProps,
  buttonProps,
  schema
}) {
  const props = {
    name: "file",
    type: "file",
    action,
    // 旧的兼容
    onChange(info) {
      if (info.file.status === "done") {
        import_antd.message.success(`${info.file.name} 上传成功`);
        const path = (0, import_lodash_es.get)(schema, "props.path", "");
        const url = path ? (0, import_lodash_es.get)(info.file.response, path) : info.file.response.url;
        onChange(url);
      } else if (info.file.status === "error") {
        import_antd.message.error(`${info.file.name} 上传失败`);
      }
    },
    onRemove() {
      onChange("");
    },
    ...uploadProps
  };
  const defaultBtnProps = {
    icon: /* @__PURE__ */ React.createElement(import_icons.UploadOutlined, null),
    children: "上传"
  };
  const btnProps = {
    ...defaultBtnProps,
    ...buttonProps
  };
  return /* @__PURE__ */ React.createElement("div", { className: "fr-upload-mod" }, /* @__PURE__ */ React.createElement(import_antd.Upload, { ...props, className: "fr-upload-file" }, /* @__PURE__ */ React.createElement(import_antd.Button, { ...btnProps })), value && /* @__PURE__ */ React.createElement(
    "a",
    {
      href: value,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fr-upload-preview"
    },
    "上传地址"
  ));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
