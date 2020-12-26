interface IConfig {
    m?: number;
    n?: number;
    speed?: number;
    duration?: number;
}
declare function boomJS(node: Element, config?: IConfig): Promise<unknown>;
export default boomJS;
