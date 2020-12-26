# boomJS
boomJS is a library for implementing the explosion effect of examples.

boomJS can achieve example explosion effects on <b>any DOM node</b>, and can achieve cool effects through simple APIs.

## Features
-Based on webGL implementation, good performance, can achieve large-scale particle explosion effect
-Simple, just call the boomJS function
-Lightweight, only 14KB
-Zero configuration, only DOM nodes are necessary
-Based on Promise, friendly interface

## Use
### Used in the project
Command Line:
```
npm i boom-js
```
Code:
```
import boomJS from'@boom/boom-js';
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