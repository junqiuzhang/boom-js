//@ts-ignore
import { mat4, mat2 } from "gl-matrix";
import { dom2img } from "./utils";
import vsSource from "./shader/vertex";
import fsSource from "./shader/fragment";
import { insertCanvas, removeCanvas, initWebglProgram, initParticlesData, } from "./utils/index";
function boomJS(node, config) {
    return new Promise(function (resolve, reject) {
        // 必需的变量
        var _a = (node || document.body).getBoundingClientRect(), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
        var _b = config || {}, _c = _b.m, m = _c === void 0 ? width : _c, _d = _b.n, n = _d === void 0 ? height : _d, _e = _b.speed, speed = _e === void 0 ? 0.1 : _e, _f = _b.duration, duration = _f === void 0 ? 1000 : _f;
        // 必需的对象
        var canvas = insertCanvas();
        var webgl = canvas.getContext("webgl");
        if (!webgl) {
            reject("Error: webglContext error!");
            return;
        }
        var webglProgram = initWebglProgram({
            webgl: webgl,
            vsSource: vsSource,
            fsSource: fsSource,
        });
        if (!webglProgram) {
            reject("Error: webglProgram error!");
            return;
        }
        // dom转image
        dom2img(node)
            .then(function (dataUrl) {
            var image = new Image();
            image.src = dataUrl;
            image.onload = function () {
                if (typeof (config === null || config === void 0 ? void 0 : config.onStart) === "function")
                    config.onStart();
                // webgl基本配置
                webgl.clearColor(0, 0, 0, 0);
                webgl.clear(webgl.COLOR_BUFFER_BIT);
                webgl.viewport(0, 0, canvas.width, canvas.height);
                // 顶点数据源
                var bufferData = initParticlesData(m, n);
                var triangleBuffer = webgl.createBuffer();
                webgl.bindBuffer(webgl.ARRAY_BUFFER, triangleBuffer);
                webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(bufferData), webgl.STATIC_DRAW);
                // 纹理数据源
                var texture = webgl.createTexture();
                webgl.bindTexture(webgl.TEXTURE_2D, texture);
                webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, image);
                webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, webgl.NEAREST);
                webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.NEAREST);
                webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_S, webgl.CLAMP_TO_EDGE);
                webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_T, webgl.CLAMP_TO_EDGE);
                var u_image = webgl.getUniformLocation(webglProgram, "u_image");
                webgl.activeTexture(webgl.TEXTURE0);
                webgl.bindTexture(webgl.TEXTURE_2D, texture);
                webgl.uniform1i(u_image, 0);
                // 坐标变换矩阵
                var transPosMat = mat4.create();
                var u_trans_pos_matrix = webgl.getUniformLocation(webglProgram, "u_trans_pos_matrix");
                mat4.ortho(transPosMat, -left / image.width, (canvas.width - left) / image.width, (canvas.height - top) / image.height, -top / image.height, 1, -1);
                webgl.uniformMatrix4fv(u_trans_pos_matrix, false, transPosMat);
                // 色彩变换矩阵
                var transTexMat = mat2.create();
                var u_trans_tex_matrix = webgl.getUniformLocation(webglProgram, "u_trans_tex_matrix");
                webgl.uniformMatrix2fv(u_trans_tex_matrix, false, transTexMat);
                // 顶点数据
                var a_point = webgl.getAttribLocation(webglProgram, "a_point");
                webgl.enableVertexAttribArray(a_point);
                webgl.vertexAttribPointer(a_point, 2, webgl.FLOAT, false, 4 * 4, 0);
                // 中心点数据
                var a_center = webgl.getAttribLocation(webglProgram, "a_center");
                webgl.enableVertexAttribArray(a_center);
                webgl.vertexAttribPointer(a_center, 2, webgl.FLOAT, false, 4 * 4, 4 * 2);
                // 时间
                var time = 0;
                var u_time = webgl.getUniformLocation(webglProgram, "u_time");
                // 最大时间
                var maxTime = (duration * speed) / 16.67;
                // 停止渲染
                function stopRender() {
                    if (typeof (config === null || config === void 0 ? void 0 : config.onEnd) === "function")
                        config.onEnd();
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
                    }
                    else {
                        webgl.uniform1f(u_time, time);
                        webgl.drawArrays(webgl.TRIANGLES, 0, bufferData.length / 4);
                        requestAnimationFrame(render);
                    }
                }
                startRender();
            };
        })
            .catch(function (error) {
            // 错误处理，出错时重置canvas和webglProgram
            removeCanvas(canvas);
            reject(error);
        });
    });
}
export default boomJS;
