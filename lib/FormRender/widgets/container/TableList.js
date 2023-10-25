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

// src/FormRender/widgets/container/TableList.tsx
var TableList_exports = {};
__export(TableList_exports, {
  default: () => TableList_default
});
module.exports = __toCommonJS(TableList_exports);
var import_icons = require("@ant-design/icons");
var import_antd = require("antd");
var import_lodash_es = require("lodash-es");
var import_react = require("react");
var import_styled_components = __toESM(require("styled-components"));
var import_zustand = require("zustand");
var import_context = require("../../models/context");
var import_utils = require("../../utils");
var import_excelUtil = __toESM(require("../../utils/excelUtil"));
var import_ImportModal = __toESM(require("../components/ImportModal"));
var RequiredTitle = import_styled_components.default.div`
  &::before {
    display: inline-block;
    margin-inline-end: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }
`;
var TableList = (props) => {
  const {
    rootPath,
    schema,
    renderItem,
    fields,
    addItem,
    moveItem,
    copyItem,
    removeItem,
    form,
    throttledOnValuesChange
  } = props;
  const importModalRef = (0, import_react.useRef)();
  const excelUtilRef = (0, import_react.useRef)();
  const formRenderContext = (0, import_react.useContext)(import_context.FormRenderContext);
  const { readOnly } = (0, import_zustand.useStore)(
    formRenderContext,
    (state) => state == null ? void 0 : state.context
  );
  (0, import_react.useEffect)(() => {
    if (schema) {
      excelUtilRef.current = new import_excelUtil.default((schema == null ? void 0 : schema.properties) || {});
    }
  }, [JSON.stringify(schema)]);
  const extraButtonStyle = {
    padding: 0
  };
  const onMove = (from, to) => () => {
    moveItem(from, to);
  };
  const onDelete = (name) => () => {
    removeItem(name);
  };
  const onCopy = (name) => () => {
    const value = form.getFieldValue(rootPath.concat(name));
    copyItem(value ?? {});
  };
  const getRequireBySchema = (0, import_react.useMemo)(() => {
    return Object.values((schema == null ? void 0 : schema.properties) ?? {}).some((item) => {
      return (item == null ? void 0 : item.required) === true;
    });
  }, [JSON.stringify(schema == null ? void 0 : schema.properties)]);
  const columns = (0, import_react.useMemo)(() => {
    return (0, import_utils.filterSchema)(schema == null ? void 0 : schema.properties).filter((key) => {
      var _a, _b;
      return ((_b = (_a = schema == null ? void 0 : schema.properties) == null ? void 0 : _a[key]) == null ? void 0 : _b.hidden) !== true;
    }).map((key) => {
      const item = schema == null ? void 0 : schema.properties[key];
      return {
        dataIndex: key,
        title: (item == null ? void 0 : item.required) ? /* @__PURE__ */ React.createElement(RequiredTitle, null, item == null ? void 0 : item.title) : item == null ? void 0 : item.title,
        onCell: (record) => {
          return {
            record,
            schema: item,
            dataIndex: key,
            title: item == null ? void 0 : item.title
          };
        }
      };
    }).concat(
      !readOnly && [
        {
          title: "操作",
          dataIndex: "action",
          fixed: "right",
          width: 100,
          onCell: (record) => {
            return {
              record,
              dataIndex: "action"
            };
          },
          render: (_, record) => {
            return /* @__PURE__ */ React.createElement(import_antd.Space, null, /* @__PURE__ */ React.createElement(import_antd.Tooltip, { title: "上移" }, /* @__PURE__ */ React.createElement(
              import_antd.Button,
              {
                type: "link",
                disabled: (record == null ? void 0 : record.name) === 0,
                style: extraButtonStyle,
                onClick: onMove(record == null ? void 0 : record.name, (record == null ? void 0 : record.name) - 1),
                icon: /* @__PURE__ */ React.createElement(import_icons.VerticalAlignTopOutlined, null)
              }
            )), /* @__PURE__ */ React.createElement(import_antd.Tooltip, { title: "下移" }, /* @__PURE__ */ React.createElement(
              import_antd.Button,
              {
                type: "link",
                style: extraButtonStyle,
                disabled: (record == null ? void 0 : record.name) === fields.length - 1,
                onClick: onMove(record == null ? void 0 : record.name, (record == null ? void 0 : record.name) + 1),
                icon: /* @__PURE__ */ React.createElement(import_icons.VerticalAlignBottomOutlined, null)
              }
            )), /* @__PURE__ */ React.createElement(import_antd.Tooltip, { title: "删除" }, !(getRequireBySchema && fields.length === 1) && /* @__PURE__ */ React.createElement(
              import_antd.Popconfirm,
              {
                title: "确定删除吗？",
                onConfirm: onDelete(record == null ? void 0 : record.name)
              },
              /* @__PURE__ */ React.createElement(
                import_antd.Button,
                {
                  type: "link",
                  danger: true,
                  style: extraButtonStyle,
                  icon: /* @__PURE__ */ React.createElement(import_icons.DeleteOutlined, null)
                }
              )
            )), /* @__PURE__ */ React.createElement(import_antd.Tooltip, { title: "复制" }, /* @__PURE__ */ React.createElement(
              import_antd.Button,
              {
                type: "link",
                style: extraButtonStyle,
                onClick: onCopy(record == null ? void 0 : record.name),
                icon: /* @__PURE__ */ React.createElement(import_icons.CopyOutlined, null)
              }
            )));
          }
        }
      ] || []
    );
  }, [
    JSON.stringify(schema == null ? void 0 : schema.properties),
    fields == null ? void 0 : fields.length,
    getRequireBySchema,
    readOnly
  ]);
  const EditableCell = (props2) => {
    const { schema: schema2, record, dataIndex, title, index, children, ...otherProps } = props2;
    if (dataIndex === "action") {
      return /* @__PURE__ */ React.createElement("td", { ...otherProps }, children);
    }
    return /* @__PURE__ */ React.createElement("td", { ...otherProps }, schema2 && renderItem({
      schema: schema2,
      path: [record == null ? void 0 : record.name, dataIndex],
      rootPath,
      key: dataIndex,
      tableInline: true
    }));
  };
  const onAddClick = () => {
    addItem({});
  };
  const importClick = () => {
    var _a;
    (_a = importModalRef.current) == null ? void 0 : _a.onOpen();
  };
  const importOk = async (list) => {
    const _list = (0, import_lodash_es.cloneDeep)(list);
    const values = form.getFieldsValue();
    const allValues = (0, import_lodash_es.cloneDeep)(values);
    (0, import_lodash_es.set)(allValues, rootPath, [..._list]);
    form.setFieldsValue(allValues);
    _list == null ? void 0 : _list.forEach((item, index) => {
      const _index = index;
      const newArr = [];
      const current = {};
      newArr[_index] = item;
      (0, import_lodash_es.set)(current, rootPath, newArr);
      throttledOnValuesChange == null ? void 0 : throttledOnValuesChange(current, allValues);
    });
  };
  const exportClick = () => {
    var _a;
    const values = form.getFieldValue(rootPath);
    (_a = excelUtilRef.current) == null ? void 0 : _a.exportExcelFile(values, `${schema == null ? void 0 : schema.title}.xlsx`);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    import_antd.Card,
    {
      title: schema == null ? void 0 : schema.title,
      size: "small",
      extra: /* @__PURE__ */ React.createElement(import_antd.Space, null, !readOnly && /* @__PURE__ */ React.createElement(
        import_antd.Button,
        {
          icon: /* @__PURE__ */ React.createElement(import_icons.PlusOutlined, null),
          type: "primary",
          size: "small",
          onClick: onAddClick
        },
        "添加"
      ), (schema == null ? void 0 : schema.isImport) && !readOnly && /* @__PURE__ */ React.createElement(
        import_antd.Button,
        {
          icon: /* @__PURE__ */ React.createElement(import_icons.ImportOutlined, null),
          size: "small",
          onClick: importClick
        },
        "导入"
      ), /* @__PURE__ */ React.createElement(
        import_antd.Button,
        {
          size: "small",
          icon: /* @__PURE__ */ React.createElement(import_icons.ExportOutlined, null),
          onClick: exportClick
        },
        "导出"
      ))
    },
    /* @__PURE__ */ React.createElement(
      import_antd.Table,
      {
        columns,
        size: "small",
        dataSource: fields ?? [],
        className: "s-render-table-wrapper",
        pagination: false,
        bordered: true,
        components: {
          body: {
            cell: EditableCell
          }
        },
        scroll: { x: "max-content" }
      }
    ),
    /* @__PURE__ */ React.createElement(
      import_ImportModal.default,
      {
        title: schema == null ? void 0 : schema.title,
        onOk: importOk,
        ref: importModalRef,
        schema: (schema == null ? void 0 : schema.properties) || {}
      }
    )
  ));
};
var TableList_default = TableList;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
