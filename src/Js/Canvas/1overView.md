# OverView

## Introduction

\<Canvas>是用于绘制图形的标签。\<Canvas>只有 width 与 height 两个属性，默认值分别为 300 与 150，可以使用 CSS 来定义其大小，但是推荐使用属性来定义。id,class 等 html 元素默认属性也支持，但是如 margin、border，background 等属性，不会影响 canvas 中的实际图像。Canvas 的默认样式为完全透明。

### 替换内容

对于不支持 Canvas 的浏览器，可以通过设置替换内容来忽略 Canvas 容器并渲染后别内容，支持 Canvas 的浏览器会忽略容器中包含的内容，正常渲染 Canvas

```html
<canvas width="150" height="150">
  <span>浏览器版本过低，不支持Canvas</span>
</canvas>
```

### 渲染上下文

canvas 提供了一个或多个渲染上下文，可以用来控制与处理渲染的内容。通过 getContext() 方法获取渲染上下文。

```js
var canvas = document.getElemetnById('canvasId');
var ctx = canvas.getContext('2d');
```
