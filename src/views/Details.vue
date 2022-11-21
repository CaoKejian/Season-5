<template>
  <div class="wrapper">
    <div class="container">
        <div class="leftbar">
            <div class="return" >
                <img @click="returnGo()" src="@/assets/img/return.png" alt="">
            </div>
            <div class="text">
                <div class="goodid" >
                    <img :src="showPic" alt="">
                    <div class="context">
                        <h3>{{name}}</h3>
                        <h3>酒精浓度： {{cale}}%</h3>
                        <h3>规格： {{ml}}ml</h3>
                        <br>
                        <b>￥ {{price}}</b>
                        <hr>
                        <span>
                            {{describe}}
                        </span>
                        <div class="shopcartadd">
                            <div @click="stepFn(-1)">-</div>
                            <div class="bujinqi" v-model="stepNum">{{count}}</div>
                            <div @click="stepFn(1)">+</div>
                        </div>
                        <div class="addshopcart">
                            <button @click="addToCart">加入购物车</button>
                            <button>立即购买</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightbar">
            <div class="suggest">
                <h3>相关推荐</h3>
                <ul>
                    <li v-for="(sug,index) in suggestarr" :key="index" v-if="index<3">
                        <img :src="sug.img" alt="">
                        <span>{{sug.name}}</span><br>
                        <span class="sales">销量：{{sug.sales}}</span>
                        <br>
                        <b>￥ {{sug.price}}</b>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="curlture">
        <hr>
        <div class="card">
            <button :class="!isShowIssue?'active':''" @click="isShowIssue=false">商品详情</button>
            <button :class="isShowIssue?'active':''" @click="isShowIssue=true">相关问题</button>
        </div>
        <div class="detail" v-show="!isShowIssue">
            <img src="@/assets/img/detail.jpg" alt="">
        </div>
        <div class="issue" v-show="isShowIssue">
                    <!-- 常见问题的内容盒子 -->
            <h4>兑换后运费如何收取？</h4>
            <p>
                商城内大部分实物产品均可包邮，也支持上门自提。虚拟产品则无需运费，可在兑换后直接使用。
            </p>
            <p class="mb20">
                （注：新疆，西藏，内蒙古，青海，海南，宁夏暂不支持包邮，在此地区兑换商品需提前与客服确认运费。）
            </p>
            <h4>如何申请退换货？</h4>
                <p>所有产品均为鸡腿兑换礼品，无质量问题不支持退换货；</p>
                <p>如因喜好不同，或到货后后悔等原因，不支持退货；</p>
                <p>因客户原因如联系方式有误、电话停机、不接电话、无理由拒收等造成快件无法正常签收的情况，叩丁狼均不进行补发或赔付；</p>
                <p>如因质量问题需要退货，将由客服人员与客户联系，确认邮寄地址与流程。退回物品不得有人为损坏或使用痕迹，否则拒绝退换；</p>
                <p class="mb20">如顾客选择自行寄回商品，请先垫付运费，到货验证商品后，叩丁狼将以鸡腿发放形式为用户报销运费，不接受单方面到付件。</p>
                <h4>如何开具发票？</h4>
                <p>叩丁狼积分商城产品均为定制礼品，使用积分兑换的产品均不支持开票。</p>
                <h4>关于鸡腿价格问题</h4>
                <p class="mb20">因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺兑换。</p>
                <h4>联系我们</h4>
                <p>www.wolfcode.cn</p>
                <p class="mb20">微信公众号搜索“叩丁狼”</p>
        </div>
    </div>
  </div>
</template>

<script>
import shujv3 from '@/static/data.json'
import {GoodsDetailsAPI} from '@/request/api'
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            suggestarr:[],
            showPic:[],
            isShowIssue:false,
            name:'',
            cale:'',
            ml:'',
            price:'',
            describe:'',
            count:1,
            sales:"",
        }
    },
    methods:{
        ...mapActions({
            asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast"
        }),
        returnGo(){
            this.$router.go(-1)
        },
        async addToCart(){
            let productId = this.$route.query.id
            this.asyncChanIsShowToast({
                type:"success",
                msg:"加入购物车成功 !"
            })
        },
        stepFn(val){
            if(val==-1&&this.count<=1){
                this.asyncChanIsShowToast({
                type:"danger",
                msg:"加入发生错误"
                }) 
            return
            }
            this.count+=val
        },
        async goodsSearch(){
            var datas = await shujv3;
            this.suggestarr = datas;
            let goodId = this.$route.query.id //8
            // ············通过id的查找索引出现问题 待解决····································
            let index = this.suggestarr.findIndex((item)=>item.id==goodId);
            // console.log(typeof index);
            // console.log("goodId:",goodId);
            this.show = this.suggestarr[index]
            this.showPic = this.suggestarr[index].img
            this.name = this.show.name
            this.price = this.show.price
            this.describe = this.show.describe
            this.cale = this.show.alcohol
            this.ml = this.show.ml
            this.sales = this.show.sales
        },
    },
    created(){
        this.goodsSearch()
    },
}
</script>

