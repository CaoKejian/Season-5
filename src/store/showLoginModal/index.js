export default{
    namespaced:true,
    state: {
        // 登陆模态窗口的显示 隐藏
      isShowLoginModal:false,
    },
    mutations: {
        // 修改isshowLoginModal
      chanIsShowLoginModal(state,payload){
        state.isShowLoginModal =payload
      }

    },
    actions: {
    },
}