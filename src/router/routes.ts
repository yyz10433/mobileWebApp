/**
 * 路由配置文件
 */

import  { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";
import CateGroy from "../views/categroy/index.vue";
import Mine from "../views/Mine/index.vue";

/**
 * 基本页面
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    name: 'Home',
    path: '/Home',
    component: () => Home
  },
  {
    name: 'CateGroy',
    path: '/CateGroy',
    component: () => CateGroy
  },
  {
    name: 'Mine',
    path: '/Mine',
    component: () => Mine
  }
];


export default  routes