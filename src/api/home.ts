import { http } from "../axios/axios";

/**
 * 字典表
 */
export const getUesrInfo: Function = () => {
  return http.request({
    url: '/tableDataOne',
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
 * 获取用户信息
 */
export const getCategroy: Function = () => {
  return http.request({
    url: '/getUesrInfo',
    method: 'get',
  })
}