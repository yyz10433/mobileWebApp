/**
 * axios请求
 */

import axios from "axios";

/**
 * AxiosInstance  axios实例
 * AxiosRequestConfig  请求接口类型
 * AxiosResponse 响应接口类型
 */
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useRouter } from "vue-router";
import { localStorage } from "../util/storage";
import { useCounterStore } from "../stores/counter";



class httpRequestClass {

  private instance: AxiosInstance;  // axios实例
  private baseUrl: string = import.meta.env.VITE_BASE_URL as string;  // 全局url
  private router = useRouter();
  private method: string = 'get';  // 默认请求方式
  private cancelToken:any = axios.CancelToken;   // 取消重复请求
  // private store:any = useCounterStore();  // 仓库


  constructor() {
    /**
     * 初始化axios
     */
    this.instance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
      },
      timeout: 1 * 3000,
    });


    /**
     * 请求拦截
     */
    this.instance.interceptors.request.use((config) => {
      const token = this.getToken();
      const store = useCounterStore();
      if (config.headers && token) {
        config.headers['access_token'] = token;
      }

      // 将请求存入请求列表
      config['cancelToken'] = new this.cancelToken((cancel:Function)=>{
        store.addRequest(cancel);
      })

      return config
    })


    /**
     * 响应拦截
     */
    this.instance.interceptors.response.use(async (res: AxiosResponse) => {
      const status: Number = res.data.code;
      const store = useCounterStore();
      console.log(res);
      
      switch (status) {
        case 200:
          return res.data;
        case 400:  // token失效
          console.log('params error');
          return res.data;
        case 1004:
          console.log('认证信息过期');
          store.addOverdu({ callback : ()=>{ this.request(res.config) } });     
          return res.data;
        default:
          return res.data;
      }
    }, err => {
      const errCode = err.data.code;
      return Promise.reject(err.data);
    });
  }



  /**
   * 配置默认请求方式
   */
  getDefaultMethod(methodUrl?: string): string {
    const method = methodUrl ? methodUrl : this.method;
    return method;
  }


  /**
   * 获取token
   */
  getToken() {
    const isToken: string = localStorage.getStorage('token');
    const store = useCounterStore();
    if (!isToken) {
      /**
       * 模拟获取token loginCallback方法  重新执行1004接口
       */
      store.loginCallback();
      localStorage.setStorage('token', 'eyJ1c2VySWQiOjU0MiwidGltZXN0YW1wIjoxNjcwODI2MTY2MTE2fQ==.925e6d27b39240dee0de03e348100bf0');
    }
    return localStorage.getStorage('token');
  }



  /**
   * 
   * @param config { Object } 对象
   * @returns Promise
   */
  request(config: AxiosRequestConfig) { 
    return this.instance({
      url: config.url,
      method: this.getDefaultMethod(config.method),
      params: config.data
    })
  }
}


export const http = new httpRequestClass()