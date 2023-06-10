/* global BMap */

// 覆盖物都有 show()  hide()  方法
// 覆盖物 共用样式
const options = {
    fillColor: '#2ddf82', // 填充颜色。当参数为空时，圆形将没有填充效果。
    fillOpacity: 0.4, // 填充的透明度，取值范围0 - 1。
    strokeColor: '#2ddf82', // 边线颜色。
    strokeWeight: 2, // 边线的宽度，以像素为单位。
    strokeOpacity: 0.6, // 边线透明度，取值范围0 - 1。
    strokeStyle: 'solid' // 边线的样式，solid或dashed。
};

/**
 * 创建 Polygon 覆盖物
 * @param  {Object} map             地图实例
 * @param  {Array} boundarys        覆盖物边界：二维数组
 * @param  {Object} styleOptions    覆盖物配置项
 * @return {Object}                 创建的覆盖物
 */
const polygon = (map, boundarys, styleOptions) => {
    const points = [];

    const overlayStyle = Object.assign({}, options, styleOptions);

    // 绘制覆盖物
    boundarys.forEach((boundary) => {
        points.push(new BMap.Point(boundary[0], boundary[1]));
    });
    const polygonOverlay = new BMap.Polygon(points, overlayStyle);

    // 添加覆盖物
    map.addOverlay(polygonOverlay);

    return polygonOverlay;
};

/**
 * 创建 Circle 覆盖物
 * @param  {Object} map             地图实例
 * @param  {Array} center           覆盖物圆心
 * @param  {Number} radius          覆盖物半径
 * @param  {Object} styleOptions    覆盖物配置项
 * @return {Object}                 创建的覆盖物
 */
const circle = (map, center, radius, styleOptions) => {

    const overlayStyle = Object.assign({}, options, styleOptions);

    // 绘制覆盖物
    const centerPoint = new BMap.Point(center[0], center[1]);
    const circleOverlay = new BMap.Circle(centerPoint, radius, overlayStyle);

    // 添加覆盖物
    map.addOverlay(circleOverlay);

    return circleOverlay;
};

/**
 * 创建 marker 点
 * @param  {Object} map             地图实例
 * @param  {Array} position         marker的位置坐标  [lng, lat]
 * @return {Object}                 创建的覆盖物
 */
const marker = (map, position, styleOptions) => {

    const point = new BMap.Point(position[0], position[1]);
    const markerOverlay = new BMap.Marker(point);

    map.addOverlay(markerOverlay);

    return markerOverlay;
};


/**
 * 创建 自定义 marker 点
 * @param  {Object} map             地图实例
 * @param  {Array} position         marker的位置坐标  [lng, lat]
 * @param  {png} iconPng            自定义图标的png图片
 * @param  {Array} iconSize         自动以图标的大小  [width, height]
 * @return {Object}                 创建的覆盖物
 */
const markerIcon = (map, position, iconPng, iconSize) => {

    const point = new BMap.Point(position[0], position[1]);

    const markerIconOverlay = new BMap.Marker(point, {
        // eslint-disable-next-line no-undef
        icon: new BMap.Icon(iconPng, new BMap.Size(iconSize[0], iconSize[1]))
    });

    map.addOverlay(markerIconOverlay);

    return markerIconOverlay;
};



/**
 * 创建热力图: 需要全局引用 Heatmap.js 插件
 * @param  {Object} map             地图实例
 * @param  {Option} options         热力图配置项
 * @param  {Option} data            对象数组 { [], [], [] }
 * @param  {Number} max             颜色最大权重值
 * @return {Object}                 创建的覆盖物
 */

 /* options 配置项如下：可直接写在 new 实例的过程中； 也可以 写在 setOptions() 方法中
  * visible: 热力图是否显示,默认为true
  * opacity: 热力的透明度,1-100
  * radius: 势力图的每个点的半径大小
  * gradient: // 热力图的渐变区间: 其中 key 表示插值的位置: 0~1 ;  value 为颜色值
     {
       0.2:'rgb(0, 255, 255)',
       0.5:'rgb(0, 110, 255)',
       0.8:'rgb(100, 0, 255)'
     }
  */

 /**
  * setDataSet 方法：配置数据
  * max: 颜色权重的最大值
  * data: 热力图数据，格式如下
  * [{
        "lng": 经度0°——180°
        "lat": 纬度0°——90°
        "count": 权重值
    }]
  */

 /**
  * toggle() 方法，切换覆盖物显示隐藏
  */
const heatmap = (map, options, data, max) => {
    //判断浏览区是否支持canvas
    function isSupportCanvas() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

    if (!isSupportCanvas()) {
        alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
    }

    heatmapOverlay = new BMapLib.HeatmapOverlay({
        'radius': 20
    });
    map.addOverlay(heatmapOverlay);
    heatmapOverlay.setDataSet({
        data,
        max
    });

    return heatmapOverlay;
}

export default {
    polygon,
    circle,
    marker,
    markerIcon,
    heatmap
};
