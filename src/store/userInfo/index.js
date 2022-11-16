import { UserProfilesAPI } from '../../request/api'
export default{
    namespaced:true,
    state: {
        // 购物车数量
        cartTotal:0,
        // 用户信息
        userInfo:{
            headImg:require('../../assets/img/close.png'),
        }
    },
    mutations: {
        chanUserInfo(state,payload){

            state.cartTotal = payload.cartTotal
            state.userInfo = payload.userInfo
        },
        initUserInfo(state){
            state.cartTotal = 0
            state.userInfo = {
                headImg: require("@/assets/img/close.png")
              }
        }
    },
    actions: {
       async asyncChanUserInfo({commit}){
        let userInfoRes = await UserProfilesAPI()
        commit('chanUserInfo',userInfoRes.data)
       } 
    },
}