<style lang="less" scoped>
@media only screen and (max-width: 1320px) {
    li b,li span{
        display: none;
    }
    .goodid >{
        display: none;
    }
}
.wrapper{
    width: 100vw;
    background: #000;
    .container{
        width: 90%;
        margin: 0 auto;
        padding: 150px 0;
        background:black;
        display: flex;
        justify-content: space-between;
        .leftbar{
            display: flex;
            flex-direction: column;
            width: 85%;
            .return{
                width: 130px;
                height: 40px;
                margin-bottom: 50px;
                img{
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
            }
            .text{
                width: 100%;
                .goodid{
                    width: 70%;
                    padding: 20px 20px;
                    display: flex;
                    justify-content: space-between;
                    img{
                        border-radius: 20px;
                        width: 400px;
                        box-shadow: 0 0 10px #fff;
                        height: 500px;
                        float: left;
                    }
                    .context{
                        width: 40vw;
                        display: block;
                        display: flex;
                        padding-top: 10px;
                        flex-direction: column;
                        align-items:flex-start;
                        padding-left: 40px;
                        // padding: 10px 300px 10px 80px;
                        h3{
                            color: #fff;
                            display: block;
                            margin-top: 20px;
                            font-size: 22px;
                            width: 350px;
                            text-align-last: left;
                            letter-spacing: normal;
                            flex-grow: 1;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-spacing: nowrap;
                            span{
                                border: none;
                                float: right;
                            }
                        }
                        b{
                            flex-grow: 1;
                            color: red;
                            font-size: 20px;
                            margin-bottom: 10px;
                            font-size: 32px;
                        }
                        span{
                            width: 500px;
                            flex-grow: 5;
                            text-indent: 2em;
                            display: block;
                            color: #7C7979;
                            width: 100%;
                            letter-spacing: 1px;
                            text-align-last: left;
                            padding-top: 20px;
                            border-top: 2px solid #BEB09B;
                        }
                        .shopcartadd{
                            display: flex;
                            justify-content: space-around;
                            width: 100px;
                            height: 30px;
                            border: 1px solid #beb09b;
                            margin-top: 30px;
                            user-select: none;
                            div{
                                color: rgb(204, 197, 197);
                                font-size: 50px;
                                line-height: 30px;
                                cursor: pointer;
                                &:nth-child(1){
                                    position: relative;
                                    padding: 0 3px;
                                    top: -5px;
                                }
                                &:nth-child(2){
                                    font-size: 18px;
                                }
                            }
                            .bujinqi{
                                width: 28px;
                                height: 30px;
                                border-left: 1px solid #beb09b;
                                border-right: 1px solid #beb09b;
                            }
                        }
                        .addshopcart{
                            position: relative;
                            left: 130px;
                            bottom: 40px;
                            button{
                                width: 150px;
                                margin-right: 10px;
                                height: 50px;
                                cursor: pointer;
                                user-select: none;
                                color: white;
                                font-size: 18px;
                                &:nth-child(1){
                                    background-color: #beb09b;
                                }
                                &:nth-child(2){
                                    background-color: #9c0404;
                                }
                            }

                        }
                    }
                }
            }
        }
        .rightbar{
            height:800px ;
            width: 55%;
            .suggest{
                height: 100%;
                background: rgb(235, 128, 128);
                margin: 30px  0;
                margin-right: 50px;
                float: right;
                display: flex;
                flex-direction: column;
                border-radius: 20px;
                background: linear-gradient(to bottom, #D8B786 20%, #97805e 78%, #000000 );
                h3{
                    color: #892F2F;
                    font-weight: normal;
                    font-size: 24px;
                    margin-bottom: 60px;
                    position: relative;
                    top: 20px;
                }
                ul{
                    width: 80%;
                    height: 90%;
                    flex-grow: 1;
                    margin: 0 auto;
                    // float: left;
                    display: flex;
                    flex-direction: column;
                    text-indent: -13px;
                    text-align-last: left;
                    li{
                        cursor: pointer;
                        margin-bottom: 60px;
                        user-select: none;
                        img{
                            // width: 40%;
                            width: 150px;
                            float: left;
                            margin-right: 20px;
                        }
                        span{
                            font-size: 20px;
                            margin-left: 10px;
                            // position: relative;
                            font-weight: bold;
                        }
                        .sales{
                            position: relative;
                            top: 20px;
                            color: rgb(66, 66, 66);
                            font-size: 18px;
                            float: left;

                        }
                        b{
                            position: relative;
                            top: 40px;
                            color: #9C0404;
                            left: 10px;
                            font-size: 24px;
                            float: left;
                        }
                    }
                }
            }
        }
    }
    .curlture{
        width: 88%;
        margin: 0 auto;
        hr{
            background: #D8D8D8;
            height: 1px;
            border: none;
        }
        .card{
            width: 100%;
            height: 40px;
            button{
                width: 150px;
                height: 40px;
                font-size: 20px;
                color: black;
                background:#BEB09B;
                float: left;
                border: none;
                margin-right: 15px;
            }
            .active{
                background: #9c0404;
                color: white;
            }
        }
        .detail{
            padding: 40px 0;
        }
        .issue {
            padding-bottom: 40px;
            color: #fff;
            width: 88%;
            height: 500px;
            padding-top: 40px;
            h4 {
 
                }
            p{
            }
        }
    }
}

</style>