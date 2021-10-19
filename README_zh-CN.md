# boomJS

boomJS 是一个用于实现例子爆炸效果的库。

boomJS 可以在<b>任意 DOM 节点</b>上实现例子爆炸效果，可以通过简单的 API 实现炫酷的效果。

## 特点

- 基于 webGL 实现，性能好，可实现大规模粒子爆炸效果
- 简单，调用 boomJS 函数即可
- 轻量，体积仅 14KB
- 可配置，可配置粒子数，爆炸速度，爆炸时长等
- 支持动画回调
- 支持 Promise

## 配置

| 参数名   | 类型       | 默认值 | 说明                                     |
| -------- | ---------- | ------ | ---------------------------------------- |
| m        | number     | width  | x 轴粒子拆分个数，默认每像素拆分一个粒子 |
| n        | number     | height | y 轴粒子拆分个数，默认每像素拆分一个粒子 |
| a        | number     | 0.001  | 阻力加速度，单位像素 / 帧^2              |
| speed    | number     | 1      | 初始运动速度，单位像素 / 帧              |
| duration | number     | 1000   | 运动时间，单位帧数                       |
| onStart  | () => void | 无     | 粒子效果开始的回调                       |
| onEnd    | () => void | 无     | 粒子效果结束的回调                       |

```ts
declare function boomJS(node: Element, config?: IConfig): Promise<unknown>;
interface IConfig {
  m?: number; // 爆炸的x轴粒子数
  n?: number; // 爆炸的x轴粒子数
  a?: number; // 阻力加速度(px / frame ^ 2)
  speed?: number; // 爆炸初始速度(px / frame)
  duration?: number; // 爆炸时长(frame)
  onStart?: () => void; // 爆炸开始的回调
  onEnd?: () => void; // 爆炸结束的回调
}
```

## 使用

```ts
import boomJS from "webgl-boom-js";
document.body.addEventListener("click", (e) => {
  const ele = e.target;
  boomJS(ele).then(() => {});
});
```

或者

```ts
import boomJS from "webgl-boom-js";
document.body.addEventListener("click", (e) => {
  const ele = e.target as HTMLElement;
  boomJS(ele, {
    a: 0.001,
    speed: 1,
    duration: 3000,
    onStart: () => {
      ele.style.opacity = "0";
    },
    onEnd: () => {
      ele.style.opacity = "1";
    },
  });
});
```

### 项目中使用

命令行：

```sh
npm i webgl-boom-js
```

```ts
import boomJS from "webgl-boom-js";
```

### 页面中使用

引入：

```html
<script src="./dist/boom.min.js" defer=""></script>
```

## 开源协议

MIT
