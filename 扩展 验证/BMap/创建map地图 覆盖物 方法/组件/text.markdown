1. `common` 下的通用组件
2. 可绘制覆盖物类型：`polygon `多边形、`circle`圆形、`marker`点
3. 绘制覆盖物 `map-draw`组件暴露三个 方法,  如下：
  * `mapDraw.polygon( map,  boundary,  styleOptions );`
  * `mapDraw.circle( map,  center,  radius,  styleOptions );`
  * `mapDraw.marker( map,  position,  styleOptions );`
  * 每个方法的返回值为： 绘制的覆盖物对象
4. 参数 `styleOption` 已设置默认参数，可不传
