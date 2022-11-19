<template>
  <div id="app">
    <Topbar :key="topbarKeyValue"></Topbar>
    <Login v-show="isShowLoginModal"></Login>
    <router-view v-if="isRouterAlive"></router-view>
    <transition name="fade">
      <Toast v-show="isShowToast"></Toast>
    </transition>
    <Return></Return>
    <Footer></Footer>
  </div>
</template>

<script>
import Topbar from "./components/Topbar.vue";
import Footer from "./components/Footer.vue";
import Login from "./components/Login";
import Toast from "./components/Toast";
import Return from './components/Return.vue'

import { mapState } from "vuex";

import "@/assets/css/global.less";

export default {
  data() {
    return {
      topbarKeyValue: 1,
      isRouterAlive:true,
    };
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  method: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
  watch: {
    "$route.path": {
      handler() {
        // 利用key属性的值发生改变 重载组件
        this.topbarKeyValue++;
      },
    },
  },
  computed: {
    ...mapState({
      isShowLoginModal: (state) => state.showLoginModal.isShowLoginModal,
      isShowToast: (state) => state.toastStatus.isShowToast,
    }),
  },
  components: {
    Topbar,
    Footer,
    Login,
    Toast,
    Return,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
