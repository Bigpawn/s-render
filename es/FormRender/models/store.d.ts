export interface FormStore {
    schema?: any;
    flattenSchema?: any;
    initialized: boolean;
    context?: any;
    init?: (schema: FormStore['schema']) => any;
    setContext: (context: any) => any;
}
export declare const create: () => import("zustand").StoreApi<FormStore>;
