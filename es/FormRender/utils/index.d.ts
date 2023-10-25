export declare const _cloneDeep: <T>(value: T) => T;
export declare const _merge: {
    <TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
    <TObject_1, TSource1, TSource2>(object: TObject_1, source1: TSource1, source2: TSource2): TObject_1 & TSource1 & TSource2;
    <TObject_2, TSource1_1, TSource2_1, TSource3>(object: TObject_2, source1: TSource1_1, source2: TSource2_1, source3: TSource3): TObject_2 & TSource1_1 & TSource2_1 & TSource3;
    <TObject_3, TSource1_2, TSource2_2, TSource3_1, TSource4>(object: TObject_3, source1: TSource1_2, source2: TSource2_2, source3: TSource3_1, source4: TSource4): TObject_3 & TSource1_2 & TSource2_2 & TSource3_1 & TSource4;
    (object: any, ...otherArgs: any[]): any;
};
export declare const isArray: (data: any) => boolean;
export declare const isObject: (data: any) => boolean;
export declare const isFunction: (data: any) => boolean;
export declare const isObjType: (schema: any) => any;
export declare const isListType: (schema: any) => any;
export declare const isFormType: (schema: any) => any;
export declare const valueRemoveUndefined: (values: any) => Partial<any>;
export declare const digitUppercase: (text: string | number) => string;
/**
 * 过滤schema并进行排序返回数组
 * @param schema
 * @returns string[]
 */
export declare const filterSchema: (schema: any) => string[];
