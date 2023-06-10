/* global BMap */
import poiMarkIcon from './assets/location-onmap.png';
import PoiMarkLabel from './assets/index';



export default {
    data() {
        return {
            overlayMarkerLabel: [], // 覆盖物数组，存 marker、label
            overlayIndexCurrent: null // 当前marker覆盖物索引值
        };
    },
    props: {
        map: {
            type: Object,
            require: true
        }
    },
    methods: {
        /**
         * 单击打点
         */
        markCreate() {
            // 绘制圆点
            const icon = new BMap.Icon(poiMarkIcon, new BMap.Size(24, 24));

            const options = {
                enableDragging: true,
                icon,
                offset: new BMap.Size(4, -11)

            };

            // 实例化鼠标绘制工具
            // eslint-disable-next-line no-undef
            this.mapDraw = new BMapLib.DrawingManager(this.map, {
                isOpen: false,
                enableDrawingOverlay: false, // 是否显示工具栏
                markerOptions: options
            });

            // 设置绘制图形类型
            // eslint-disable-next-line no-undef
            this.mapDraw.setDrawingMode(BMAP_DRAWING_MARKER);


            this.mapDraw.open();

            this.mapDraw.addEventListener('markercomplete', (e, marker) => {
                // marker 标记点注册事件
                this.markEventRegist(marker);

                // 关闭地图绘制模式
                this.mapDraw.close();

                // 创建自定义覆盖物（标记点描述信息）
                const point = marker.getPosition();
                const overlayLabel = new PoiMarkLabel([point.lng, point.lat]);

                this.map.addOverlay(overlayLabel);

                // 保存覆盖物
                this.overlayMarkerLabel.push({
                    marker,
                    label: overlayLabel
                });
            });
        },

        /**
         * 清空 标记点
         */
        markClear() {
            // 关闭地图绘图模式
            this.mapDraw.close();

            // 清除所有覆盖物
            this.overlayMarkerLabel.forEach((overlay) => {
                this.map.removeOverlay(overlay.marker);
                this.map.removeOverlay(overlay.label);
            });
            this.overlayMarkerLabel = [];
        },

        /**
         * marker 标记点注册事件
         * @param  {Object} marker marker标记点
         */
        markEventRegist(marker) {
            // marker 被开始拖动触发的事件：更新当前被拖动 marker 的索引
            marker.addEventListener('dragstart', (e) => {
                this.overlayMarkerLabel.forEach((overlay, index) => {
                    if (overlay.marker === e.currentTarget) {
                        this.overlayIndexCurrent = index;
                    }
                });
            });

            // marker 被拖动过程中触发的事件
            marker.addEventListener('dragging', (e) => {
                const position = e.point;
                const labelCurrent = this.overlayMarkerLabel[this.overlayIndexCurrent].label;

                // 更新当前覆盖物 位置
                labelCurrent.setPosition([position.lng, position.lat]);
            });

            // 双击 marker 删除覆盖物
            marker.addEventListener('dblclick', (e) => {
                this.overlayMarkerLabel.forEach((overlay, index) => {
                    if (overlay.marker === e.currentTarget) {
                        this.overlayIndexCurrent = index;

                        // 清除所有覆盖物
                        this.map.removeOverlay(this.overlayMarkerLabel[index].marker);
                        this.map.removeOverlay(this.overlayMarkerLabel[index].label);

                        this.overlayMarkerLabel.splice(index, 1);
                    }
                });
            });
        }
    }
};
