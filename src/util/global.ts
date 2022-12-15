/**
 * 该文件主要为全局挂载方法
 */




/**
 * 本地存储
 */
import { localStorage } from "./storage";



export default {
  install: (app: any) => {
    app.config.globalProperties.$storage = localStorage;
  }
}