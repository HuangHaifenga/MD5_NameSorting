import { createApp, provide } from 'vue'
import App from './App.vue'
import router from "./router"
import storage from "./util/storage"
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as echarts from "echarts"
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '../src/hooks/fontawesome'
import focusDirective from '../src/hooks/Customize'; // 替换为实际的文件路径

// import 'video.js/dist/video-js.css'
export enum Providers {
     STORAGE = 'storage'
}
export type ECharts = typeof echarts


const app = createApp(App)


// 注册全局自定义指令
app.directive('focus', focusDirective);
app.provide<ECharts>("echarts", echarts)
app.provide(Providers.STORAGE, storage)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app')


