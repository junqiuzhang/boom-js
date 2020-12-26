export declare function insertCanvas(): HTMLCanvasElement;
export declare function removeCanvas(canvas: HTMLCanvasElement): HTMLCanvasElement;
export declare function initWebglProgram({ webgl, vsSource, fsSource }: {
    webgl: WebGLRenderingContext | WebGL2RenderingContext;
    vsSource: string;
    fsSource: string;
}): WebGLProgram | undefined;
export declare const initParticlesData: (m: number, n: number) => number[];
