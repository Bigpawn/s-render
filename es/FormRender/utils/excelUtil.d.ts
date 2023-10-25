declare class ExcelUtil {
    private schema;
    private keyMap;
    private dateTypes;
    private dateTrans;
    /**
     * 转换函数
     * @returns Function
     */
    private trans;
    constructor(schema?: any);
    /**
     * 初始转换Map
     * @param schema
     */
    private init;
    /**
     * 构建模板表头
     * @param title
     * @param schemaItem
     * @returns string
     */
    private buildHeaderTitle;
    private buildValidationMap;
    /**
     * 将索引转换成英文大写字母
     * @param index
     * @returns
     */
    private convertIndexToLetter;
    /**
     * 导出数据
     * @param data 导出的数据
     * @param sheetName 表名
     * @param fileName 文件名
     * @param openValidation
     */
    exportExcelFile: (data: any[], fileName?: string, sheetName?: string, openValidation?: boolean) => void;
    private defaultTransValue;
    private transValue;
    /**
     * 读取上传的文件
     * @param file 导入的文件流
     */
    readExcelFile: (file: any) => Promise<Record<string, string>[]>;
}
export default ExcelUtil;
