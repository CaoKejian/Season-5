import Vue from 'vue'
import Vuex from 'vuex'
import showLoginModal from './showLoginModal'
import toastStatus from './toastStatus'
import loginStatus from './loginStatus'
import userInfo from './userInfo'
import addcart from './addcart'
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    showLoginModal,loginStatus,toastStatus,userInfo,addcart
  }
})
