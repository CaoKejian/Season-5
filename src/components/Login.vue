<template>
  <div class="login-modal">
    <div class="mask" @click="chanIsShowLoginModal(false)"></div>
    <div class="login-box">
        <h1>第五季节欢迎你<br>Welcome to SEASON-5</h1>
        <img class="close" @click="chanIsShowLoginModal(false)" src="../assets/img/close.png" alt="">
        <ul class="title">
            <li :class="isShowForm==false?'login-active':''" @click="isShowForm=false">验证码登录</li>
            <li :class="isShowForm==true?'login-active':''" @click="weixinClick">扫码登录</li>    
        </ul>
        <div class="body">
            <div class="form" v-show="!isShowForm">
                <input class="phoneput" type="" name="" placeholder="请输入手机号" v-model="phoneNumber">

                <div class="input-group">
                    <input type="" name="" placeholder="请输入验证码" v-model="SMScode" >
                    <span class="groupbtn get-code" >
                        <span v-show="isShowCount" @click="getSMScode">获取验证码</span> 
                        <span v-show="!isShowCount">{{count}}s后重新发送</span> 
                    </span>
                </div>

                <div class="userxieyi">
                    <span>同意<a href="javascript:;">用户协议</a>和<a href="javascript:;">隐私政策</a></span>
                </div>

                <button class="bodybtn" type="" @click="submitLogin"> 登陆/注册</button>
            </div>

            <div class="qrc" id="weixin" v-show="isShowForm">

            </div>

        </div>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
import {SendSMSAPI,PhoneLoginAPI,BindPhoneAPI,UserProfilesAPI} from '../request/api'
import {validatePhoneNumber} from '../utils'
export default {
    name:'Login',
    data(){
        return{
            isShowForm:false,
            phoneNumber:"",
            count:60, 
            maxcount:60,
            isShowCount:true,
            timer:null,
            SMScode:"",
        }
    },
    methods:{
      ...mapMutations({
        chanIsShowLoginModal:'showLoginModal/chanIsShowLoginModal',
        chanIsLogined:'loginStatus/chanIsLogined'
      }),
      ...mapActions({
        asyncChanIsShowToast:'toastStatus/asyncChanIsShowToast',
        asyncChanUserInfo:'userInfo/asyncChanUserInfo'
      }),
      weixinClick(){
        // 切换到二维码
        this.isShowForm = true
        // 申请二维码
        let _this = this;
        new WxLogin({
            id: "weixin",
            appid: "wx67cfaf9e3ad31a0d",  // 这个appid要填死
            scope: "snsapi_login",
            // 扫码成功后重定向的接口
            redirect_uri: "https://sc.wolfcode.cn/cms/wechatUsers/shop/PC",
            // state填写编码后的url
            state: encodeURIComponent(window.btoa("http://127.0.0.1:8080" + _this.$route.path)),
            // 调用样式文件
            href: "data:text/css;base64,Lyogd3hsb2dpbi5jc3MgKi8NCi5pbXBvd2VyQm94IC50aXRsZSwgLmltcG93ZXJCb3ggLmluZm97DQogIGRpc3BsYXk6IG5vbmU7DQp9DQoNCi8qIC5pbXBvd2VyQm94IC5xcmNvZGV7DQogIG1hcmdpbi10b3A6IDIwcHg7DQp9ICov",
        });
      },
      countDown(){
        // 专门来写倒计时
        this.timer = setInterval(() => {
            this.count--
            if(this.count==0){
                clearInterval(this.timer)
                this.count =this.maxcount
                this.isShowCount = true
            }
        }, 1000);
      },
    //   判断手机号
      verifyFn(){
            if(!validatePhoneNumber(this.phoneNumber)){
                this.asyncChanIsShowToast({
                    msg:'请输入正确的手机号',
                    type:"warning"
                })
                return false
            }
        return true
      },
      async getSMScode(){
           if(!this.verifyFn()) return

            // 发送请求
            let res = await SendSMSAPI({
                phone:this.phoneNumber
            })
            // if(res.code==0){
            //     this.isShowCount = false
            //     this.countDown()
            // }else{
            //     alert(res.message)
            // }
                // 显示倒计时还是获取验证码
            if(!res) return
            this.isShowCount = false
            this.countDown()
      },
      async submitLogin(){
        if(!this.verifyFn()) return
        if(!this.SMScode.trim()){
            this.asyncChanIsShowToast({
                    msg:'请输入正确的手机号',
                    type:"warning"
                })

            return
        }

      // 登录要根据有没有uuid的情况,发送对应的请求
      let uuid = localStorage.getItem("uuid")
      let res = null;
      if(uuid){
        // 绑定微信的登录的接口请求
        res = await BindPhoneAPI({
          verifyCode:this.SMScode.trim(),
          phone:this.phoneNumber.trim(),
          uuid
        })
      }else{
        // 做普通的手机号登录功能
        res = await PhoneLoginAPI({
          // verifyCode:this.SMScode.trim(),
          // phone:this.phoneNumber.trim()
          verifyCode:456,
          phone:15912345678
        });
  
      }

      
      if(!res)return;
      // 登录成功之后的逻辑
      // 1 提示登录成功
      this.asyncChanIsShowToast({
        msg:"登录成功!",
        type: "success"
      });
      // 2 关闭登录窗口
      this.chanIsShowLoginModal(false)
      // 3 保存token值
      localStorage.setItem("x-auth-token", res["x-auth-token"])
      // 4 登录状态的切换 (登录成功之后,要显示昵称,头像, 购物车按钮...)
      this.chanIsLogined(true);
      // console.log(res);


      // 登录成功之后,删除uuid和地址栏上的code
      if(uuid){
        localStorage.removeItem("uuid");
        this.$router.push(this.$route.path)
      }
    // 登陆成功 获取用户信息
      this.asyncChanUserInfo()
      }
    }
}
</script>

