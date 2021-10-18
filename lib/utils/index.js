var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import html2canvas from "html2canvas";
export function insertCanvas() {
    var canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.setAttribute("style", "position: absolute; top: 0; left: 0;");
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
        console.log("Error: vertexShaderObject compile error!", webgl.getShaderInfoLog(vertexShaderObject));
        return;
    }
    if (!webgl.getShaderParameter(fragmentShaderObject, webgl.COMPILE_STATUS)) {
        console.log("Error: fragmentShaderObject compile error!", webgl.getShaderInfoLog(fragmentShaderObject));
        return;
    }
    // 创建program
    var programObject = webgl.createProgram();
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
        console.log("Error: programObject link error!", webgl.getProgramInfoLog(programObject));
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
export var dom2img = function (node, opt) { return __awaiter(void 0, void 0, void 0, function () {
    var options, canvas, dataURL;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = __assign({ allowTaint: true, useCORS: true, scale: 1, width: node.clientWidth, height: node.clientHeight }, opt);
                return [4 /*yield*/, html2canvas(node, options)];
            case 1:
                canvas = _a.sent();
                dataURL = canvas.toDataURL("image/png");
                return [2 /*return*/, dataURL];
        }
    });
}); };
