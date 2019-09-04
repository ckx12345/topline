import axios from 'axios'
// 引入大数字转化工具
import JSONbig from 'json-bigint'
// 建立一个常量
const request = axios.create({
  // 设置基础端口
  baseURL: 'http://ttapi.research.itcast.cn'
})
//  大数字转化在响应前所以需要在之前就引用并安装
request.defaults.transformResponse = [function (data) {
  try {
    //   data 数据可能不是标准的数据所以需要判断一下 try 是执行 catch 是捕获到错误
    return JSONbig.parse(data)
  } catch (err) {
    //   如果出错就返回之前的值
    return data
  }
}]

// 前置请求
request.interceptors.request.use(function (config) {
  return config
},
function (error) {
  return Promise.reject(error)
})
// 后置守卫
request.interceptors.response.use(function (config) {
  return config
},
function (error) {
  return Promise.reject(error)
})
// 抛出实例
export default request
