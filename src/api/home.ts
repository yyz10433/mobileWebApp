import { http } from "../axios/axios";

/**
 * 获取用户信息
 */
export const getUesrInfo: Function = () => {
  return http.request({
    url: '/getUserInfo',
    method: 'get',
  })
}


/**
 * 获取token
 */
export const getMilkList: Function = () => {
  return http.request({
    url: '/getUesrToken',
    method: 'get',
  })
}


/**
 * 获取分类信息
 */
export const getCategroy: Function = () => {
  return http.request({
    url: '/getUesrInfo',
    method: 'get',
  })
}