import 'dayjs/locale/zh-cn';
import { ComponentType } from 'react';
import './withProvider.scss';
declare const withProvider: <T>(Element: ComponentType<T>) => ComponentType<T>;
export default withProvider;
