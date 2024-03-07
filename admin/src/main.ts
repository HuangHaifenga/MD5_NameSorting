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
// import 'video.js/dist/video-js.css'
export enum Providers {
     STORAGE = 'storage'
}

export type ECharts = typeof echarts


createApp(App)
     .provide<ECharts>("echarts", echarts)
     .provide(Providers.STORAGE, storage)
     .use(router)
     .use(ElementPlus)
     .use(createPinia())
     .mount('#app')

