//@ts-ignore
import { mat4, mat2 } from "gl-matrix";
import { dom2img } from "./utils";
import vsSource from "./shader/vertex";
import fsSource from "./shader/fragment";
import {
  insertCanvas,
  removeCanvas,
  initWebglProgram,
  initParticlesData,
} from "./utils/index";
interface IConfig {
  m?: number; // 爆炸的x轴粒子数
  n?: number; // 爆炸的x轴粒子数
  speed?: number; // 爆炸速度
  duration?: number; // 爆炸时长
}
function boomJS(node: HTMLElement, config?: IConfig): Promise<string> {
  return new Promise((resolve, reject) => {
    // 必需的变量
    const { width, height, left, top } = (
      node || document.body
    ).getBoundingClientRect();
    const {
      m = width,
      n = height,
      speed = 0.1,
      duration = 1000,
    } = config || {};
    // 必需的对象
    const canvas = insertCanvas();
    const webgl = canvas.getContext("webgl");
    if (!webgl) {
      reject("Error: webglContext error!");
      return;
    }
    const webglProgram = initWebglProgram({
      webgl,
      vsSource,
      fsSource,
    });
    if (!webglProgram) {
      reject("Error: webglProgram error!");
      return;
    }
    // dom转image
    dom2img(node)
      .then((dataUrl: string) => {
        const image = new Image();
        image.src = dataUrl;
        image.onload = () => {
          // webgl基本配置
          webgl.clearColor(0, 0, 0, 0);
          webgl.clear(webgl.COLOR_BUFFER_BIT);
          webgl.viewport(0, 0, canvas.width, canvas.height);
          // 顶点数据源
          const bufferData = initParticlesData(m, n);
          const triangleBuffer = webgl.createBuffer();
          webgl.bindBuffer(webgl.ARRAY_BUFFER, triangleBuffer);
          webgl.bufferData(
            webgl.ARRAY_BUFFER,
            new Float32Array(bufferData),
            webgl.STATIC_DRAW
          );
          // 纹理数据源
          const texture = webgl.createTexture();
          webgl.bindTexture(webgl.TEXTURE_2D, texture);
          webgl.texImage2D(
            webgl.TEXTURE_2D,
            0,
            webgl.RGBA,
            webgl.RGBA,
            webgl.UNSIGNED_BYTE,
            image
          );
          webgl.texParameteri(
            webgl.TEXTURE_2D,
            webgl.TEXTURE_MIN_FILTER,
            webgl.NEAREST
          );
          webgl.texParameteri(
            webgl.TEXTURE_2D,
            webgl.TEXTURE_MAG_FILTER,
            webgl.NEAREST
          );
          webgl.texParameteri(
            webgl.TEXTURE_2D,
            webgl.TEXTURE_WRAP_S,
            webgl.CLAMP_TO_EDGE
          );
          webgl.texParameteri(
            webgl.TEXTURE_2D,
            webgl.TEXTURE_WRAP_T,
            webgl.CLAMP_TO_EDGE
          );

          const u_image = webgl.getUniformLocation(webglProgram, "u_image");
          webgl.activeTexture(webgl.TEXTURE0);
          webgl.bindTexture(webgl.TEXTURE_2D, texture);
          webgl.uniform1i(u_image, 0);
          // 坐标变换矩阵
          const transPosMat = mat4.create();
          const u_trans_pos_matrix = webgl.getUniformLocation(
            webglProgram,
            "u_trans_pos_matrix"
          );
          mat4.ortho(
            transPosMat,
            -left / image.width,
            (canvas.width - left) / image.width,
            (canvas.height - top) / image.height,
            -top / image.height,
            1,
            -1
          );
          webgl.uniformMatrix4fv(u_trans_pos_matrix, false, transPosMat);
          // 色彩变换矩阵
          const transTexMat = mat2.create();
          const u_trans_tex_matrix = webgl.getUniformLocation(
            webglProgram,
            "u_trans_tex_matrix"
          );
          webgl.uniformMatrix2fv(u_trans_tex_matrix, false, transTexMat);
          // 顶点数据
          const a_point = webgl.getAttribLocation(webglProgram, "a_point");
          webgl.enableVertexAttribArray(a_point);
          webgl.vertexAttribPointer(a_point, 2, webgl.FLOAT, false, 4 * 4, 0);
          // 中心点数据
          const a_center = webgl.getAttribLocation(webglProgram, "a_center");
          webgl.enableVertexAttribArray(a_center);
          webgl.vertexAttribPointer(
            a_center,
            2,
            webgl.FLOAT,
            false,
            4 * 4,
            4 * 2
          );
          // 时间
          let time = 0;
          let u_time = webgl.getUniformLocation(webglProgram, "u_time");
          // 最大时间
          const maxTime = (duration * speed) / 16.67;
          // 停止渲染
          function stopRender() {
            canvas.style.display = "none";
            removeCanvas(canvas);
            resolve("");
          }
          // 开始渲染
          function startRender() {
            canvas.style.display = "block";
            render();
          }
          // 渲染循环
          function render() {
            if (!webgl) {
              reject("Error: webglContext error!");
              return;
            }
            time += speed;
            if (time > maxTime) {
              stopRender();
            } else {
              webgl.uniform1f(u_time, time);
              webgl.drawArrays(webgl.TRIANGLES, 0, bufferData.length / 4);
              requestAnimationFrame(render);
            }
          }
          startRender();
        };
      })
      .catch((error) => {
        // 错误处理，出错时重置canvas和webglProgram
        removeCanvas(canvas);
        reject(error);
      });
  });
}
export default boomJS;
