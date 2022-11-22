<template>
  <div class="wrapperadd">
    <div>
        <div><img src="@/assets/img/jianhao.png" @click="handleSub" alt=""></div>
        <input type="text" :value="count"></input>
        <div><img src="@/assets/img/jiahao.png" @click="handleAdd" alt=""></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return{
      // count:1,
    }
  },
  props:{
    count:{
      type:Number,
      required:true
    }
  },
  methods:{
    handleSub(){
      if(this.count>1){
        this.count--
      }else{
        this.asyncChanIsShowToast({
          type:'danger',
          msg:'加入发生错误'
        })
      }
    },
    handleAdd(){
      if(this.count){
        this.count++
      }
    },
    ...mapActions({
      asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast"
    }),
  }
}
</script>

<style lang='less' scoped>
.wrapperadd{
  width: 150px;
  height: 30px;
  div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    div{
      img{
        margin: 0 auto;
      }
    }
    input{
      width: 30px;
      background: #9C0404;
      text-align: center;
      font-size: 18px;
      border: none;
    }
  }
}
</style>