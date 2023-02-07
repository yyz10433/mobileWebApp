import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { useCounterStore } from "../stores/counter";


const router = createRouter({
  history: createWebHistory(),  // 需后端支持可开
  routes
});


router.beforeEach((to, from, next) => {




  

  const store = useCounterStore();
  const isShow = to.meta.isShowTab as boolean;

   // 二级页面隐藏导航栏
  store.isShowFooterTab(isShow);
  /**
   * 切换页面清除请求防止重复请求过多
   */
  if (store.requestList.length > 0) {
    store.clearReqeustList();
  }
  next();
})

export default router
