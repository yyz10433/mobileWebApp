import { defineStore } from 'pinia';
import { requestList, tabbar } from "../interface/interface";

const useCounterStore = defineStore('counter', {

  /**
 * 储存全局变量 访问可直接
 */
  state: () => {
    return {
      requestList: [] as Array<requestList>,   // 请求缓存列表
      count: 0,  // 测试变量
      footerBar: [
        { name: '首页', icon: 'home-o', url: `Home` },
        { name: '分类', icon: 'apps-o', url: `CateGroy` },
        { name: '购物车', icon: 'shopping-cart-o', url: `Cart` },
        { name: '我的', icon: 'manager-o', url: `Mine` },
      ] as Array<tabbar>,
      certifiOverdueList: [] as any[],   // 用于存储接口返回1004的方法
      isShowTab: false,  // 二级页面不展示底部导航
    }
  },


  /**
   * 计算属性
   */
  getters: {
    changeAount(state) {
      return ++state.count
    }
  },



  /**
   * actions 异步改变state
   */
  actions: {
    /**
     * 添加请求
     */
    addRequest(callback: Function) {
      this.requestList.push({ callback });
    },


    /**
     * 页面切换时终止已缓存请求
     */
    clearReqeustList() {
      if (this.requestList.length > 0) {
        const list = this.requestList;
        list.forEach(e => {
          e?.callback ? e.callback('claerRequest') : null;
        });
        this.requestList = [];
      }
    },


    /**
     * 添加接口返回1004的请求
     */
    addOverdu(loginBack: object) {
      this.certifiOverdueList.push(loginBack);
    },


    /**
     * 登录成功后重新执行之前1004接口 无需用户重新刷新页面
     */
    loginCallback() {
      const list = this.certifiOverdueList;
      /**
       * 模拟用户拿到新的token完成以后
       */
      setTimeout(() => {
        if (!list.length) return;
        list.forEach(v => {
          v?.callback ? v.callback() : null
        });
        this.certifiOverdueList = [];
      }, 5 * 1000);
    },


    /**
     * 改变底部导航栏
     */
    isShowFooterTab(show: boolean) {
      this.isShowTab = show;
    }

  },
})




export {
  useCounterStore
}