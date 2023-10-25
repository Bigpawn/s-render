import { Editor } from '@wangeditor/editor-for-react';
import { jsx as _jsx } from "react/jsx-runtime";
var TextComponent = function TextComponent(props) {
  var defaultConfig = {
    readOnly: true
  };
  return /*#__PURE__*/_jsx(Editor, {
    defaultConfig: defaultConfig,
    value: props === null || props === void 0 ? void 0 : props.value
  });
};
export default TextComponent;