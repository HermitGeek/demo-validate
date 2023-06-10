import Vue from 'vue';
import 'url-search-params-polyfill';    // 兼容 URLSearchParams
import $http from '@src/common/utils/$http';
import $store from '@src/common/utils/$store';
import $router from '@src/common/utils/$router';
import * as handlers from '@src/common/utils/$handler';
import $app from '@src/common/views/$app';
import '@src/common/widgets/$vant';
import viewportBuggyfill from 'viewport-units-buggyfill';
import viewportBuggyfillHack from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks';



/**
 * mobile 生产环境下 兼容 vw
 *
 *      viewport units (vh|vw|vmin|vmax) in Mobile Safari
 *      viewport units inside calc() expressions in Mobile Safari and IE9+ (hack)
 *      vmin, vmax in IE9+ (hack)
 *      viewport units in old Android Stock Browser (hack)
*/
if (process.env.NODE_ENV === 'production') {
    viewportBuggyfill.init({
        hacks: viewportBuggyfillHack
    });
}


// 注册 全局过滤器（$handler 的API）
Object.keys(handlers).forEach((key) => {
    Vue.filter(key, handlers[key]);
});

// 创建 vue根实例
const vm = new Vue({
    el: '#mount',
    router: $router,
    store: $store,
    render: createElement => createElement($app)
});


Vue.prototype.$vm = vm;
Vue.prototype.$http = $http;


export default vm;
