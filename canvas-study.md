## canvas 学习笔记

---

> h5 新增的画布功能，用于绘制图片等

## (一) 绘制矩形过程

1. 获取 canvas 对象
2. 取得上下文(context)，它是一个封装很多绘图功能的对象。需要使用 cavnas 的 getContext()来获得图形上下文，参数只能为 2d,d 小写
3. 填充与绘制边框，cavnas 绘图有两种方式，填充(fill)、绘制边框(stroke)
4. 设定绘图样式(style),在绘图的时候，首先设定好绘图的样式，然后调用有关方法进行图形绘制，绘图样式主要是针对图形颜色来说的，但不局限与图像的颜色，如 fillStyle 属性用来填入填充的颜色值、strokeStyle 属性填入图形边框的样式
5. 指定线宽，lineWidth 属性设置图形边框的宽度，在绘制图形的时候，任何直线都可以用 lineWidth 属性指定直线的宽度
6. 指定颜色值，使用 fillStyle 和 strokeStyle 属性进行指定
7. 绘制矩形，分别使用 fillRect()和 strokeRect()定义，四个参数（x, y, width, height）

## （二）绘制圆形

1. 开始创建路径，使用图形上下文对象的 beginPath()方法，不需要传入参数
2. 创建图形的路径，创建圆形路径，context.arc(x, y, radius, startAngle, endAngle, anticlockwise), anticlockwise 布尔值，是否为顺时针
3. 路径创建完毕后，关闭路径，context.closePath()
4. 设定绘制样式，调用绘制方法，绘制轮廓，context.fillStyle 属性和 context.fill()方法

## （三）绘制直线

1. moveTo(),作用是将光标移动到指定的坐标点，绘制直线的时候以这个坐标点为起点，moveTo(x, y)
2. lineTo(),该方法与 moveTo()中指定的直线起点与参数中指定的直线终点之间绘制一条直线，lineTo(x, y)

## （四）贝塞尔曲线（用来绘制复杂有规律的图形）

1. 二次贝塞尔曲线，quadraticCurveTo(cp1x, cp1y, x, y)，绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。
2. 三次贝塞尔曲线，bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)，绘制三次贝塞尔曲线，cp1x,cp1y 为控制点一，cp2x,cp2y 为控制点二，x,y 为结束点。

## （五）绘制渐变图形

1. createLinearGradient()方法创建一个沿参数坐标指定的直线的渐变。这个方法返回 CanvasGradient。
2. createRadialGradient() 是 Canvas 2D API 根据参数确定两个圆的坐标，绘制放射性渐变的方法。这个方法返回 CanvasGradient。
3. gradient.addColorStop(position, color) addColorStop 方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF， rgba(0,0,0,1)，等等）。

## （六）line style

1. lineWidth：线宽。只能是整值，默为 1.0，起始点和终点的连线为中心，上下各占线宽的一半
2. lineCap：线条末端样式。butt:线条末端以方形结束，round:线条末端以圆形结束，square:线条末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域
3. lineJoin：同一个 path 内，设定线条与线条间接合处的样式。

- round
  通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
- bevel
  在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
- miter(默认)
  通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。

## （七）虚线

> 用 setlineDash()和 lineDashOffset 属性来制定虚线样式，setlineDash()接受一个数组，来指定线段与间隙的交替，lineDashOffset 属性设置起始偏移量,getLineDash():返回一个包含当前虚线样式，长度为非负偶数的数组。

## （八）文本绘制

1. fillText(text, x, y [, maxWidth])
   在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
2. strokeText(text, x, y [, maxWidth])
   在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.

---

> 样式

3. font = value
   当前我们用来绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法. 默认的字体是 10px sans-serif。

4. textAlign = value
   文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。

5. textBaseline = value
   基线对齐选项，可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。

6. direction = value
   文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。

## （九）绘制图片

1. drawImage(img, 0, 0 ):参数 1：要绘制的 img 参数 2、3：绘制的 img 在 canvas 中的坐标
2. 缩放图片，drawImage(img, 0, 0, widht, height),当 cavnas 画入时缩放的大小
3. 切片：drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)，第一个参数和其它的是相同的，都是一个图像或者另一个 canvas 的引用。其他 8 个参数：前 4 个是定义图像源的切片位置和大小，后 4 个则是定义切片的目标显示位置和大小。

## （十）状态的保存和恢复

1. save()
2. restore()
   save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

Canvas 状态存储在栈中，每当 save()方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

当前应用的变形（即移动，旋转和缩放，见下）
strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation 的值
当前的裁切路径（clipping path）
每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。

## （十一）图片样式

1. createPattern(image, type) Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。

## （十二）阴影

1. shadowOffsetX = float 设定阴影在 X 轴的延伸距离。
2. shadowOffsetY = float 设定阴影在 Y 轴的延伸距离。
3. shadowBlur = float 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。
4. shadowColor = color 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。

## （十三）变形

1. translate(x, y) 偏移 translate 方法接受两个参数。x 是左右偏移量，y 是上下偏移量。
2. rotate(angle) 这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。
3. scale(x, y) scale 方法接受两个参数。x,y 分别是横轴和纵轴的缩放因子，它们都必须是正值。值比 1.0 小表示缩小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。
4. transform(m11, m12, m21, m22, dx, dy)
   这个函数的参数，各自代表：
   m11：水平方向的缩放，
   m12：水平方向的倾斜偏移，
   m21：竖直方向的倾斜偏移，
   m22：竖直方向的缩放，
   dx：水平方向的移动，
   dy：竖直方向的移动。

5. setTransform(m11, m12, m21, m22, dx, dy) 这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform 方法。
6. resetTransform() => setTransform(1, 0, 0, 1, 0, 0)。

## （十四）组合(合成)

1. globalCompositeOperation = type 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串，详情 type 参见[Compositing 示例](https://segmentfault.com/a/1190000016031115#articleHeader32);

## （十五）裁剪路径
1. clip():把已经创建的路径转换成裁剪路径。裁剪路径的作用是遮罩。只显示裁剪路径内的区域，裁剪路径外的区域会被隐藏（注意：clip()只能遮罩在这个方法调用之后绘制的图像，如果是clip()方法调用之前绘制的图像，则无法实现遮罩。 ）