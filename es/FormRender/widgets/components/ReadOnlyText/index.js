import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @Author: cesars
 * @createDate: 2023/7/21 11:49
 **/

var ReadOnlyText = function ReadOnlyText(props) {
  return /*#__PURE__*/_jsx("div", {
    children: props.value !== null && props.value !== undefined ? props.value : '-'
  });
};
export default ReadOnlyText;