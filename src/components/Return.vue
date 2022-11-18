<template>
  <div class="return">
    <span id="btnBox" 
    @click="goBack" 
    class="iconfont icon-fanhuidingbu1">
    </span>
  </div>
</template>

<script>
import { getScrollTop } from "@/utils";
export default {
    data(){
        return{

        }
    },
    methods:{
        goBack() {
            let top = document.documentElement.scrollTop||document.body.scrollTop;
            const timerTop = setInterval(() => {
                document.documentElement.scrollTop = top -=100
                if(top<=0){
                    clearInterval(timerTop)
                }
            }, 10);
        },
        scrollToTop(){
            let topBtn = document.getElementById("btnBox")
            if(getScrollTop()>500){
                topBtn.style.display = "block"
            }else if(getScrollTop()<500){
                topBtn.style.display = "none"
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.scrollToTop);
    },
}
</script>

<style  lang="less" scoped>
.return{
    position: fixed;
    z-index: 10000;
    right: 0;
    width: 100px;
    height: 90px;
    margin-right: 20px;
    bottom: 100px;
    span{
        color: #fff;
        font-size: 55px;
        &:hover{
            color: orange;
            transition: all .5s;
        }
    }
    h2{
        padding-top: 10px;
        color: #fff;
        font-size: 18px;
        font-weight: 200;
    }
}


</style>