import axios from 'axios'

// 创建 axios 实例
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  //3.发送真正的网络请求
  return instance(config)
}

// const request = axios.create({
//   // API 请求的默认前缀
//   baseURL: 'http://192.168.1.161:8888/',
//   timeout: 1000 // 请求超时时间
// })
// // 添加请求拦截器，在请求头中加token
// axios.interceptors.request.use(
//   config => {
//     if (localStorage.getItem('Authentication')) {
//       config.headers.Authorization = localStorage.getItem('Authentication');
//     }
//
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   });
