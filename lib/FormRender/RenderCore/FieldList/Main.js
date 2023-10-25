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

// src/FormRender/RenderCore/FieldList/Main.tsx
var Main_exports = {};
__export(Main_exports, {
  default: () => Main_default
});
module.exports = __toCommonJS(Main_exports);
var import_antd = require("antd");
var Main_default = (props) => {
  const {
    form,
    schema,
    path,
    parentLitPath,
    renderCore,
    rootPath,
    configContext,
    renderItem,
    throttledOnValuesChange
  } = props;
  if (schema == null ? void 0 : schema.hidden) {
    return null;
  }
  const { widgets } = configContext;
  const { widget } = schema;
  const Widget = widgets[widget || "tableList"];
  const preRootPath = (rootPath || []).splice(0, rootPath.length - 1);
  const handleAdd = (add) => (data) => {
    add(data ?? {});
  };
  const handleRemove = (remove) => (index) => {
    remove(index);
  };
  const handleMove = (move) => (from, to) => {
    move(from, to);
  };
  const handleCopy = (add) => (value) => {
    add(value);
  };
  const defaultValue = [{}];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_antd.Form.List, { name: path, initialValue: defaultValue }, (fields, operation, { errors }) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      Widget,
      {
        configContext,
        form,
        schema,
        fields,
        operation,
        path,
        listName: path,
        parentLitPath,
        rootPath: [...preRootPath, ...path],
        renderCore,
        renderItem,
        widgets,
        addItem: handleAdd(operation.add),
        removeItem: handleRemove(operation.remove),
        moveItem: handleMove(operation.move),
        copyItem: handleCopy(operation.add),
        throttledOnValuesChange
      }
    ), (errors == null ? void 0 : errors.length) !== 0 && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ React.createElement(import_antd.Form.ErrorList, { errors })));
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
