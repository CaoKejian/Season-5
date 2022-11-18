<template>
  <div class="allgoods">
    <div class="all-topbar">
      <div class="fake"></div>
      <div class="top-right">
        <div class="main-left"></div>
        <div class="main-right">
          <div>
            <span class="select-price"
              >按价格 <i class="iconfont icon-sanjiao1"></i
            ></span>
            <ul class="paixu">
              <li @click="sortType = 1">价格升序</li>
              <li @click="sortType = 2">价格降序</li>
            </ul>
          </div>
          <div>
            <span @click="sortType = 3">按销量</i
            ></span>
          </div>
          <div class="input">
            <input
              v-model="keyWord"
              type="text"
              placeholder="请输入你所要查询的内容"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你所要查询的内容'"
            />
            <div class="input-search" @click="searchButton()"><i class="iconfont icon-sousuo"></i></div>
          </div>
        </div>
      </div>
      <div class="all-kinds">
        <div class="kinds-left">
          <div><span>年份</span></div>
          <div><span>品类</span></div>
          <div><span>价格区间</span></div>
        </div>
        <div class="kinds-line"></div>
        <div class="kinds-right">
          <div class="years">
            <ul>
              <li
                v-for="(y, index) in arrYear"
                :key="index"
                :class="num1 == index ? 'active' : ''"
                @click="yearClick(index,y.type)"

              >
                {{ y.year }}
              </li>
            </ul>
          </div>
          <div class="jiu-kinds">
            <ul>
              <li
                v-for="(n, index) in arrKinds"
                :key="index"
                :class="num2 == index ? 'active' : ''"
                @click="kindsClick(index,n.kinds)"
              >
                {{ n.name }}
              </li>
            </ul>
          </div>
          <div class="price-kinds">
            <ul>
              <li
                v-for="(k, index) in arrPrice"
                :key="index"
                :class="num3 == index ? 'active' : ''"
                @click="priceClick(index,k.rear)"
              >
                {{ k.price }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="all-showgoods">
      <div class="showgoodsImg">
        <img src="../assets/img/goods.png" alt="" />
      </div>
      <div class="showgoods">
        <div class="show-small">
          <ul v-for="(g, index) of arrimgGoods" :key="index">
            <li>
              <div><img :src="g.img" alt="" /></div>
              <b>{{ g.name }}</b
              ><br /><br />
              <span>销量：{{ g.sales }} </span>
              <b class="small-price">￥ {{ g.price }}</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="jiazai">
      <p class="">
        {{ isReachBottom ? "还在加载哦" : "已经加载全部商品啦"
        }}<span v-show="isReachBottom" class="iconfont icon-jiazai"></span>
      </p>
    </div>
  </div>
</template>

<script>
import shujv2 from "../static/data.json";
import { getScrollTop, getClientHeight, getScrollHeight } from "@/utils";
import axios from 'axios'
export default {
  inject: ['reload'], 
  data() {
    return {
      shujv2,
      sortType: 2,
      keyWord: "",
      arrYear: [
        { year: "全部",type:0 },
        { year: "2000-2010年间",type:1 },
        { year: "2010-2020年间" ,type:2},
        { year: "2020年以后", type:3},
      ],
      num1: 0,
      arrKinds: [
        { name: "全部" ,kinds:0},
        { name: "白葡萄酒" ,kinds:1 },
        { name: "红葡萄酒" ,kinds:2 },
        { name: "威士忌" ,kinds:3 },
        { name: "甜酒" ,kinds:4 },
      ],
      num2: 0,
      arrPrice: [
        { price: "全部",rear:0 },
        { price: "0-500",rear:1  },
        { price: "500-1000" ,rear:2 },
        { price: "1000-1500",rear:3  },
        { price: "1500-3000",rear:4  },
        { price: "3000以上" ,rear:5 },
      ],
      num3: 0,
      imgGoods: [],
      page:0,
      size:10,
      isLoading: false, //节流
      isReachBottom: false, //判断有数据没了
      newarr:[],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFn);
    this.newarr = shujv2;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollFn);
  },
  methods: {
    yearClick(i,type){
      this.num1=i
      console.log(type);
      if(type===0){
        this.goodsSearch()
      }
      if(i===3){
        setTimeout(()=>{
          this.imgGoods=this.imgGoods.filter((item)=>{
          return item.name.slice(0,4)>2020
        })
        },1)    
      }else if(i===2){
        this.goodsSearch()
        setTimeout(()=>{
          this.imgGoods=this.imgGoods.filter((item)=>{
          return item.name.slice(0,4)>2010&&item.name.slice(0,4)<=2020
        })
        },1)
        
      }else if(i===1){
        this.goodsSearch()
        setTimeout(()=>{
          this.imgGoods=this.imgGoods.filter((item)=>{
          return item.name.slice(0,4)<2010&&item.name.slice(0,4)>2000
        })
        },1)
      }
    },
    kindsClick(i,kinds){
      this.num2 =i
      if(kinds===1){
        this.goodsSearch()
        setTimeout(()=>{
         this.imgGoods = this.imgGoods.filter((item)=>{
          return item.kinds ==='白葡萄酒'
        })          
        },1)     
      }else if(kinds===2){
        this.goodsSearch()
        setTimeout(()=>{
          this.imgGoods = this.imgGoods.filter((item)=>{
          return item.kinds =='红葡萄酒'
        })
        },1)
      }else if(kinds===3){
        this.goodsSearch()
        setTimeout(()=>{
          this.imgGoods = this.imgGoods.filter((item)=>{
          return item.kinds =='威士忌'
        })
        },1)
      }else if(kinds===4){
        this.goodsSearch()
        setTimeout(()=>{
          this.imgGoods = this.imgGoods.filter((item)=>{
            return item.kinds === '甜酒'
          })
        },1)
      }
      if(kinds===0){
        this.goodsSearch()
      }
    },
    priceClick(i,rear){
      this.num3 = i
      this.imgGoods=this.imgGoods.filter((item)=>{
        return item.price >3000
      })
      if(rear===0){
        this.goodsSearch()
      }
      if(rear===1){
        this.goodsSearch()
        setTimeout(()=>{
          this.imgGoods=this.imgGoods.filter((item)=>{
        return item.price >0&&item.price<=500
      })
        })
      }else if(rear===2){
        this.goodsSearch()
          setTimeout(()=>{
            this.imgGoods=this.imgGoods.filter((item)=>{
            return item.price >500&&item.price<=1000
          })
        })
      }else if(rear === 3){
        this.goodsSearch()
          setTimeout(()=>{
            this.imgGoods=this.imgGoods.filter((item)=>{
            return item.price >1000&&item.price<=1500
          })
        })
      }else if(rear===4){
        this.goodsSearch()
          setTimeout(()=>{
            this.imgGoods=this.imgGoods.filter((item)=>{
            return item.price >1500&&item.price<=3000
          })
        })
      }else if(rear===5){
        this.goodsSearch()
          setTimeout(()=>{
            this.imgGoods=this.imgGoods.filter((item)=>{
            return item.price >3000
          })
        })
      }
    },
    searchButton(){
      if(this.keyWord){
        this.imgGoods = this.arrimgGoods.filter((p) => {
          console.log(this.imgGoods);
          return p.name.indexOf(this.keyWord) !== -1;
        });
      }else if(this.keyWord == ""){
        alert('输入不能为空')
      }
    },
    async goodsSearch(){
      var datas = await shujv2;
      this.imgGoods = datas;
      // console.log(this.imgGoods);
    }

  },
  watch:{
    keyWord:{
      handler(newval,oldval){
        if(this.keyWord===""){
          // this.reload()
          this.$router.go(0)
        }
      },
      deep:true
    },
  },
  computed: {
    arrimgGoods() {
      return this.imgGoods.sort((a,b)=>{
        return this.sortType ===1? a.price- b.price:(this.sortType===2?b.price- a.price :b.sales-a.sales) 
      })
    },

  },
  created() {
    this.goodsSearch()
  },
};
</script>

