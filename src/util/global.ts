/**
 * 该文件主要为全局挂载方法
 */




/**
 * 本地存储
 */
import { localStorage } from "./storage";
import { toRaw } from "vue";



/**
 * 序列化proxy参数
 */
const serializationParams = (params : any) => {
  if(!params){
    return
  };

  return toRaw(params);
}



export default {
  install: (app: any) => {
    app.config.globalProperties.$storage = localStorage;
    app.config.globalProperties.$toRaws = serializationParams;
  }
}