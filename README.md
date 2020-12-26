# boomJS
boomJS是一个用于实现例子爆炸效果的库。

boomJS可以在<b>任意DOM节点</b>上实现例子爆炸效果，可以通过简单的API实现炫酷的效果。

## 特点
- 基于webGL实现，性能好，可实现大规模粒子爆炸效果
- 简单，只需调用boomJS函数即可
- 轻量，只需14KB即可
- 零配置，只有DOM节点是必须的
- 基于Promise，接口友好

## 使用
### 项目中使用
命令行：
```
npm i boom-js
```
代码：
```
import boomJS from '@boom/boom-js';
document.body.addEventListener('click', (e) => {
  const ele = e.target;
  boomJS(ele).then(() => {});
});
```
### 页面中使用
引入：
```
<script src="./dist/boom.min.js" defer=""></script>
```
代码：
```
document.body.addEventListener('click', (e) => {
  const ele = e.target;
  boomJS(ele).then(() => {});
});
```