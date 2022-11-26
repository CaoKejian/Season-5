<template>
  <div class="user">
    <div class="userwrapper">
      <div class="userinfo">
        <div class="username">
          <img :src="userInfo.headImg" alt="">
          <h3>{{userInfo.nickName}}</h3>
        </div>
        <div class="userbigcard">
          <div class="xuanxiangka" @click="changeshow(index)" :class="num1==index?'active':''" v-for="(item,index) in cardarr" :key="index">
            <ul>
              <li><img class="viewimg"  :src="item.img" alt=""> <span class="view" style="color:white">{{item.name}}</span></li>
            </ul>
          </div>
        </div>
        <div class="userexit"><button @click="loginOutFn">退出登录</button></div>
      </div>
      <div class="usercard">
        <div>
          <tz v-show="num1==0"></tz>
          <shopcart v-show="num1==1"></shopcart>
          <order v-show="num1==2"></order>
          <userinfo v-show="num1==3"></userinfo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tz from './four/tongzhi.vue'
import shopcart from './four/shopcart.vue'
import order from './four/orders.vue'
import userinfo from './four/userinfo.vue'
import store, { mapActions, mapMutations, mapState } from 'vuex'
export default {
  data(){
    return {
      cardarr:[
        {img:require('../assets/img/tongzhi.png'),name:'我的通知'},
        {img:require('../assets/img/shopcart.png'),name:'购物车'},
        {img:require('../assets/img/dingdan.png'),name:'我的订单'},
        {img:require('../assets/img/xinxi.png'),name:'个人信息'},
      ],
      num1:0,
    }
  },
  components:{
    tz,shopcart,order,userinfo
  },
  methods:{
    changeshow(idnex){
      this.num1 = idnex
  
    },
    loginOutFn(){
      localStorage.removeItem('x-auth-token')
      setTimeout(()=>{
        this.$router.push('/home')
      },1500)
      this.asyncChanIsShowToast({
        msg:'您已退出',
        type:'success'
      })
    },
    ...mapActions({
        asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast",
    })
  },
  computed:{
    ...mapState({
      userInfo:state=>state.userInfo.userInfo
    })
  },
  beforeRouteEnter (to, from, next) {
    let token = localStorage.getItem("x-auth-token")
    if(token){
      next()
    }
    }
  }

</script>

<style lang="less" scoped>
.user{
  width: 100%;
  height: calc(100vh - 102px);
  background: #000;
}
.userwrapper{
  width: 70%;
  height: calc(100vh - 182px);
  margin: auto auto;
  position: relative;
  top: 80px;
  display: flex;
  justify-content:space-between;
}
.userinfo{
  width: 20%;
  background: #5b5a5a;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.username{
  flex-grow: 1;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3{
    color: #fff;
    font-weight: normal;
    margin-top: 5px;
  }
  img{
      width: 50%;
      margin: auto;
    }
}
.userbigcard{
  height: 50px;
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  cursor: pointer;
  user-select: none;
  padding: 20px 0;
  .xuanxiangka{
    height: 50px;
    ul{
      height: 100%;
      li{
        float: left;
        line-height: 50px;
        margin-left: 25%;
        // width: 100%;
        // height: 100%;
        img{
          margin-right: 20px;
          width: 15px;
        } 
      }
    }
  }
}
.active{
    background: #a8784c;
    transition: all .5s;
}
.userexit{
  flex-grow: 1;
  button{
    background: #9c0404;
    border:none;
    color: white;
    cursor: pointer;
    width: 80px;
    height: 30px;
    border-radius: 3px;
  }
}
.usercard{
  width: calc(80% - 10px);
  background: #b0b0b0;
}
@media screen and (max-width:1200px) {
  .view{
    display: none;
  }
  .viewimg{
    position: relative;
    left: 50%;
    transform: scale(2);
  }
  .userinfo{
    min-width: 100px;
  }
}
</style>