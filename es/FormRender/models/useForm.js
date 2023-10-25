import "antd/es/form/style";
import _Form from "antd/es/form";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { cloneDeep, get, set } from 'lodash-es';
import { useRef } from 'react';
import { _cloneDeep, _merge, isArray, isFunction, isObject, valueRemoveUndefined } from "../utils";
import { parseValuesToBind } from "./bindValues";
import { flattenSchema } from "./flattenSchema";
import { getSchemaFullPath } from "./formCoreUtils";
var updateSchemaByPath = function updateSchemaByPath(_path, _newSchema, formSchema) {
  var path = getSchemaFullPath(_path, formSchema);
  var currSchema = get(formSchema, path, {});
  var newSchema = isFunction(_newSchema) ? _newSchema(currSchema) : _newSchema;
  var result = _merge(currSchema, newSchema);
  set(formSchema, path, result);
};
var getFieldPath = function getFieldPath(_path) {
  if (!_path) {
    return undefined;
  }
  if (typeof _path === 'boolean') {
    return _path;
  }
  if (isArray(_path)) {
    return _path.map(function (item) {
      return item.split('.').map(function (ite) {
        if (!isNaN(Number(ite))) {
          return ite * 1;
        }
        return ite;
      });
    });
  }
  return _path.split('.').map(function (item) {
    if (!isNaN(Number(item))) {
      return item * 1;
    }
    return item;
  });
};
var useForm = function useForm() {
  var _ref = _Form.useForm(),
    _ref2 = _slicedToArray(_ref, 1),
    form = _ref2[0];
  var storeRef = useRef();
  var schemaRef = useRef({});
  var flattenSchemaRef = useRef({});
  var setStoreData = function setStoreData(data) {
    var setState = storeRef.current.setState;
    if (!setState) {
      setTimeout(function () {
        setState({
          schema: schemaRef.current,
          flattenSchema: flattenSchemaRef.current
        });
      }, 0);
    }
    setState(data);
  };
  var handleSchemaUpdate = function handleSchemaUpdate(newSchema) {
    flattenSchemaRef.current = flattenSchema(newSchema);
    schemaRef.current = newSchema;
    setStoreData({
      schema: newSchema,
      flattenSchema: flattenSchemaRef.current
    });
  };
  form.getValues = function (nameList, filterFunc) {
    var values = form.getFieldsValue(getFieldPath(nameList), filterFunc);
    values = valueRemoveUndefined(values);
    return parseValuesToBind(values, flattenSchemaRef.current);
  };
  form.setSchema = function (obj) {
    var cover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!isObject(obj)) {
      return;
    }
    if (cover) {
      handleSchemaUpdate(obj);
      return;
    }
    var schema = _cloneDeep(schemaRef.current);
    Object.keys(obj).forEach(function (path) {
      updateSchemaByPath(path, obj[path], schema);
    });
    handleSchemaUpdate(schema);
  };
  form.__initStore = function (store) {
    storeRef.current = store;
  };
  form.setValueByPath = function (path, value) {
    var name = getFieldPath(path);
    form.setFieldValue(name, value);
  };
  form.getSchemaByPath = function (_path) {
    if (typeof _path !== 'string') {
      console.warn('请输入正确的路径');
    }
    var path = getSchemaFullPath(_path, schemaRef.current);
    return get(schemaRef.current, path);
  };
  form.setSchemaByPath = function (_path, _newSchema) {
    var schema = cloneDeep(schemaRef.current);
    updateSchemaByPath(_path, _newSchema, schema);
    handleSchemaUpdate(schema);
  };
  form.setSchemaByFullPath = function (_path, newSchema) {
    var schema = _cloneDeep(schemaRef.current);
    var currSchema = get(schema, _path, {});
    var result = _merge(newSchema, currSchema);
    set(schema, _path, result);
    handleSchemaUpdate(schema);
  };
  return form;
};
export default useForm;