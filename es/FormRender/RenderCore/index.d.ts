interface RenderCoreProps {
    schema: any;
    rootPath?: any[] | undefined;
    parentPath?: any[] | undefined;
    [key: string]: any;
}
declare const RenderCore: (props: RenderCoreProps) => JSX.Element[] | null;
export default RenderCore;
