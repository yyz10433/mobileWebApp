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
        { name: '奶柜', icon: 'search', url: `CateGroy` },
        { name: '我的', icon: 'setting-o', url: `Mine` },
      ] as Array<tabbar>,
      certifiOverdueList: [] as any[],   // 用于存储接口返回1004的方法
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
      }, 5 * 1000);

    }

  },
})




export {
  useCounterStore
}