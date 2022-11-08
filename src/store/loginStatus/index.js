export default{
    namespaced:true,
    state: {
        // 登陆模态窗口的显示 隐藏
      isLogined:localStorage.getItem('x-auth-token')?true:false,
    },
    mutations: {
        // 修改ishowLogin
      chanIsLogined(state,payload){
        state.isLogined =payload
      }

    },
    actions: {
    },
}