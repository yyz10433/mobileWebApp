/**
 * 路由配置文件
 */

import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";
import CateGroy from "../views/categroy/index.vue";
import Mine from "../views/Mine/index.vue";
import Cart from "../views/Cart/index.vue";
import MineDetail from "../views/MineDetail/index.vue";
import Video from "../views/video/index.vue";

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
    component: () => Home,
    meta: {
      isShowTab: true   // 是否为一级页面
    }
  },
  {
    name: 'CateGroy',
    path: '/CateGroy',
    component: () => CateGroy,
    meta: {
      isShowTab: true
    }
  },
  {
    name: 'Cart',
    path: '/Cart',
    component: () => Cart,
    meta: {
      isShowTab: true
    }
  },
  {
    name: 'Mine',
    path: '/Mine',
    component: () => Mine,
    meta: {
      isShowTab: true
    }
  },
  /** 二级页面 */
  {
    name: 'MineDetail',
    path: '/MineDetail',
    component: () => MineDetail,
  },
  {
    name: 'video',
    path: '/video',
    component: () => Video,
  }
];


export default routes