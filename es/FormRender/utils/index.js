import { cloneDeep, isUndefined, merge, omitBy } from 'lodash-es';
export var _cloneDeep = cloneDeep;
export var _merge = merge;
export var isArray = function isArray(data) {
  var str = Object.prototype.toString.call(data);
  return str.indexOf('Array') > -1;
};
export var isObject = function isObject(data) {
  var str = Object.prototype.toString.call(data);
  return str.indexOf('Object') > -1;
};
export var isFunction = function isFunction(data) {
  return typeof data === 'function';
};
export var isObjType = function isObjType(schema) {
  return (schema === null || schema === void 0 ? void 0 : schema.type) === 'Form' && schema.properties && !schema.list;
};
export var isListType = function isListType(schema) {
  return (schema === null || schema === void 0 ? void 0 : schema.type) === 'Form' && schema.list && schema.properties;
};
export var isFormType = function isFormType(schema) {
  return (schema === null || schema === void 0 ? void 0 : schema.type) === 'Form' && (schema === null || schema === void 0 ? void 0 : schema.properties);
};
export var valueRemoveUndefined = function valueRemoveUndefined(values) {
  var recursionArray = function recursionArray(list) {
    var result = list.map(function (item) {
      if (isObject(item)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return recursionObj(item);
      }
      if (isArray(item)) {
        return recursionArray(item);
      }
      return item;
    });
    if (Object.keys(result).length === 0) {
      return undefined;
    }
    return result;
  };
  var recursionObj = function recursionObj(_data) {
    var data = omitBy(_data, isUndefined);
    Object.keys(data).forEach(function (key) {
      var item = data[key];
      if (isObject(item)) {
        data[key] = recursionObj(item);
      }
      if (isArray(item)) {
        data[key] = recursionArray(item);
      }
    });
    data = omitBy(data, isUndefined);
    if (Object.keys(data).length === 0) {
      return undefined;
    }
    return data;
  };
  return recursionObj(values) || {};
};
var accMul = function accMul(arg1, arg2) {
  var m = 0;
  var s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};
export var digitUppercase = function digitUppercase(text) {
  if (!text) {
    return '';
  }
  if (/[\u4E00-\u9FFF]/.test(text.toString())) {
    return text.toString();
  }
  if (text === 0 || text === '0') {
    return '零元整';
  }
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var numberText = Number(text);
  var head = numberText < 0 ? '欠' : '';
  numberText = Math.abs(Number(numberText));
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += digit[Math.floor(accMul(10 * Math.pow(10, i), numberText)) % 10] + fraction[i];
  }
  if (s.indexOf('零角') > -1) {
    if (!s.endsWith('零分')) {
      s = s.replace(/零角/, '零');
    } else {
      s = '';
    }
  } else {
    if (s.endsWith('零分')) {
      s = s.replace(/零分/, '');
    }
  }
  var smallNumber = s || '整';
  var integerNumber = '';
  s = s || '整';
  numberText = Math.floor(numberText);
  for (var _i = 0; _i < unit[0].length && numberText > 0; _i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && numberText > 0; j++) {
      p = digit[numberText % 10] + unit[1][j] + p;
      numberText = Math.floor(numberText / 10);
    }
    integerNumber = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][_i] + integerNumber;
  }
  return head + integerNumber.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整') + smallNumber;
};

/**
 * 过滤schema并进行排序返回数组
 * @param schema
 * @returns string[]
 */
export var filterSchema = function filterSchema(schema) {
  return Object.keys(schema || {}).sort(function (a, b) {
    return schema[a].sort - schema[b].sort;
  });
};