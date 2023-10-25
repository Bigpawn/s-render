import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/row/style";
import _Row from "antd/es/row";
import { jsx as _jsx } from "react/jsx-runtime";
var GroupCard = function GroupCard(props) {
  var schema = props.schema,
    renderCore = props.renderCore,
    rootPath = props.rootPath;
  if (schema !== null && schema !== void 0 && schema.hidden) return null;
  return /*#__PURE__*/_jsx(_Col, {
    span: 24,
    children: /*#__PURE__*/_jsx(_Form.Item, {
      children: /*#__PURE__*/_jsx(_Card, {
        size: "small",
        title: schema === null || schema === void 0 ? void 0 : schema.title,
        children: /*#__PURE__*/_jsx(_Row, {
          gutter: 18,
          children: renderCore({
            schema: schema.properties,
            rootPath: rootPath,
            parentPath: rootPath.length > 0 ? [rootPath === null || rootPath === void 0 ? void 0 : rootPath[rootPath.length - 1]] : []
          })
        })
      })
    })
  });
};
export default GroupCard;