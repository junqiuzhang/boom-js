# boomJS

boomJS 是一个用于实现例子爆炸效果的库。

boomJS 可以在<b>任意 DOM 节点</b>上实现例子爆炸效果，可以通过简单的 API 实现炫酷的效果。

## 特点

- 基于 webGL 实现，性能好，可实现大规模粒子爆炸效果
- 简单，调用 boomJS 函数即可
- 轻量，体积仅 14KB
- 可配置，可配置粒子数，爆炸速度，爆炸时长等
- 基于 Promise，接口友好

## 配置

| 参数名   | 类型   | 默认值 | 说明                                     |
| -------- | ------ | ------ | ---------------------------------------- |
| m        | number | width  | x 轴粒子拆分个数，默认每像素拆分一个粒子 |
| n        | number | height | y 轴粒子拆分个数，默认每像素拆分一个粒子 |
| speed    | number | 0.1    | 粒子运动速度                             |
| duration | number | 1000   | 粒子效果持续时间，单位毫秒数             |

```ts
declare function boomJS(node: Element, config?: IConfig): Promise<unknown>;
interface IConfig {
  m?: number; // 爆炸的x轴粒子数
  n?: number; // 爆炸的y轴粒子数
  speed?: number; // 爆炸速度
  duration?: number; // 爆炸时长
}
```

## 使用

### 项目中使用

命令行：

```sh
npm i webgl-boom-js
```

代码：

```ts
import boomJS from "webgl-boom-js";
document.body.addEventListener("click", (e) => {
  const ele = e.target;
  boomJS(ele).then(() => {});
});
```

### 页面中使用

引入：

```html
<script src="./dist/boom.min.js" defer=""></script>
```

代码：

```ts
document.body.addEventListener("click", (e) => {
  const ele = e.target;
  boomJS(ele).then(() => {});
});
```

## 开源协议

MIT
