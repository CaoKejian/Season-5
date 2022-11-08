export default{
    namespaced:true,
    state: {
        //提示框状态
      isShowToast:false,
      msg:'',
      type:""
    },
    mutations: {
        // isShowToast提示框
      chanIsShowToast(state, payload){
        state.isShowToast = payload.isShow;
        state.msg = payload.msg;
        state.type = payload.type;
      }

    },
    actions: {
    // 要用到提示框直接调用这个方法  asyncChanIsShowToast
      asyncChanIsShowToast(state,payload) {
        state.commit('chanIsShowToast', {
          isShow: true,
          msg: payload.msg,
          type: payload.type
        })
        setTimeout(() => {
          state.commit('chanIsShowToast',{
            isShow: false,
            msg: payload.msg,
            type: payload.type
          });
        }, 1500)
      }
    },
}