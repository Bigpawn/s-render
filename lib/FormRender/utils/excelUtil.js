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

// src/FormRender/utils/excelUtil.ts
var excelUtil_exports = {};
__export(excelUtil_exports, {
  default: () => excelUtil_default
});
module.exports = __toCommonJS(excelUtil_exports);
var import_exceljs = require("exceljs");
var import_file_saver = require("file-saver");
var import_lodash_es = require("lodash-es");
var import_index = require("./index");
var ExcelUtil = class {
  constructor(schema) {
    // 表头和key的映射
    this.keyMap = /* @__PURE__ */ new Map();
    this.dateTypes = ["Date", "DateTime"];
    this.dateTrans = {
      Date: "YYYY/MM/DD",
      DateTime: "YYYY/MM/DD HH:mm:ss",
      DateRange: "YYYY/MM/DD-YYYY/MM/DD",
      DateTimeRange: "YYYY/MM/DD HH:mm:ss-YYYY/MM/DD HH:mm:ss"
    };
    /**
     * 转换函数
     * @returns Function
     */
    this.trans = {
      Date: (value) => value && (0, import_lodash_es.isDate)(value) ? value : null,
      DateTime: (value) => value && (0, import_lodash_es.isDate)(value) ? value : null,
      DateRange: (value) => {
        if (value) {
          const valueStringArr = value.split("-");
          if (valueStringArr.some((item) => !(0, import_lodash_es.isDate)(item))) {
            return [];
          }
          return valueStringArr;
        }
        return [];
      },
      DateTimeRange: (value) => {
        if (value) {
          const valueStringArr = value.split("-");
          if (valueStringArr.some((item) => !(0, import_lodash_es.isDate)(item))) {
            return [];
          }
          return valueStringArr;
        }
        return [];
      },
      Int: (value) => value && (0, import_lodash_es.isNumber)(value) ? (0, import_lodash_es.toNumber)(value) : null,
      Boolean: (value) => value && value === "是" ? true : false,
      Percent: (value) => {
        if (value) {
          const stringValue = (0, import_lodash_es.toString)(value);
          if (stringValue == null ? void 0 : stringValue.includes(".")) {
            return (0, import_lodash_es.toString)((0, import_lodash_es.toNumber)(stringValue) * 100);
          }
          return stringValue;
        }
        return null;
      },
      Money: (value) => value && (0, import_lodash_es.isNumber)(value) ? (0, import_lodash_es.toNumber)(value) : null,
      Number: (value) => value && (0, import_lodash_es.isNumber)(value) ? (0, import_lodash_es.toNumber)(value) : null,
      SelectMultiple: (value) => {
        if (value) {
          return value == null ? void 0 : value.split(",");
        }
        return null;
      },
      Checkbox: (value) => {
        if (value) {
          return value == null ? void 0 : value.split(",");
        }
        return null;
      }
    };
    /**
     * 初始转换Map
     * @param schema
     */
    this.init = (schema) => {
      (0, import_index.filterSchema)(schema).forEach((key) => {
        var _a;
        this.keyMap.set(key, (_a = schema[key]) == null ? void 0 : _a.title);
      });
    };
    /**
     * 构建模板表头
     * @param title
     * @param schemaItem
     * @returns string
     */
    this.buildHeaderTitle = (title, schemaItem) => {
      let header = title;
      if (schemaItem.required) {
        header = `*${header}`;
      }
      if (this.dateTypes.includes(schemaItem == null ? void 0 : schemaItem.type)) {
        const _type = (schemaItem == null ? void 0 : schemaItem.valueType) || (schemaItem == null ? void 0 : schemaItem.type);
        header = `${header} (${this.dateTrans[_type]})`;
      }
      return header;
    };
    this.buildValidationMap = (schemaItem) => {
      const type = (schemaItem == null ? void 0 : schemaItem.valueType) || (schemaItem == null ? void 0 : schemaItem.type);
      if (["Percent", "Money", "Number"].includes(type)) {
        return {
          type: "decimal",
          showErrorMessage: true,
          errorStyle: "error",
          errorTitle: "错误",
          error: "请输入数字"
        };
      }
      if (type === "Int") {
        return {
          type: "whole",
          showErrorMessage: true,
          errorStyle: "error",
          errorTitle: "错误",
          error: "请输入整数"
        };
      }
      const dateTrans = this.dateTrans[type];
      if (dateTrans) {
        return {
          type: "date",
          showErrorMessage: true,
          errorStyle: "error",
          errorTitle: "错误",
          error: `请输入正确的日期${dateTrans}`
        };
      }
      return null;
    };
    /**
     * 将索引转换成英文大写字母
     * @param index
     * @returns
     */
    this.convertIndexToLetter = (index) => {
      let _index = index;
      let result = "";
      while (_index >= 0) {
        result = String.fromCharCode(65 + _index % 26) + result;
        _index = Math.floor(_index / 26) - 1;
      }
      return result;
    };
    /**
     * 导出数据
     * @param data 导出的数据
     * @param sheetName 表名
     * @param fileName 文件名
     * @param openValidation
     */
    this.exportExcelFile = (data, fileName = "example.xlsx", sheetName = "Sheet1", openValidation = false) => {
      const validationKeyObj = [];
      const headers = [...this.keyMap.entries()].map(([key, value]) => {
        const schemaItem = this.schema[key];
        const header = this.buildHeaderTitle(value, schemaItem);
        if (openValidation) {
          validationKeyObj.push(this.buildValidationMap(schemaItem));
        }
        return {
          header,
          key,
          width: header.length * 3
        };
      });
      const workBook = new import_exceljs.Workbook();
      const sheet1 = workBook.addWorksheet(sheetName);
      sheet1.columns = headers;
      if (openValidation) {
        validationKeyObj.forEach((item, index) => {
          if (item) {
            const columnKey = this.convertIndexToLetter(index);
            for (let i = 0; i <= 0; i++) {
              sheet1.getCell(`${columnKey}${i + 2}`).dataValidation = item;
            }
          }
        });
      }
      const titleCell = sheet1.getRow(1);
      titleCell.height = 20;
      titleCell.eachCell((cell) => {
        cell.font = {
          name: "黑体",
          bold: true,
          size: 14,
          color: {
            argb: "333333"
          }
        };
        cell.alignment = {
          vertical: "middle",
          horizontal: "center"
        };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: {
            argb: "cccccc"
          }
        };
      });
      sheet1.addRows(data);
      workBook.xlsx.writeBuffer().then((buffer) => {
        const file = new Blob([buffer], {
          type: "application/octet-stream"
        });
        (0, import_file_saver.saveAs)(file, fileName);
      });
    };
    this.defaultTransValue = (value) => value;
    this.transValue = (type) => {
      return this.trans[type] || this.defaultTransValue;
    };
    /**
     * 读取上传的文件
     * @param file 导入的文件流
     */
    this.readExcelFile = async (file) => {
      const header = [...this.keyMap.keys()];
      const workBook = new import_exceljs.Workbook();
      await workBook.xlsx.load(file);
      const sheet = workBook.getWorksheet(1);
      const excelList = [];
      sheet.getSheetValues().filter((item) => item == null ? void 0 : item.length).forEach((item, ind) => {
        if (ind > 0) {
          item == null ? void 0 : item.shift();
          const itemObj = {};
          item.forEach((val, index) => {
            if (index <= header.length) {
              const key = header[index];
              const schemaItem = this.schema[key];
              itemObj[key] = this.transValue(
                (schemaItem == null ? void 0 : schemaItem.valueType) || (schemaItem == null ? void 0 : schemaItem.type)
              )(val);
            }
          });
          excelList.push(itemObj);
        }
      });
      return excelList;
    };
    this.schema = schema;
    this.init(schema);
  }
};
var excelUtil_default = ExcelUtil;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
