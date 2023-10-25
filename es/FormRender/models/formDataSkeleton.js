function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import { cloneDeep } from 'lodash-es';
import { isListType, isObjType } from "../utils";
export var createDataSkeleton = function createDataSkeleton(schema, formData) {
  var _formData = cloneDeep(formData);
  var result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || _typeof(_formData) !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(function (key) {
      var childSchema = schema.properties[key];
      var childData = _formData[key];
      result[key] = createDataSkeleton(childSchema, childData);
    });
  } else if ((schema === null || schema === void 0 ? void 0 : schema.default) !== undefined) {
    result = cloneDeep(schema.default);
  } else if (_formData !== undefined) {} else if (isListType(schema)) {
    result = [createDataSkeleton(schema.items)];
  } else {
    result = undefined;
  }
  return result;
};