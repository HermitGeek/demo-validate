/* global BMap */
import '../index.scss';



const htmlTemplate =
    '<input class="label-input" type="text" placeholder="请输入标记信息">' +
    '<span class="label-container"></span>' +
    '<span class="label-button">' +
        '<i class="ivu-icon ivu-icon-close-circled"></i>' +
        '<i class="ivu-icon ivu-icon-checkmark-circled"></i>' +
    '</span>';

/**
 * label 构造函数
 * @param  {Object} pointInfo   点信息
 */
function LabelOverlay(pointInfo) {
    this._position = pointInfo;
    this._value = '';
}

// 继承API的BMap.Overlay
LabelOverlay.prototype = new BMap.Overlay();


// 实现初始化方法 (创建实例对象时 自调用：只调用一次) 先执行
LabelOverlay.prototype.initialize = function (map) {
    this._map = map;
    this._root = document.createElement('div');
    this._root.className = 'poi-mark-label'; // 初始化样式
    this._root.innerHTML = htmlTemplate;
    map.getPanes().markerPane.appendChild(this._root);

    this.registEvent(); // 为label注册事件

    return this._root;
};

// 实现绘制方法 (创建实例对象时 自调用：初始化之后调用一次、地图缩放等级改变都自调用) 后执行
LabelOverlay.prototype.draw = function () {

    this.setPosition(this._position);
};

// 改变 label 当前位置
LabelOverlay.prototype.setPosition = function (labelPosition) {
    this._position = labelPosition;

    const point = new BMap.Point(labelPosition[0], labelPosition[1]);
    const position = this._map.pointToOverlayPixel(point);

    this._root.style.left = `${position.x + 15}px`;
    this._root.style.top = `${position.y - 22}px`;
};

// 为 label 注册事件
LabelOverlay.prototype.registEvent = function () {
    const input = this._root.querySelectorAll('.label-input')[0];
    const container = this._root.querySelectorAll('.label-container')[0];
    const button = this._root.querySelectorAll('.label-button')[0];
    const iconCancel = this._root.querySelectorAll('i')[0];
    const iconConfirm = this._root.querySelectorAll('i')[1];

    // label 样式初始化
    input.focus();
    input.value = this._value;
    button.style.display = 'block';

    // 输入框 注册点击事件
    input.addEventListener('click', (e) => {
        e.target.focus();
        button.style.display = 'block';
    });

    container.addEventListener('click', (e) => {
        e.target.focus();
        button.style.display = 'block';
        input.style.display = 'block';
        container.style.display = 'none';
    });

    // input 注册输入事件，实时保存当前value值
    input.addEventListener('input', (e) => {
        this._value = e.target.value;
    });

    // 输入框确定图标 注册点击事件
    iconConfirm.addEventListener('click', () => {
        input.blur();
        button.style.display = 'none';
        input.style.display = 'none';
        container.style.display = 'block';
        container.innerHTML = input.value;
    });

    // 输入框清除图标 注册点击事件
    iconCancel.addEventListener('click', () => {
        input.value = '';
        this._value = '';
    });
};


export default LabelOverlay;
