export function insertCanvas() {
    var canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.setAttribute('style', 'position: absolute; top: 0; left: 0;');
    document.body.appendChild(canvas);
    return canvas;
}
export function removeCanvas(canvas) {
    document.body.removeChild(canvas);
    return canvas;
}
export function initWebglProgram(_a) {
    var webgl = _a.webgl, vsSource = _a.vsSource, fsSource = _a.fsSource;
    // 创建shader
    var vertexShaderObject = webgl.createShader(webgl.VERTEX_SHADER);
    var fragmentShaderObject = webgl.createShader(webgl.FRAGMENT_SHADER);
    if (!vertexShaderObject) {
        console.log('Error: vertexShaderObject create error!');
        return;
    }
    if (!fragmentShaderObject) {
        console.log('Error: fragmentShaderObject create error!');
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
        console.log('Error: vertexShaderObject compile error!', webgl.getShaderInfoLog(vertexShaderObject));
        return;
    }
    if (!webgl.getShaderParameter(fragmentShaderObject, webgl.COMPILE_STATUS)) {
        console.log('Error: fragmentShaderObject compile error!', webgl.getShaderInfoLog(fragmentShaderObject));
        return;
    }
    // 创建program
    var programObject = webgl.createProgram();
    if (!programObject) {
        console.log('Error: programObject create error!');
        return;
    }
    // 绑定program
    webgl.attachShader(programObject, vertexShaderObject);
    webgl.attachShader(programObject, fragmentShaderObject);
    // 链接program
    webgl.linkProgram(programObject);
    // 链接错误处理
    if (!webgl.getProgramParameter(programObject, webgl.LINK_STATUS)) {
        console.log('Error: programObject link error!', webgl.getProgramInfoLog(programObject));
        return;
    }
    // 使用program
    webgl.useProgram(programObject);
    return programObject;
}
// 生成将图像等分为 m x n 矩形的数据
export var initParticlesData = function (m, n) {
    var positions = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var _a = [i / m, (i + 1) / m], x0 = _a[0], x1 = _a[1]; // 每个粒子的 x 轴左右坐标
            var _b = [j / n, (j + 1) / n], y0 = _b[0], y1 = _b[1]; // 每个粒子的 y 轴上下坐标
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
