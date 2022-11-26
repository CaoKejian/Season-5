<template>
  <div class="shopcart">
    <div class="small">
      <div>
        <img src="@/assets/img/购物车.png" alt=""><span v-show="cartData.length==0">暂无商品</span><span v-show="cartData.length!==0">购物车</span>
      </div><hr>
    </div>
    <div v-show="cartData.length!==0" class="shopsmall">
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
    <div class="computed" v-show="cartData.length!==0">
      <div class="allprice">共计：<span>{{totalPrice}}</span>元</div>
      <div class="button">
        <button @click="reduce()">删除</button>
        <button>付款</button>
      </div>
    </div>
    <div v-show="cartData.length==0" class="none">
      <img src="@/assets/img/noorders.png" alt="">
    </div>
  </div>
</template>

<script>
import Add from '@/components/shop/add.vue'
import { mapState } from 'vuex'
export default {
  data(){
    return{
      isShowcart:true
    }
  },
  components:{
    Add
  },
  computed:{
    // ·····························vuex始终接不到详情页给的数据 
    ...mapState({
      totalPrice:state=>state.addcart.totalPrice,
      cartData:state=>state.addcart.cartData,
      totalMount:state=>state.addcart.totalMount
    })    
  },
  mounted(){
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
.none{
  margin: auto auto;
  width: 300px;
  height: 300px;
  padding: 100px;
  img{
    width: 40%;
  }
}
hr{
  width: 90%;
  margin: auto;
  background: #1a1a1a;
}
.small{
  flex-grow: 1;
  width: 90%;
  margin: 0 auto;
  div{
    margin: 40px 0 0 30px;
    float: left;
    img{
      margin-right: 30px;
      width: 25px;
    }
  }
}
.shopsmall{
  height: 50vh;
  overflow: scroll;
  ul{
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    li{
      padding: 10px;
      display: flex;
      justify-content: space-between;
      img{
        width: 80px;
        margin-right: 10px;
        box-shadow: 10px 10px 0px #5D5B5B;

      }
      .goodsdetails{
        width: 40%;
        display: flex;
        justify-content: start;
        .details{
          display: flex;
          flex-direction: column;
          padding: 10px 0;
        }
      }
      .num{
        margin: auto 0;
      }
      .Add{
        margin: auto 0;
      }
      .count{
        margin: auto 0;
      }
    }
  }
}
.computed{
  width: 40%;
  float:right;
  color: white;
  display: flex;
  flex-direction: column;
  .allprice{
    margin: 0px 200px 30px 0;
      color: #fff;
      span{
        color: #9c0404;
        font-size: 24px;
      }
  }
  .button{
    width: 280px;
    display: flex;
    justify-content: space-between;
    button{
      width: 108px;
      height: 34px;
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
</style>