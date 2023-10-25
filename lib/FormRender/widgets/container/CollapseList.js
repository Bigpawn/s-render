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

// src/FormRender/widgets/container/CollapseList.tsx
var CollapseList_exports = {};
__export(CollapseList_exports, {
  default: () => CollapseList_default
});
module.exports = __toCommonJS(CollapseList_exports);
var import_icons = require("@ant-design/icons");
var import_antd = require("antd");
var import_react = require("react");
var CollapseList_default = (props) => {
  const {
    schema,
    fields,
    addItem,
    renderCore,
    rootPath,
    removeItem,
    copyItem,
    form,
    moveItem
  } = props;
  const [activeKey, setActiveKey] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    setActiveKey(fields == null ? void 0 : fields.map((item) => item.name));
  }, [JSON.stringify(fields)]);
  const collapseChange = (keys) => {
    setActiveKey(keys);
  };
  const extraButtonStyle = {
    padding: 0
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const onDelete = (name) => (e) => {
    stopPropagation(e);
    removeItem(name);
  };
  const onCopy = (name) => (e) => {
    stopPropagation(e);
    const value = form.getFieldValue(rootPath.concat(name));
    copyItem(value ?? {});
  };
  const onMove = (from, to) => (e) => {
    stopPropagation(e);
    moveItem(from, to);
  };
  const extraRender = (0, import_react.useMemo)(
    () => (name) => /* @__PURE__ */ React.createElement(import_antd.Space, { split: /* @__PURE__ */ React.createElement(import_antd.Divider, { type: "vertical" }) }, /* @__PURE__ */ React.createElement(
      import_antd.Button,
      {
        type: "link",
        style: extraButtonStyle,
        disabled: name === 0,
        onClick: onMove(name, name - 1)
      },
      "上移"
    ), /* @__PURE__ */ React.createElement(
      import_antd.Button,
      {
        type: "link",
        style: extraButtonStyle,
        disabled: name === fields.length - 1,
        onClick: onMove(name, name + 1)
      },
      "下移"
    ), /* @__PURE__ */ React.createElement(
      import_antd.Popconfirm,
      {
        title: "确定删除吗？",
        onCancel: stopPropagation,
        onConfirm: onDelete(name)
      },
      /* @__PURE__ */ React.createElement(
        import_antd.Button,
        {
          type: "link",
          style: extraButtonStyle,
          danger: true,
          onClick: stopPropagation
        },
        "删除"
      )
    ), /* @__PURE__ */ React.createElement(import_antd.Button, { type: "link", style: extraButtonStyle, onClick: onCopy(name) }, "复制")),
    [JSON.stringify(fields)]
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, fields.length > 0 && /* @__PURE__ */ React.createElement(
    import_antd.Collapse,
    {
      activeKey,
      onChange: collapseChange,
      style: { marginBottom: "24px" },
      size: "small"
    },
    fields == null ? void 0 : fields.map((item) => /* @__PURE__ */ React.createElement(
      import_antd.Collapse.Panel,
      {
        key: item.name,
        header: `${schema == null ? void 0 : schema.title} ${item.name + 1}`,
        extra: extraRender(item.name)
      },
      /* @__PURE__ */ React.createElement(import_antd.Row, { gutter: 18 }, renderCore({
        schema: schema == null ? void 0 : schema.properties,
        parentPath: [item.name],
        rootPath: [...rootPath, item.name]
      }))
    ))
  ), /* @__PURE__ */ React.createElement(
    import_antd.Button,
    {
      icon: /* @__PURE__ */ React.createElement(import_icons.PlusOutlined, null),
      type: "dashed",
      block: (fields == null ? void 0 : fields.length) > 0,
      onClick: () => {
        addItem({});
      }
    },
    "新增一条"
  ));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
