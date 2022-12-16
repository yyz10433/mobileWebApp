/**
 * 公共接口文件 主要用于定义引用类型的响应式数据
 */


/**
 * 请求接口
 */
interface requestConfig {
  url?: String,
  params: Object,
  methods: String,
}


/**
 * 函数储存列表
 */
interface requestList {
  callback?: Function
}


/**
 * 底部tabbar
 */
interface tabbar {
  name: string,
  icon: string,
  url: string
}






export type {
  requestConfig,
  requestList,
  tabbar
}