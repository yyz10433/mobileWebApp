import { http } from "../axios/axios";

/**
 * 用户信息
 */
export const getUesrInfo: Function = () => {
  return http.request({
    url: 'mc/dict/findByKey?key=send_order_templte',
    method: 'get',
  })
}


/**
 * 等级
 */
export const getMilkList: Function = () => {
  return http.request({
    url: 'milk/shop/rights/find/milk/right',
    method: 'get',
  })
}


/**
 * 分类
 */
export const getCategroy: Function = (data: any) => {
  return http.request({
    url: 'mc/user/juice/warehouse/detail-v1',
    method: 'get',
    data
  })
}