<style lang="less" scoped>
* {
  vertical-align: middle;
}


.allgoods {
  top: 80px;
  // height: 300px;
  background-color: black;
  width: 100%;
  float: left;
  .all-topbar {
    width: 90vw;
    // height: 200px;
    // background-color: pink;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    .fake {
      width: 100%;
      height: 140px;
      // background-color: skyblue;
    }
    .top-right {
      display: flex;
      justify-content: space-between;
      .main-right {
        display: flex;
        background: black;
        width: 600px;
        height: 40px;
        justify-content: space-between;
        color: #817f7d;

        .paixu {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          height: 60px;
          width: 80px;
          right: 0px;
          padding: 5px 0;
          display: none;
          background-color: #262525;
          li {
            cursor: pointer;
            line-height: 30px;
            font-size: 15px;
            user-select: none;
            &:hover {
              background-color: #a8784c;
              color: #fff;
            }
          }
        }
        .paixu-shop{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          height: 60px;
          width: 80px;
          right: 0px;
          padding: 5px 0;
          display: none;
          background-color: #262525;
          li{
            font-size: 15px;
            cursor: pointer;
            user-select: none;
            &:hover {
              background-color: #a8784c;
              color: #fff;
            }
          }
        }
        .paixu-shop:hover{
          display: block;
        }
        .paixu:hover {
          display: block;
        }
        .select-price {
          // background-color: pink;
          height: 100%;
        }
        .select-price:hover + .paixu {
          display: block;
        }
        .select-price:hover +.paixu-shop{
          display: block;
        }
        span {
          line-height: 40px;
          cursor: pointer;
          display: block;
          &:hover {
            color: #fff;
          }
          i {
            padding: 15px;
          }
        }
        .input {
          width: 55%;
          .input-search {
            width: 64px;
            height: 100%;
            float: right;
            // background-color: black;
            background-color: #bfbfbf;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            border-left: 1px solid #818080;
            cursor: pointer;
          }
          i {
            font-size: 30px;
            line-height: 40px;
          }
        }
        .input:hover {
          color: rgb(202, 136, 12);
        }
        .input:hover input {
          background-color: rgb(221, 217, 217);
        }
        .input:hover .input-search {
          background-color: rgb(221, 217, 217);
        }
        input {
          height: 94.5%;
          border: 1px solid transparent;
          width: 75.1%;
          background-color: #bfbfbf;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          float: left;
          padding-left: 15px;
          color: #817f7d;
          font-size: 16px;
        }
      }
    }
  }
  .all-kinds {
    margin-top: 100px;
    background-color: #212020;
    height: 250px;
    display: flex;
    .kinds-right {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 30px 0;
      line-height: 21px;
      ul {
        padding: 0 50px;
        .active {
          color: orange;
        }
        li {
          vertical-align: middle;
          float: left;
          padding: 0 20px;
          color: #fff;
          cursor: pointer;
          &:hover {
            color: orange;
            transition: all 0.3s;
          }
        }
        user-select: none;
        // li:nth-child(1){
        //   color: orange;
        // }
      }
    }
    .kinds-line {
      width: 1px;
      height: 70%;
      margin: auto 0;
      color: red;
      background-color: #d8d8d8;
    }
    .kinds-left {
      width: 15%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 30px 0;
      font-size: 18px;
      color: #fff;
      letter-spacing: 2px;
      font-weight: normal;
      user-select: none;
      cursor: pointer;
    }
  }
  .all-showgoods {
    width: 100%;
    .showgoodsImg {
      // background-color: pink;
      margin: 0 auto;
      img {
        width: 400px;
        height: 200px;
        margin: 0 auto;
      }
    }
    .showgoods {
      width: 100%;
      // background-color: pink;
      height: 100%;
      .show-small {
        width: 85%;
        // height: 100%;
        margin: 0 auto;
        // display: flex;
        ul {
          float: left;
          margin-bottom: 60px;
          margin-left: 20px;
          // user-select: none;
          cursor: pointer;
          li {
            transition: background-size 0.4s linear;
            background-size: 100% 100%;
            span {
              color: grey;
              width: 100%;
              height: 100%;
              overflow: hidden;
              margin-left: -120px;
            }
            b {
              float: left;
              color: #fff;
              font-size: 18px;
              max-width: 300px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .small-price {
              float: right;
              margin-right: 20px;
              color: red;
            }
            img{
              pointer-events: none;
            }
          }
        }
        img {
          width: 300px;
          height: 350px;
          border-radius: 5px;
          filter: brightness(0.9);
          &:hover {
            background-size: 105% 105%;
            transform: translateY(-10px);
            transition: all 0.5s;
            box-shadow: 0 0 20px #fff;
          }
        }
      }
    }
  }
  .jiazai {
    float: left;
    width: 100%;
    display: block;
    p {
      font-size: 22px;
      color: #fff;
      letter-spacing: 2px;
    }
    span {
      font-size: 22px;
      margin-left: 10px;
    }
  }
}
</style>
