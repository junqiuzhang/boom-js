import html2canvas from "html2canvas";
import { Options } from "html2canvas/dist/types";
type IOptions = Partial<Options>;
export function insertCanvas() {
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.setAttribute("style", "position: absolute; top: 0; left: 0;");
  document.body.appendChild(canvas);
  return canvas;
}
export function removeCanvas(canvas: HTMLCanvasElement) {
  document.body.removeChild(canvas);
  return canvas;
}
export function initWebglProgram({
  webgl,
  vsSource,
  fsSource,
}: {
  webgl: WebGLRenderingContext | WebGL2RenderingContext;
  vsSource: string;
  fsSource: string;
}) {
  // 创建shader
  const vertexShaderObject = webgl.createShader(webgl.VERTEX_SHADER);
  const fragmentShaderObject = webgl.createShader(webgl.FRAGMENT_SHADER);
  if (!vertexShaderObject) {
    console.log("Error: vertexShaderObject create error!");
    return;
  }
  if (!fragmentShaderObject) {
    console.log("Error: fragmentShaderObject create error!");
    return;
  }
  // 绑定shader
  webgl.shaderSource(vertexShaderObject, vsSource);
  webgl.shaderSource(fragmentShaderObject, fsSource);
  // 编译shader
  webgl.compileShader(vertexShaderObject);
  webgl.compileShader(fragmentShaderObject);
  // 编译错误处理
  if (!webgl.getShaderParameter(vertexShaderObject, webgl.COMPILE_STATUS)) {
    console.log(
      "Error: vertexShaderObject compile error!",
      webgl.getShaderInfoLog(vertexShaderObject)
    );
    return;
  }
  if (!webgl.getShaderParameter(fragmentShaderObject, webgl.COMPILE_STATUS)) {
    console.log(
      "Error: fragmentShaderObject compile error!",
      webgl.getShaderInfoLog(fragmentShaderObject)
    );
    return;
  }
  // 创建program
  const programObject = webgl.createProgram();
  if (!programObject) {
    console.log("Error: programObject create error!");
    return;
  }
  // 绑定program
  webgl.attachShader(programObject, vertexShaderObject);
  webgl.attachShader(programObject, fragmentShaderObject);
  // 链接program
  webgl.linkProgram(programObject);
  // 链接错误处理
  if (!webgl.getProgramParameter(programObject, webgl.LINK_STATUS)) {
    console.log(
      "Error: programObject link error!",
      webgl.getProgramInfoLog(programObject)
    );
    return;
  }
  // 使用program
  webgl.useProgram(programObject);
  return programObject;
}
// 生成将图像等分为 m x n 矩形的数据
export const initParticlesData = (m: number, n: number) => {
  const positions: number[] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const [x0, x1] = [i / m, (i + 1) / m]; // 每个粒子的 x 轴左右坐标
      const [y0, y1] = [j / n, (j + 1) / n]; // 每个粒子的 y 轴上下坐标

      positions.push(x0);
      positions.push(y0);
      positions.push(x0);
      positions.push(y0);

      positions.push(x1);
      positions.push(y0);
      positions.push(x0);
      positions.push(y0);

      positions.push(x1);
      positions.push(y1);
      positions.push(x0);
      positions.push(y0);

      positions.push(x0);
      positions.push(y0);
      positions.push(x0);
      positions.push(y0);

      positions.push(x0);
      positions.push(y1);
      positions.push(x0);
      positions.push(y0);

      positions.push(x1);
      positions.push(y1);
      positions.push(x0);
      positions.push(y0);
    }
  }
  return positions;
};
export const dom2img = async (node: HTMLElement, opt?: IOptions) => {
  const options: IOptions = {
    allowTaint: true,
    useCORS: true,
    scale: 1,
    width: node.clientWidth,
    height: node.clientHeight,
    ...opt,
  };
  const canvas = await html2canvas(node, options);
  const dataURL = canvas.toDataURL("image/png");
  return dataURL;
};
