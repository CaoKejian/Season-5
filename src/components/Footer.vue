<template>
  <div class="footer">
    <div class="bottombar">
        <div class="smallbar">
            <div class="sm-logo">
            </div>
            <span class="line">|</span>
            <div class="sm-word"><i class="iconfont icon-shouye1"></i><span>酒庄地址</span></div>
            <span class="line">|</span>
            <div class="sm-word"><i class="iconfont icon-shouye2"></i><span>电话：0374-8888888</span></div>
            
        </div>
    </div>
    <hr class="bottombar-line">
    <div class="bottomword">
        <span> © 2022 (SEASON-5.COM.CN), All rights reserved. </span>
        <span>  豫ICP备66666666号-1</span>
        <span class="jack"> Designed by JacksonYao&&Cao kejian</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style  lang = "less" scoped>
    .footer{
        width: 100%;
        height: 102px;
        float: left;
        background-color: #000;
        .bottombar{
            /* background-color: pink; */
            width: 100%;
            height: 80px;
            .smallbar{
                cursor: pointer;
                display: flex;
                justify-content: space-around;
                color: #fff;
                
                
                .sm-logo{
                    width: 180px;
                    height:80px ;
                    background: url('../assets/img/se-logo.jpg') no-repeat;
                    background-size: cover;                 
                    background-position-y: 30%;
                }
                .line{
                    line-height: 80px;
                    font-size: 25px;
                    cursor:none;
                }
                .sm-word{
                    font-size: 20px;
                    line-height: 80px;
                    i{
                        padding-right: 10px;
                    }
                    span{
                        color: rgb(159, 153, 153);
                        user-select: none;
                    }
                }
                .sm-word:hover span,.sm-word:hover i{
                        color: rgb(255, 196, 85);
                        transition: all .4;
                    }
            }
        }
        .bottombar-line{
            border-color: rgb(60, 54, 54);
        }  
        .bottomword{
            color: rgb(95, 93, 93);
            .jack{
                color: rgb(148, 153, 141);
            }
        }
    }
</style>