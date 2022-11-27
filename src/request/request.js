import axios from 'axios'
import store from "@/store"

// instance 实例 对象
const instance = axios.create({
  baseURL: "/api",
  timeout: 5000
})

// 主要有两个东西: 请求拦截器,  响应拦截器
instance.interceptors.request.use(config => {

  
  let token = localStorage.getItem("x-auth-token");
  if (token) {
    // 就在请求头中携带token
    config.headers["x-auth-token"] = token;
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {

  let res_data = res.data
  if (res_data.code != 0 && res_data.code != 400 && res_data.code!=407) {
    // 业务上的是失败
    store.dispatch("toastStatus/asyncChanIsShowToast", {
      msg: res_data.message,
      type:"danger"
    })
    return false
  }
  return res_data
}, err => {
  // 请求的失败
  // 相当于我们在组件中,发送请求之后的那个catch方法
  store.dispatch("toastStatus/asyncChanIsShowToast", {
    msg: err,
    type: "danger"
  })
  return Promise.reject(err);
})

export default instance