const map = new BMap.Map("allmap"); // 创建Map实例
const point = new BMap.Point(116.348996, 40.044725);
map.centerAndZoom(point, 13); // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
map.addEventListener("click", function (e) {
    const marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
    map.addOverlay(marker);

    setTimeout(() => {
        alert(e.point.lng + "," + e.point.lat);
    }, 10);
});

const centers = []; // 所有区域中心点

blockData.forEach((item) => {
    const boundary = [];

    item.boundary.forEach((bd) => {
        boundary.push(new BMap.Point(bd[0], bd[1]))
    })

    const polygon = new BMap.Polygon(boundary, {
        strokeColor: "red",
        strokeWeight: 2,
        strokeOpacity: 0.5
    });

    map.addOverlay(polygon);

    centers.push([polygon.getBounds().getCenter().lng, polygon.getBounds().getCenter().lat])
})

centers.forEach((item) => {
    const options = {
        strokeColor: "blue",
        strokeWeight: 2,
        fillColor: 'transparent',
        fillOpacity: 1,
        strokeOpacity: 1
    };

    const point = new BMap.Point(item[0], item[1]);
    const circle1 = new BMap.Circle(point, 1000, options);
    const circle3 = new BMap.Circle(point, 3000, options);
    const circle5 = new BMap.Circle(point, 5000, options);
    const circle10 = new BMap.Circle(point, 10000, options);

    map.addOverlay(circle1);
    map.addOverlay(circle3);
    map.addOverlay(circle5);
    map.addOverlay(circle10);
})