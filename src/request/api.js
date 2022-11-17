import instance from "./request"
import qs from "qs"
// 这个文件用来统一管理项目中所有的api链接
// 发送短信验证码请求
export const SendSMSAPI = (params) => instance.post("/sendSMS", qs.stringify(params))


//手机号验证码登录(含注册)
export const PhoneLoginAPI = (params) => instance.post("/phoneRegin", qs.stringify(params))


// 微信扫码登录请求
  
export const WeixinLoginAPI = (params) => instance.post("/wechatUsers/PCLogin", qs.stringify(params))


// 手机号绑定微信的登录
export const BindPhoneAPI = (params) => instance.post("/wechatUsers/binding", qs.stringify(params))


// 获取登录用户信息
export const UserProfilesAPI = () => instance.get("/shop/userProfiles")

