import axios from 'axios'

// 创建请求实例
export const request = axios.create({
  // 请求基本地址
  baseURL: process.env.VUE_APP_BASE_API,
  // 请求超时时间
  timeout: 30000
})

// 请求拦截
request.interceptors.request.use(config => {
  return config
}, error => {
  // 打印错误日志
  console.log(error)
  return Promise.reject(error)
})

// 响应拦截
request.interceptors.response.use(response => {
  return response;
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default request