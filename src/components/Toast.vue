<template>
    <div class="toast">
        <i :class="type=='success'?'icon-toast_chenggong':(type=='warning'?'icon-toast-jinggao':'icon-toast-shibai_huaban')" class="iconfont"></i>
        <span>{{msg}}</span>
    </div>
</template>

<script>
import {mapState} from 'vuex'   

export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState({
            msg:state=>state.toastStatus.msg,
            type:state=>state.toastStatus.type,
        })
    }
}
</script>

<style>
    .toast{
        position: fixed;
        left: 50%;
        top: 10px;
        transform: translate(-44%);
        background-color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px #fff;
        z-index: 1000;
    }
    .toast i {
        margin-right: 5px;
    }
    .icon-toast-jinggao{
        color: orange;
    }
    .icon-toast_chenggong{
        color: green;
    }
    .icon-toast-shibai_huaban{
        color: red;
    }
</style>