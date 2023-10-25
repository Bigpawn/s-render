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

// src/FormRender/RenderCore/index.tsx
var RenderCore_exports = {};
__export(RenderCore_exports, {
  default: () => RenderCore_default
});
module.exports = __toCommonJS(RenderCore_exports);
var import_GroupCard = __toESM(require("../../FormRender/widgets/container/GroupCard"));
var import_FieldItem = __toESM(require("../RenderCore/FieldItem"));
var import_FieldList = __toESM(require("../RenderCore/FieldList"));
var import_utils = require("../utils");
var renderItem = (props) => {
  let { schema, rootPath, path, key, tableInline, throttledOnValuesChange } = props;
  if (schema.type === "Group") {
    return /* @__PURE__ */ React.createElement(import_GroupCard.default, { ...props, renderCore: RenderCore });
  }
  if (schema.type === "Form" && (schema == null ? void 0 : schema.list)) {
    return /* @__PURE__ */ React.createElement(
      import_FieldList.default,
      {
        key,
        schema,
        path,
        rootPath,
        renderCore: RenderCore,
        renderItem,
        throttledOnValuesChange
      }
    );
  }
  let child = null;
  if (schema == null ? void 0 : schema.properties) {
    child = RenderCore({
      schema: schema == null ? void 0 : schema.properties,
      parentPath: path,
      rootPath
    });
    path = void 0;
  }
  return /* @__PURE__ */ React.createElement(
    import_FieldItem.default,
    {
      key,
      schema,
      path,
      rootPath,
      renderCore: RenderCore,
      tableInline
    },
    child
  );
};
var RenderCore = (props) => {
  const {
    schema,
    rootPath = [],
    parentPath = [],
    throttledOnValuesChange
  } = props;
  const newSchema = (0, import_utils.filterSchema)(schema);
  if (!newSchema || newSchema.length === 0) {
    return null;
  }
  return newSchema.map((key) => {
    const item = schema[key];
    const path = [...parentPath, key];
    return renderItem({
      schema: item,
      path,
      key,
      rootPath,
      throttledOnValuesChange
    });
  });
};
var RenderCore_default = RenderCore;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
