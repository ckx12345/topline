import request from '../utils/request.js' // 引入axios 这个是所有的接口文档 分别导出不同的接口

// 登陆
/**
 *登陆提交服务器数据。mobile code
 */
export const login = ({ mobile, code }) => {
  // 返回一个promise对象
  return request.post('/app/v1_0/authorizations', { mobile, code })
}
