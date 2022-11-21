<template>
  <div class="topbar">
    <div class="all">
        <div class="logoimg">
            <a href="#"></a>
        </div>
        <div class="rightbar"> 
            <ul class="rightul" @click="hdClick()">
                <li @click="$router.push('/home')"><i class="iconfont icon-shouye"></i><span>首页</span></li>
                <li @click="$router.push('/goods')"><i class="iconfont icon-31quanbushangpin"></i><span>全部商品</span></li>
                <li @click="$router.push('/user')"><i class="iconfont icon-gerenzhongxin"></i><span>个人中心</span></li>
                <li @click="$router.push('/shopcart')"><i class="iconfont icon-gouwuche"></i><span>购物车</span></li>
                <li>
                    <button v-show="!isLogined" class="login" @click="chanIsShowLoginModal(true)">登陆 - login</button>
                    <div class="input-img" v-show="isLogined">
                        <img :src='userInfo.headImg' alt="">
                    </div>
                </li>
                    
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState,mapActions} from 'vuex'
import {WeixinLoginAPI} from '../request/api'
export default {
    name:'Top',
    data(){
      return{

      }
    },
    watch:{
        "$route.path":{
            handler(newval,oldval){
                let mytoken = localStorage.getItem("x-auth-token")
                this.chanIsLogined(Boolean(mytoken))

                if(mytoken){
                    this.asyncChanUserInfo()
                }else{
                    this.initUserInfo()
                }
            }
        }
    },
  created(){
    
      // 有可能在创建的时候还拿不到code,所以等页面所有工作准备完毕之后再去获取这个code
      setTimeout(async ()=>{
        
        // 判断地址栏有没有code
        let mycode = this.$route.query.code
        console.log("code",mycode);
        
        if(mycode){

          // 发起微信扫码登录的请求
          let res = await WeixinLoginAPI({
            code:mycode
          })

          // 针对这3种情况做不同的处理
          if(res.code==0){
            // 微信扫码登录成功
            // 1 提示登录成功
            this.asyncChanIsShowToast({
              msg:"登录成功!",
              type: "success"
            });
            // 3 保存token值
            localStorage.setItem("x-auth-token", res["x-auth-token"])
            // 4 登录状态的切换 (登录成功之后,要显示昵称,头像, 购物车按钮...)
            this.chanIsLogined(true);
       
            // 登录成功之后,地址栏上的code
            this.$router.push(this.$route.path)

            // 登录成功,发送获取用户信息的请求
            this.asyncChanUserInfo()
            
          }else if(res.code==400){
            // code 失效的情况

            // 1 提示用户重新扫二维码
            this.asyncChanIsShowToast({
              msg:"code失效,请重新扫码登录",
              type:"warning"
            })
            // 2 把登录框打开
            this.chanIsShowLoginModal(true);
          }else if(res.code==407){
            console.log(res);
            // {code: 407, message: '现在申请获取你微信绑定的手机号码', uuid: 'f3f816fc-afc3-435f-aaa0-c9ce849cf4c6'}

            // 这个微信号,在这个网上还没有绑定手机号
            // 绑定手机号. 怎么绑定手机号??
            // 就让用户重新用手机号登录,而我们的登录接口调用的应该是 手机绑定微信 的接口(带上uuid)

            // 1 提示用户手机号绑定微信
            this.asyncChanIsShowToast({
              msg:"请使用手机号绑定登录微信!",
              type:"warning"
            })
            // 2 把登录框打开
            this.chanIsShowLoginModal(true)
            // 3 保存uuid到本地存储
            localStorage.setItem("uuid", res.uuid)
          }
        }
        else{
          // 没有code的情况是什么情况??
          // 1 用户没有扫码登录的操作   或者 2 在加载这个页面的时候,用户已经是登录的了

          let mytoken = localStorage.getItem("x-auth-token");
          // 根据是否有token值来更新用户的登录状态
          this.chanIsLogined(Boolean(mytoken));
          
          if(mytoken){
            this.asyncChanUserInfo()
          }else{
            // 没有登录的情况,把用户数据初始化
            this.initUserInfo()
          }
        }
      },100)
 
  },  
    computed:{
      ...mapState({
        isLogined:state=>state.loginStatus.isLogined,
        cartTotal:state=>state.userInfo.cartTotal,
        userInfo:state=>state.userInfo.userInfo,
      })
    },
    methods:{
      ...mapMutations({
        chanIsShowLoginModal:'showLoginModal/chanIsShowLoginModal',
        chanIsShowToast:"toastStatus/chanIsShowToast",
        chanIsLogined:"loginStatus/chanIsLogined",
        initUserInfo:"userInfo/initUserInfo"
      }),
      ...mapActions({
        asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast",
        asyncChanUserInfo:"userInfo/asyncChanUserInfo"
      }),
    //   判断登陆了没
      hdClick(){
        // 封装
        let token = localStorage.getItem("x-auth-token");
        if(token){
            this.asyncChanIsShowToast({
            msg:"登录成功!!!",
            type: "success"
        });
        }
        if(!token)
          this.asyncChanIsShowToast({
            msg:"您还没有登陆",
            // 我们封装的提示框组件有3种状态
            // success 成功
            // warning 警告
            // danger 失败 
            type: "danger"
          });
        }
      },
    }

</script>

<style lang = "less" scoped>

    .topbar {
        width:100%;
        height: 80px;
        background-color: #000;
        min-width:700px ;
        position: fixed;
        z-index: 100;
        opacity: 0.7;
        box-shadow:2px 2px 10px #000;
        .all{
            display: flex;
            justify-content: space-between;
            .logoimg{
                width: 200px;
                height: 80px;
                background: url('../assets/img/se-logo.jpg') no-repeat;
                background-size: cover;
                background-position-y: 30%;
                position: relative;
                left: 3%;
                min-width: 200px;
                a{
                    display: block;
                    width: 100%;
                    height: 80px;
                }
            }
            .rightbar{
                /* width: 60%; */
                height: 80px;
                color: #fff;
                min-width: 45vh;
                position: relative;
                right: 3%;
                .rightul{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    /* overflow: hidden; */
                    display: flex;
                    justify-content: space-around;
                    i{
                        padding-right: 5px;
                    }
                    li{
                        cursor: pointer;
                        display: inline;
                        padding:0 20px;
                        font-size: 18px;
                        line-height: 80px;
                        user-select: none;
                        min-width: 6.25vw;
                        .input-img{
                            position:absolute;
                            right:10%;
                            /* top: 5px; */
                            /* line-height: 80px; */
                            img{
                                z-index: 999;
                                width: 56px;
                                border-radius: 50%;
                                height: 56px;
                                padding: 20px 0;
                            }
                        }
                    }
                    li:hover {
                        background-color: #595959;
                        transition: all .3s;
                        color: orange;
                    }
                    li:nth-last-child(1):hover{
                        background: #000;
                    }
                    li:active{
                        background: #663300;
                        transition: all .2s;
                    }
                    button{
                        width: 140px;
                        height: 40px;
                        border-radius: 35px;
                        cursor: pointer;
                        background:#c99f57;
                        color: #fff;
                        font-size: 18px;
                    }
                    button:hover{
                        background-color: #ff6666;
                    }
                    button:active{
                        background:#c54f4f ;
                    }
                    
                }
            }
        }
    }
@media screen and (max-width:1200px) {

    .rightul{
        position: absolute;
        /* background-color: pink; */
        span{
            display: none;
        }
        i{
            font-size: 40px;
        }
    }
}
</style>