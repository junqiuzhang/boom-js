# boomJS

boomJS is a library for implementing the explosion effect of particle.

boomJS can achieve particle explosion effects on <b>any DOM node</b>, and can achieve cool effects through simple APIs.

[中文文档](https://github.com/junqiuzhang/boom-js/blob/master/README_zh-CN.md)

## Features

- Based on webGL implementation, good performance, large-scale particle explosion effect can be achieved
- Simple, just call boomJS function
- Lightweight, only 14KB in size
- Configurable number of particles, initial velocity, acceleration, explosion duration, etc
- Support animation callbacks
- Support Promise

## Configuration

| Parameter name | Type       | Default value | Description                                                                             |
| -------------- | ---------- | ------------- | --------------------------------------------------------------------------------------- |
| m              | number     | width         | The number of x-axis particles to split, one particle per pixel is split by default     |
| n              | number     | height        | The number of y-axis particles to split, the default is to split one particle per pixel |
| a              | number     | 0.001         | Drag acceleration in pixels per frame ^2                                                |
| speed          | number     | 1             | Initial motion speed in pixels per frame                                                |
| duration       | number     | 1000          | Motion time, in frames                                                                  |
| onStart        | () => void | none          | Callback to the beginning of particle effects                                           |
| onEnd          | () => void | none          | Callback to end of particle effect                                                      |

```ts
declare function boomJS(node: Element, config?: IConfig): Promise<unknown>;
interface IConfig {
  m?: number; // The number of particles on the x axis of the explosion
  n?: number; // The number of particles on the y axis of the explosion
  a?: number; // Drag acceleration (px / frame ^ 2)
  speed?: number; // Initial motion speed (px / frame)
  duration?: number; // Motion time (frame)
  onStart?: () => void; // Callbacks of beginning
  onEnd?: () => void; // Callback of end
}
```

## Use

```ts
import boomJS from "webgl-boom-js";
document.body.addEventListener("click", (e) => {
  const ele = e.target;
  boomJS(ele).then(() => {});
});
```

Or

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

### Used in the project

Command Line:

```sh
npm i webgl-boom-js
```

```ts
import boomJS from "webgl-boom-js";
```

### Use in the page

Introduce:

```html
<script src="./dist/boom.min.js" defer=""></script>
```

## License

MIT
