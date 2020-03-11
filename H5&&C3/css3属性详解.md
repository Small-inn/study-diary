## CSS3属性详解
---
1. 边框
    - 圆角边框 border-radius: 1-4 length|% / 1-4 length|%（length:数值， %: 比例，以top-left顺时针开始四个角）
    - box-shadow: h-shadow v-shadow blur spread color inset（h-shadow: 	必需。水平阴影的位置。允许负值， v-shadow:	必需。垂直阴影的位置。允许负值， blur:可选。模糊距离， spread:可选。阴影的尺寸， color:可选。阴影的颜色， inset:可选。将外部阴影 (outset) 改为内部阴影）
    - border-image: border-image-source	用在边框的图片的路径。border-image-slice	图片边框向内偏移。border-image-width	图片边框的宽度。border-image-outset	边框图像区域超出边框的量。border-image-repeat	图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。（默认值：none 100% 1 0 stretch）
2. 背景
    - background-size: 属性规定背景图片的尺寸（x: length || %, y: length || % ）
    - background-origin: 属性规定背景图片的定位区域（content-box、padding-box 或 border-box）
3. 文本效果
    - text-shadow: 可向文本应用阴影
    - word-wrap: 属性允许您允许文本强制文本进行换行
4. 字体
    - @font-face 
5. 2D转换
    - transform: translate()、rotate()、scale()、skew()、matrix()
        - 通过 translate() 方法，元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数：
        - 通过 rotate() 方法，元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。
        - 通过 scale() 方法，元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数：
        - 通过 skew() 方法，元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数：
        - matrix() 方法把所有 2D 转换方法组合在一起。matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。
    - transform-origin: x, y ,z
        - x, y, 均可为top、center、bottom、length, z的值只可能为length    
        - 注意：该属性必须与 transform 属性一同使用 
6. 3D转换
    - transform: 同上
    - transform-origin: 同上
    - transform-style: flat|preserve-3d; 规定被嵌套元素如何在 3D 空间中显示
        - flat: 子元素将不保留其 3D 位置
        - preserve-3d: 子元素将保留其 3D 位置
    - perspective: number|none; 规定 3D 元素的透视效果
        - 提示：perspective 属性只影响 3D 转换元素。请与 perspective-origin 属性一同使用该属性，这样您就能够改变 3D 元素的底部位置
        - number: 元素距离视图的距离，以像素计
        - none: 默认值，与0相同
    - perspective-origin: x, y; 规定 3D 元素的底部位置
        - 定义该视图在 x 轴上的位置,可能的值left, right, center, length, %, 默认值50%
        - 定义该视图在 y 轴上的位置, 可能的值同上
    - backface-visibility: visible|hidden; 定义元素在不面对屏幕时是否可见
7. 过渡
    - transition: transition-property, transition-duration, transition-timing-function, transition-delay; 元素从一种样式逐渐改变为另一种的效果
        - transition-property: 规定应用过渡的 CSS 属性的名称
        - transition-duration: 定义过渡效果花费的时间。默认是 0。
        - transition-timing-function: 规定过渡效果的时间曲线。默认是 "ease"。
        - transition-delay: 规定过渡效果何时开始。默认是 0。
8. 动画
    - animation: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-play-state, animation-fill-mode
        - animation: 所有动画属性的简写属性，除了 animation-play-state 属性。
        - animation-name: @keyframs定义的动画名
        - animation-duration: 规定动画完成一个周期所花费的秒或毫秒。默认是 0。
        - animation-timing-function: 规定动画的速度曲线。默认是 "ease"。
        - animation-delay: 规定动画何时开始。默认是 0。
        - animation-iteration-count: 规定动画被播放的次数。默认是 1。
        - animation-direction: 规定动画是否在下一周期逆向地播放。默认是 "normal"。
        - animation-play-state: 规定动画是否正在运行或暂停。默认是 "running"。
        - animation-fill-mode: 规定对象动画时间之外的状态。
9. 多列
    - 常用flex代替  
10. 用户界面
    - resize: horizontal(宽度)|vertical(高度)|both|none; 规定 div 元素可由用户调整大小
    - box-sizing: border-box|content-box|inherit; 属性允许您以确切的方式定义适应某个区域的具体内容。
    - outline-offset: length|inherit; 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。