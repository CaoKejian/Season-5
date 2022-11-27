<template>
  <div class="wrapper">
    <div class="center">
      <div class="all">
        <div v-show="!cartData.length==0">
          <input type="checkbox">
          <span>全选</span>
        </div>
      </div>
      <div class="shopcard" v-show="!cartData.length==0">
          <ul >
            <li v-for="(item,index) in cartData" :key="index">
              <input type="checkbox" v-model="cartData.checked">
              <div class="goodsdetails">
                <img :src="item.img" alt="">
                <div class="details">
                  <span class="detailsname">{{item.name}}</span>
                  <span class="ml">规格： {{item.ml}}ml</span>
                  <span class="bold">￥ {{item.price}}</span>
                </div>
              </div>
             <span class="num">数量：{{totalMount}}</span>
              <Add class="Add"
                :id='Number(item.id)'
                :totalMount='item.totalMount'
                :price="item.price"
              ></Add>
              <span class="count">￥ {{  item.price*totalMount }}</span>
            </li>
          </ul>
      </div>
      <div class="shopcreate" v-show="cartData.length==0">
        <img src="@/assets/img/noorders.png" alt="">
        <br>购物车空空如也
      </div>
      <div>
        <div class="fake"></div>
        <div class="computed">
          <div class="allprice">共计：<span>{{totalPrice}}</span>元</div>
          <div class="button">
            <button @click="reduce()">删除</button>
            <button>付款</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/utils/bus"
import details from './Details.vue'
import shujv4 from '@/static/data.json'
import Add from '../components/shop/add.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name:'Shopcart',
  data(){
    return{
    }
  },
  components:{
    Add
  },
  methods:{
    reduce(){
      if(!this.cartData){
        this.cartData = this.cartData.splice(0,1)
      }else{
        this.asyncChanIsShowToast({
          msg:'购物车里没有更多商品啦',
          type:'danger'
        })
      }
    },
    ...mapActions({
      asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast"
    })
    // async goodsSearch(){
    //   var datas = await shujv4;
    //   let id=this.$route.query.id
    //   this.cartarr=datas
    //   this.cartarr = this.cartarr.filter((item)=>item.id==id)
    // }
    // ····················1、现在只有一个数据能加载购物车里
    // ····················2、保存在本地数据里...是一种方法但是需要逻辑
  },
  computed:{
    // ·····························vuex始终接不到详情页给的数据 
    ...mapState({
      totalPrice:state=>state.addcart.totalPrice,
      cartData:state=>state.addcart.cartData,
      totalMount:state=>state.addcart.totalMount
    })    
  },
  created(){
    // this.goodsSearch()
  },
  mounted(){
    // bus.$emit('name',(productId)=>{
    //   console.log(productId);
    // })
    this.$store.dispatch('setData')
  },
  updated(){
      localStorage.setItem('totalMount',this.totalMount)
      localStorage.setItem('totalPrice',this.totalPrice)
      localStorage.setItem('cartData',JSON.stringify(this.cartData))
    },
  }
</script>

<style lang="less" scoped>
.wrapper{
  width: 100%;
  // height:100vh;
  background: #000;
  .center{
    width: 85%;
    margin: 0 auto;
    height:100%;
    display: flex;
    flex-direction: column;
    .all{
      margin-top: 100px;
      div{
        float: left;
        display: flex;
        justify-content: space-around;
        margin: 10px 0px;
        input{
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
        
        span{
          margin-left: 10px;
          font-size: 20px;
          color: #817F7D;
        }
      }
    }
    .shopcard{
      width: 100%;
      height: 65vh;
      max-height:65vh ;
      overflow: scroll;
      border-top: 1px solid #D8D8D8;
      border-bottom: 1px solid #D8D8D8;
      padding-top: 10px;
      ul{
        width: 100%;
        border-bottom: 1px solid #8f8c8c;
        li{
          display: flex;
          padding: 10px 0;
          justify-content: space-between;
          input{
            width: 24px;
            line-height: 50px;
            height: 24px;
            cursor: pointer;
            margin-top: 50px;
          }
          .goodsdetails{
            width: 380px;
            display: flex;
            justify-content: space-between;
            img{
              width: 40%;
              height: 90%;
              margin-right: 20px;
              box-shadow: 20px 20px 10px #5D5B5B;
            }
          }
          .details{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-top: 30px;
            height: 150px;
            color: #fff;
            .detailsname{
                float: left;
                max-width: 230px;
                overflow: hidden;
            }
            .ml{
              width: 110px;
            }
            span{
              float: left;
              display: block;
            }
            .bold{
              color: #9C0404;
              width: 90px;
              font-size: 18px;
            }
          }
          .num{
            user-select: none;
            height: 20px;
            margin: auto 0;
            color: #fff;
          }
          .count{
            user-select: none;
            display: block;
            height: 20px;
            margin: auto 0;
            color: #fff;
          }
          .Add{
            margin: auto 0;
            transform: translateY(-20%);
          }
        }
      }
      img{
        width: 200px;
      }
      add{
        width: 80%;
        height: 200px;
      }
    }
    .shopcreate{
      width: 100%;
      height: 65vh;
      font-size: 50px;
      color:#767676;
      padding: 10% 0;
      font-size: 30px;
      img{
        width: 100px;
        border-radius: 20px;
        margin-bottom: 30px;
      }
    }
    .computed{
      width: 450px;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      float: right;
      .allprice{
        margin: 20px 150px 0 0;
        color: #fff;
        span{
          color: #9c0404;
          font-size: 24px;
        }
      }
      .button{
        width: 300px;
        display: flex;
        justify-content: space-between;
        margin-left: 115px;
        button{
          width: 128px;
          height: 44px;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          user-select: none;
        }
        button:nth-child(1){
          background: #9C0404;
        }
        button:nth-child(2){
          background: #A8784C;
        }
      }
    }
  }
}
.addjian{
  width: 80px;
  height: 20px;
  font-size: 28px;
  display: flex;
  line-height: 28px;
  justify-content: space-between;
  div{
    color: #fff;
  }
  div:nth-child(2){
    display: block;
    width: 40%;
    border: 1px solid #9C0404;
    background: #9C0404;
  }
  div:nth-child(1){
    margin-bottom: 15px;
  }
}
th{
  color: #fff;
}
</style>