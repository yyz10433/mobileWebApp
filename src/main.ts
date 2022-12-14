import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';   // 需在env.d.ts中定义.vue文件类型 不然会报错
import router from './router'

import './assets/main.css';
import 'vant/lib/index.css';   // vant必引css样式

import { localStorage } from "./util/storage";

const app = createApp(App);
import { Tabbar, TabbarItem } from 'vant';



/**
 * 全局属性
 */
 app.config.globalProperties.$storage = localStorage;


app.use(createPinia()).use(Tabbar).use(TabbarItem).use(router).mount('#app');



