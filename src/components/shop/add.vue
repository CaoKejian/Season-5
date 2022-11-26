<template>
  <div class="wrapperadd">
    <div>
        <div><img src="@/assets/img/jianhao.png" @click="setCartItem(id,price,'MINUS')" alt=""></div>
        <input class="input" :value="totalMount"></input>
        <div><img src="@/assets/img/jiahao.png" @click="setCartItem(id,price,'PLUS')" alt=""></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data(){
    return{
    }
  },
  props:{
    id:Number,
    // totalMount:Number,
    price:Number
  },
  methods:{
    setCartItem(id,price,type){
      this.$store.dispatch('setTotal',{
        type,
        price
      })
      this.$store.dispatch('setCart',{
        id,
        price,
        type
      })
    },
    ...mapActions({
      asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast"
    }),
  },
  computed:{
    ...mapState({
      totalMount:state=>state.addcart.totalMount,
    })
  },
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
      span{
        margin: 0 auto;
        line-height: 30px;
      }
    }
  }
}
</style>