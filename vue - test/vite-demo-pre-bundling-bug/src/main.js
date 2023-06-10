import { createApp } from 'vue'
import App from './App.vue'
// import  'vite-dev-demo'

createApp(App).mount('#app')

setTimeout(() => {
    import('vite-dev-demo')
    console.log(111);
}, 1000);

setTimeout(() => {
    import('vite-dev-demo')
    console.log(111);
}, 4000);
