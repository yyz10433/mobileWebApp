import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';   // 需在env.d.ts中定义.vue文件类型 不然会报错
import router from './router'

import './assets/main.css';
import 'vant/lib/index.css';   // vant必引css样式
import './mock/index.ts';      // 开发环境测试mock

import { Tabbar, TabbarItem,NavBar,Popup   } from 'vant';
import global from './util/global';
import globalComponent from './util/globalComponent';


const app = createApp(App);
app.use(createPinia()).use(Tabbar).use(TabbarItem).use(NavBar).use(Popup).use(router).use(global).use(globalComponent).mount('#app');