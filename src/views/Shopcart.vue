<template>
  <div class="wrapper">
    <div class="center">
      <div class="all">
        <div>
          <input type="checkbox">
          <span>全选</span>
        </div>
      </div>
      <div class="shopcard">
          <ul >
            <li v-for="(item,index) in cartarr" :key="index">
              <input type="checkbox">
              <img :src="item.img" alt="">
              <div class="details">
                <span class="detailsname">{{item.name}}</span>
                <span class="ml">规格： {{item.ml}}ml</span>
                <span class="bold">￥ {{item.price}}</span>
              </div>
              <span class="count">￥ {{  item.price }}</span>
              <add class="add" :count="count"></add>
            </li>
          </ul>
        
      </div>
      <div>
        <div class="fake"></div>
        <div class="computed">
          <div class="allprice">共计：<span>123</span>元</div>
          <div class="button">
            <button>删除</button>
            <button>付款</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import add from '@/components/shop/add.vue'
import bus from "@/utils/bus"
import details from './Details.vue'
import shujv4 from '@/static/data.json'
import {mapState,mapGetters} from 'vuex'

export default {
  name:'Shopcart',
  data(){
    return{
      count:1,
      cartarr:[],
    }
  },
  components:{add},
  methods:{
    // name(){
    //   let v = details.props.abc.default()
    //   console.log(v);
    //   let params = {
    //     id:this.$route.query.id,
    //   }
    // },
    async goodsSearch(){
      var datas = await shujv4;
      let id=this.$route.query.id
      this.cartarr=datas
      this.cartarr = this.cartarr.filter((item)=>item.id==id)
    }
    // ····················1、现在只有一个数据能加载购物车里
    // ····················2、保存在本地数据里...是一种方法但是需要逻辑
  },
  computed:{
    // ·····························vuex始终接不到详情页给的数据 
    // ...mapState({
    //   cartarr:state=>state.cartarry
    // }),
    
  },
  created(){
    this.goodsSearch()
  },
  mounted(){
    // bus.$emit('name',(productId)=>{
    //   console.log(productId);
    // })
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
        margin: 10px 50px;
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
        width: 80%;
        margin: 0 auto;
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
          .count{
            user-select: none;
            display: block;
            height: 20px;
            margin: auto 0;
            color: #fff;
          }
          .add{
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