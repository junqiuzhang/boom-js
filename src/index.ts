import domtoimage from 'dom-to-image';
import { mat4, mat2 } from 'gl-matrix';
import vsSource from './shader/shader-vs.glsl';
import fsSource from './shader/shader-fs.glsl';
import {
  insertCanvas,
  removeCanvas,
  initWebglProgram,
  initParticlesData
} from './utils/index';
interface IConfig {
  m?: number; // 爆炸的x轴粒子数
  n?: number; // 爆炸的x轴粒子数
  speed?: number; // 爆炸速度
  duration?: number; // 爆炸时长
}
class BoomJS {
  constructor(config?: IConfig) {
    const self = this;
    self.config = config || {};
  }
  config: IConfig;
  boom = (node: Element) => {
    const self = this;
    // 必须新建
    const canvas = insertCanvas();
    const webgl = canvas.getContext('webgl');
    const webglProgram = initWebglProgram({
      webgl,
      vsSource,
      fsSource
    });
    const { width, height, left, top } = node.getBoundingClientRect();
    const { m = width, n = height, speed = 0.1, duration = 1000 } = self.config;
    return new Promise((resolve, reject) => {
      try {
        domtoimage.toPng(node).then((dataUrl: string) => {
          const image = new Image();
          image.src = dataUrl;
          image.onload = () => {
            webgl.viewport(0, 0, canvas.width, canvas.height);
            const bufferData = initParticlesData(m, n);
            const triangleBuffer = webgl.createBuffer();
            webgl.bindBuffer(webgl.ARRAY_BUFFER, triangleBuffer);
            webgl.bufferData(
              webgl.ARRAY_BUFFER,
              new Float32Array(bufferData),
              webgl.STATIC_DRAW
            );

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

            const u_image = webgl.getUniformLocation(webglProgram, 'u_image');
            webgl.activeTexture(webgl.TEXTURE0);
            webgl.bindTexture(webgl.TEXTURE_2D, texture);
            webgl.uniform1i(u_image, 0);

            const transPosMat = mat4.create();
            const u_trans_pos_matrix = webgl.getUniformLocation(
              webglProgram,
              'u_trans_pos_matrix'
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

            const transTexMat = mat2.create();
            const u_trans_tex_matrix = webgl.getUniformLocation(
              webglProgram,
              'u_trans_tex_matrix'
            );
            webgl.uniformMatrix2fv(u_trans_tex_matrix, false, transTexMat);

            const a_point = webgl.getAttribLocation(webglProgram, 'a_point');
            webgl.enableVertexAttribArray(a_point);
            webgl.vertexAttribPointer(a_point, 2, webgl.FLOAT, false, 4 * 4, 0);

            const a_center = webgl.getAttribLocation(webglProgram, 'a_center');
            webgl.enableVertexAttribArray(a_center);
            webgl.vertexAttribPointer(
              a_center,
              2,
              webgl.FLOAT,
              false,
              4 * 4,
              4 * 2
            );
            webgl.clearColor(0, 0, 0, 0);
            webgl.clear(webgl.COLOR_BUFFER_BIT);

            let time = 0;
            const maxTime = (duration * speed) / 16.67;
            let u_time = webgl.getUniformLocation(webglProgram, 'u_time');
            function stopRender() {
              canvas.style.display = 'none';
              removeCanvas(canvas);
              resolve('');
            }
            function startRender() {
              canvas.style.display = 'block';
              render();
            }
            function render() {
              console.log('render');
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
        });
      } catch (error) {
        removeCanvas(canvas);
        reject(error);
      }
    });
  };
}
export default BoomJS;
