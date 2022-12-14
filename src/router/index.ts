import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { useCounterStore } from "../stores/counter";


const router = createRouter({
  history: createWebHistory(),  // 需后端支持可开
  routes
});



router.beforeEach((to, from, next) => {
  /**
   * 清除请求
   */
  const store = useCounterStore();
  if (store.requestList.length > 0) {
    store.clearReqeustList();
  }
  next();
})

export default router
