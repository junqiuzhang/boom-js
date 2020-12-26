# boomJS

boomJS is a library for implementing the explosion effect of examples.

boomJS can achieve example explosion effects on <b>any DOM node</b>, and can achieve cool effects through simple APIs.

## Features

-Based on webGL implementation, good performance, large-scale particle explosion effect can be achieved
-Simple, just call boomJS function
-Lightweight, only 14KB in size
-Configurable, configurable particle number, explosion speed, explosion duration, etc.
-Based on Promise, friendly interface

## Configuration

| Parameter name | Type   | Default value | Description                                                                             |
| -------------- | ------ | ------------- | --------------------------------------------------------------------------------------- |
| m              | number | width         | The number of x-axis particles to split, one particle per pixel is split by default     |
| n              | number | height        | The number of y-axis particles to split, the default is to split one particle per pixel |
| speed          | number | 0.1           | particle speed                                                                          |
| duration       | number | 1000          | Particle effect duration, in milliseconds                                               |

```
declare function boomJS(node: Element, config?: IConfig): Promise<unknown>;
interface IConfig {
  m?: number; // The number of particles on the x axis of the explosion
  n?: number; // The number of particles on the x axis of the explosion
  speed?: number; // Explosion speed
  duration?: number; // Duration of explosion
}
```

## Use

### Used in the project

Command Line:

```
npm i boom-js
```

Code:

```
import boomJS from'webgl-boom-js';
document.body.addEventListener('click', (e) => {
  const ele = e.target;
  boomJS(ele).then(() => {});
});
```

### Use in the page

Introduce:

```
<script src="./dist/boom.min.js" defer=""></script>
```

Code:

```
document.body.addEventListener('click', (e) => {
  const ele = e.target;
  boomJS(ele).then(() => {});
});
```
