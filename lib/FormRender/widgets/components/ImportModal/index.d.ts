/// <reference types="react" />
import './index.less';
interface ImportModalProps {
    onClose?: () => void;
    onOk: (list: any) => void;
    title?: string;
    schema: any;
}
export interface ImportModalAction {
    onOpen: () => void;
}
declare const ImportModal: import("react").ForwardRefExoticComponent<ImportModalProps & import("react").RefAttributes<unknown>>;
export default ImportModal;
