import type { FormInstance as AntdFormInstance } from 'antd';

export interface FormInstance extends AntdFormInstance {
  __initStore: (data: any) => void;
  setSchemaByFullPath: (path: string, schema: any) => any;
  /**
   *  设置 Schema
   */
  setSchema: (schema: any, cover?: boolean) => void;
  /**
   * 获取表单值
   */
  getValues: FormInstance['getFieldsValue'];
  /**
   * 根据路径设置值
   */
  setValueByPath: FormInstance['setFieldValue'];
  /**
   * 根据路径获取 Schema
   */
  getSchemaByPath: (path: string) => any;
  /**
   *  根据路径动态设置 Schema
   */
  setSchemaByPath: (path: string, schema: any) => any;
}
