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

// src/FormRender/widgets/components/ImportModal/index.tsx
var ImportModal_exports = {};
__export(ImportModal_exports, {
  default: () => ImportModal_default
});
module.exports = __toCommonJS(ImportModal_exports);
var import_icons = require("@ant-design/icons");
var import_antd = require("antd");
var import_react = require("react");
var import_excelUtil = __toESM(require("../../../utils/excelUtil"));
var import_index = require("./index.less");
var ImportModal = (0, import_react.forwardRef)((props, ref) => {
  const { title, onOk, onClose, schema } = props;
  const excelUtilRef = (0, import_react.useRef)();
  const [open, setOpen] = (0, import_react.useState)(false);
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [excelList, setExcelList] = (0, import_react.useState)(
    []
  );
  const [fileList, setFileList] = (0, import_react.useState)([]);
  const [modal, modalContext] = import_antd.Modal.useModal();
  const [switchForm] = import_antd.Form.useForm();
  (0, import_react.useEffect)(() => {
    if (schema) {
      excelUtilRef.current = new import_excelUtil.default(schema);
    }
  }, [JSON.stringify(schema)]);
  const onOpen = () => {
    setOpen(true);
  };
  const onCancel = () => {
    setOpen(false);
    setExcelList([]);
    setFileList([]);
    if (onClose) {
      onClose();
    }
  };
  const onModalOk = () => {
    if (onOk) {
      onOk(excelList);
    }
    onCancel();
  };
  const downloadTemplate = () => {
    modal.confirm({
      title: "是否开启模板校验模式",
      content: /* @__PURE__ */ React.createElement(import_antd.Form, { form: switchForm }, /* @__PURE__ */ React.createElement(
        import_antd.Form.Item,
        {
          tooltip: "开启后,模板中将包含字段的基本信息验证规则",
          valuePropName: "checked",
          name: "openSwitch"
        },
        /* @__PURE__ */ React.createElement(import_antd.Switch, { checkedChildren: "开启", unCheckedChildren: "不开启" })
      )),
      onOk: () => {
        var _a;
        const values = switchForm.getFieldsValue();
        (_a = excelUtilRef.current) == null ? void 0 : _a.exportExcelFile(
          [],
          `${title}模板.xlsx`,
          "Sheet1",
          values == null ? void 0 : values.openSwitch
        );
        switchForm.resetFields();
      },
      onCancel: () => {
        switchForm.resetFields();
      }
    });
  };
  const uploadChange = async (info) => {
    var _a;
    if (info.fileList.length === 0) {
      setExcelList([]);
      return;
    }
    setLoading(true);
    try {
      setFileList(info.fileList);
      const excelList2 = await ((_a = excelUtilRef.current) == null ? void 0 : _a.readExcelFile(info.file));
      setExcelList(excelList2);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  (0, import_react.useImperativeHandle)(
    ref,
    () => ({
      onOpen
    })
  );
  return /* @__PURE__ */ React.createElement(
    import_antd.Modal,
    {
      title: title ? `导入${title}` : "导入",
      open,
      onCancel,
      onOk: onModalOk,
      okText: "导入",
      confirmLoading: loading
    },
    modalContext,
    /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("a", { onClick: downloadTemplate }, "下载导入模板")),
    /* @__PURE__ */ React.createElement(
      import_antd.Upload.Dragger,
      {
        beforeUpload: () => false,
        maxCount: 1,
        accept: ".xls,.xlsx",
        onChange: uploadChange,
        fileList
      },
      /* @__PURE__ */ React.createElement(import_icons.ImportOutlined, { className: "import-modal-icon" }),
      /* @__PURE__ */ React.createElement("p", null, "点击或拖拽文件到此处上传文件")
    )
  );
});
var ImportModal_default = ImportModal;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
