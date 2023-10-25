export declare const getSchemaFullPath: (path: string, schema: any) => string;
export declare const immediateWatch: (watch: any, values: any) => void;
/**
 * 监听数据变化，调用对应的外部watch方法
 */
export declare const valuesWatch: (changedValues: any, allValues: any, watch: any) => void;
export declare function yymmdd(timeStamp: any): string;
export declare const transformFieldsError: (_fieldsError: any) => any;
export declare function msToTime(duration: number): string;
export declare const setSessionItem: (key: string, data: any) => void;
export declare const getSessionItem: (key: string) => number;
export declare const getUUID: () => string;
/**
 * 获取list数据当前值的索引路径
 * @return string[]
 */
export declare const getValueIndexArr: (path: any[]) => any[];
/**
 * 替换字符串中的[]
 * @param str
 * @param indexArr
 */
export declare const replaceStringByIndexArr: (str: string, indexArr: number[]) => string;