<style lang="less" scoped>
.login-modal{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
.close{
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
}
.mask{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

}
.login-box{
    background: url("https://lf3-static.bytednsdoc.com/obj/eden-cn/oveh7hpqhpqnuhbo/douyin_pc_login/login-resetpwd-bg.png") 0% 0% / 100% no-repeat rgb(255, 255, 255);
    background: #cba684;
    background-position: ;
    width: 480px;
    height:600px;
    min-width: 480px;
    min-height: 600px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    z-index:100;
}
.login-box img{
    user-select: none;
}
.login-box h1{
    color: #3d3d3d;
    font-family: PingFang SC,DFPKingGothicGB-Medium,sans-serif;
    font-size: 22px;
    font-weight: 600;
    height: 34px;
    line-height: 34px;
    letter-spacing: 1px;
    position: absolute;
    right: 0;
    left: 0;
    top: 30px;
    user-select: none;
}
.login-box .title{
    display: flex;
    justify-content:center;
    padding:130px 0;
    font-size: 18px;
    color:#2f3035;
    font-weight: 500;
    position: absolute;
    z-index: 3;
}
.login-box .title li:nth-child(1){
    margin-right: 50px;
    margin-left: 100px;
}
.login-active{
    border-bottom: 3px solid #d49962;
    transition: all .1s;
}
.login-box .title li{
    user-select: none;
    width: 90px;
    height: 57px;
    margin-left: 20px;
    line-height: 57px;
    cursor: pointer;
}
.login-box .body{
    width: 403px;
    height: 450px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 80px;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 0 1px;
}
.bodybtn{
    width: 80%;
    height: 50px;
    background-color: #d49962;
    border-color:transparent ;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform:translate(-50%);
    right: 0px;
    bottom: 40px;
    font-size: 18px;
    cursor: pointer;
}
.userxieyi{
    position: absolute;
    left: 0px;
    right: 80px;
    bottom: 100px;
}
.userxieyi span{
    font-size: 15px;
    color: #d7d7d7;
}
.userxieyi span>a{
    color: #434449;
}
.input-group{
    display: flex;
    justify-content: space-between;
    background-color: #eff0f3;
    height: 60px;
    width: 78%;
    border-radius: 5px;
    margin: 200px 45px;
}
.input-group>input{
    background-color: transparent;
    border-color: transparent;
    font-size: 15px;
    padding: 10px;
}
.input-group input::placeholder{
    color: #b5b6ba;
}
.input-group>span{
    line-height: 60px;
    position: relative;
    right: 20px;
    color: #a8784c;
    // padding-right:20px ;
    font-size: 13px;
    cursor: pointer;
    text-align: left;
    user-select: none;
}
.phoneput{
    background-color: transparent;
    border-color: transparent;
    font-size: 15px;
    // padding-left: 10px;
    background-color: #eff0f3;
    height: 60px;
    width: 73%;
    position: absolute;
    border-radius: 5px;
    left: 50%;
    transform: translate(-50%);
    top: 100px;
    border: 0;
    padding:0 10px;
    z-index: 5;
}
.phoneput::placeholder{
    color: #b5b6ba;

}
#weixin{
    display: flex;
    justify-content: center;
    margin-top: 80px;
}
</style>