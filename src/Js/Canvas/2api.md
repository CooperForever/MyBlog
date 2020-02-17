# API

## 绘制直线

```js
context.moveTo(x, y); //移动当前位置
context.lineTo(x, y); //线条状态
context.strokeStyle = 'string'; //设置线条样式
context.stroke(); //进行绘制
```

canvs 直线绘制是基于状态，如果需要绘制多段线并设置不同线条的样式，需要使用如下方法：

```js
context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();
context.closePath();
```

使用 beginPath() 与 closePath() 能够分隔不同线条的状态，可以保证样式互不影响。

## 绘制弧线

```js
context.arc(
  centerx, //圆心坐标X
  centery, //圆心坐标y
  radius, //半径
  startingAngle, //起始弧度值
  endingAngle, //结束弧度值
  anticlockwise = false) //默认顺时针绘制)
);
```

在绘制弧线时，如果使用了 beginPath() closePath(), 弧线收尾会以直线自动连接，
beginPath()与 closePath() 无需成对出现，按情况选择是否需要 closePath()。
