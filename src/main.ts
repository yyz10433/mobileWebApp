import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';   // 需在env.d.ts中定义.vue文件类型 不然会报错
import router from './router'

import './assets/main.css';
import 'vant/lib/index.css';   // vant必引css样式
import './mock/index.ts';      // 开发环境测试mock

import { Tabbar, TabbarItem } from 'vant';
import global from './util/global';


const app = createApp(App);
app.use(createPinia()).use(Tabbar).use(TabbarItem).use(router).use(global).mount('#app');