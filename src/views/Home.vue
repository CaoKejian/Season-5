<template>
  <div class="home">
    <div class="swiper-demo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in imgArr"
            :key="index"
          >
            <img :src="item.imgSrc" alt="" />
          </div>
          <!-- <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>

    <!-- 企业文化 -->
    <div class="culture">
      <div class="guizu">
        <img src="../assets/img/guizu.jpg" alt="">
      </div>
      <hr class="fenge-line">
      <div class="pic-kuangjia">
        <div class="threepic">
          <div class="bianli" v-for="(item,index) in img" :key="item.id" v-if="index<3">
            <img :src="item.goods.img" alt="">
            <h3>{{item.goods.name}}</h3>
            <span>{{item.goods.describe}}</span>
          </div>
        </div>
      </div>
      <hr class="mingjiu-line"><img class="culture-pic" src="../assets/img/culture.jpg" alt="">
      <div class="jiu-cluture">
        <div class="english">
          <img src="../assets/img/english.jpg" alt="">
        </div>
        <div class="container">
          <div class="container-div">
            <div class="span">
              <div></div>
              <span>酒是人类生活中的主要饮料之一。中国制酒历史源远流长，品种繁多，名酒荟萃，享誉中外。黄酒是世界上最古老的酒类之一，约在三千多年前，商周时代，中国人独创酒曲复式发酵法，开始大量酿制黄酒。酒渗透于整个中华五千年的文明史中，从文学艺术创作、文化娱乐到饮食烹饪、养生保健等各方面在中国人生活中都占有重要的位置。当今，酒文化的核心便是“酒民文化”。</span>
            </div>
            <img src="../assets/img/喝酒.jpg" alt="">
          </div>
          <div class="container-div">
            <div class="span">
              <span>人的酒行为更为普遍，酒与人的命运更为密切，真正的饮酒，即便是形态层面的饮酒，需要表达的也多是精神层面的内容——客从远方来，无酒不足以表达深情厚意；良辰佳节，无酒不足以显示欢快惬意；丧葬忌日，无酒不足以致其哀伤肠断；蹉跎困顿，无酒不足以消除寂寥忧伤；春风得意，无酒不足以抒发豪情壮志。总的来说，随着时代的变迁，如今中国的酒文化已渐渐演变成中国特有的政治文化、中国特有的人情文化、中国商业权利寻租文化以及中国特有的公关饭局文化。</span>
              <div></div>
            </div>
            <img src="../assets/img/图书馆.jpg" alt="">
          </div>
          <div class="container-div">
            <div class="span">
              <div></div>
              <span>酒文化是中华民族饮食文化的—个重要组成部分。酒是人类最古老的食物之一，它的历史几乎是与人类文化史一道开始的。自从酒出现之后，作为一种物质文化，酒的形态多种多样，其发展历程与经济发展史同步，而酒又不仅仅是一种食物，它还具有精神文化价值。作为一种精神文化它体现在社会政治生活、文学艺术乃至人的人生态度、审美情趣等诸多方面。在这个意义上讲，饮酒不是就饮酒而饮酒，它也是在饮文化。</span>
            </div>
            <img src="../assets/img/田园.jpg" alt="">
          </div>
        </div>
        <!-- container下边一个span -->
        <div class="container-bottom">
          <span>葡萄和酒的象征意义在宗教上随处可见。耶稣创造的有关酒的第一个奇迹是在佳娜的婚礼上，他把水变成了美酒。耶稣说：“我是真正的葡萄，我的父亲是种植葡萄的农民。”对耶稣的门徒来说，酒是上帝之子的鲜血。在圣体圣事等仪式上，葡萄和酒受到了教士们的普遍青睐。在中世纪的艺术画中，钉在十字架上的耶稣被表现得像一串压榨机下的葡萄。直到18世纪，人们还认为喝下去的酒会在体内变成血液。在疫病流行时，所有的人都会喝酒避邪。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import shujv from '../static/data.json'

// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      imgArr: [
        { imgSrc: require("../assets/img/一种红酒.jpg") },
        { imgSrc: require("../assets/img/内景2.jpg") },
        { imgSrc: require("../assets/img/外景.jpg") },
        { imgSrc: require("../assets/img/红白葡萄酒.jpg") },
        { imgSrc: require("../assets/img/鸡尾酒2.jpg") },
      ],
      img:"",
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay:{
        delay:3000,
        stopOnLastSlide:false,
        disableOnInteraction:true,
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      coverflow: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows: true,
      },
    });
  },
  async created(){
    const datas = await shujv
    this.img = datas
    // console.log(this.img);
  }
};
</script>
<style lang = "less" scoped>
body{
  background-color: #000;
}
.swiper-container {
  float: left;
  width: 100%;
  height: 100vh;
  box-shadow: 0 0 10px #000;
  /* position: relative; */
  /* top: 80px; */
  /* z-index: 100; */
}
.swiper-button-next.swiper-button-next{
            /* width: 10%; */
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%236a708e'%2F%3E%3C%2Fsvg%3E");
        }
        .swiper-button-prev.swiper-button-prev{
            /* width: 10%; */
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%236a708e'%2F%3E%3C%2Fsvg%3E");
        }  
.swiper-button-next{

}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit:cover;
  -webkit-user-drag: none;
}
.culture{
  height: 3400px;
  width: 100%;
  background-color: #000;
  float: left;
  .fenge-line{
    border-color: gray;
  }
  .guizu{
    width: 30%;
    height: 170px;
    margin: 0 auto;
    img{
      background-size: cover;
      width: 100%;
      height: 100%;
      -webkit-user-drag: none;
    }
  }
  .pic-kuangjia{
    /* background-color: pink; */
    margin-top: 30px;
    height: 600px;
    .threepic{
      width: 80%;
      height: 75%;
      margin: 0px auto;
      position: relative;
      top: 120px;
      /* background-color: green; */
      display: flex;
      justify-content: space-around;
      user-select: none;
      .bianli{
        cursor: pointer;
        width: 250px;
        color: rgb(192, 185, 185);
        h3{
          color: #6d0412;
        }
        span{
          position: relative;
          top: 10px;
          font-size: 13px;
          display: block;
          height: 150px;
          text-indent: 36px;
          overflow: scroll;
          overflow-x: hidden;
          overflow-y: auto;
          &::-webkit-scrollbar {display:none;}
        }
        img{
          width: 250px;
          height: 300px;
          box-shadow: -50px -50px 10px gray;
          filter: brightness(80%);
          overflow: hidden;
        }
        img:hover{
          transform: translate(0px,-5px);
          /* transform: translateY(-3px);
          transform: translateX(-3px); */
          transition: all .3s;
        }
      }
    }
  }
  .mingjiu-line{
    border-color: gray;
    margin-top: 150px;
  }
  .culture-pic{
    width: 250px;
    height: 140px;
    position: relative;
    top: -65px;
    -webkit-user-drag: none;
  }
  .jiu-cluture{
    width: 100%;
    /* height: 5000px; */
    float: left;
    /* background: pink; */
    margin-top: -80px;
    .english{
      img{
        width: 400px;
        height: 150px;
        -webkit-user-drag: none;
      }
    }
    .container{
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      /* background-color: pink; */
      .container-div{
        width: 90%;
        height: 600px;
        margin: 0 auto;
        /* background-color: pink; */
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
          width: 100%;
          height: 70%;
        }
        .span{
          display: flex;
          flex-grow: 1;
          justify-content: space-between;
          span{
            width: 70%;
            color: rgb(177, 168, 168);
            letter-spacing: 2px;
            line-height: 30px;
            text-align-last: left;
          }
          div{
            width: 30%;
          }
        }
      }
    }
    .container-bottom{
      width: 60%;
      padding-left: 75px;

      /* background-color: #bfa; */
      span{
        color: rgb(177, 168, 168) ;
        letter-spacing: 2px;
        line-height: 30px;
        text-align-last: left;
        display: block;
      }
    }
  }
}
</style>
