<template>
  <div class="tongzhi">
    <Header></Header>
    <div class="small">
      <div>
        <img src="@/assets/img/通知.png" alt=""><span>暂无通知</span>
      </div><hr>
    </div>
    <div class="big"><img src="@/assets/img/cloud-off.png" alt=""></div>
  </div>
</template>

<script>
export default {
  components:{
  }
}
</script>

<style lang="less" scoped>
.tongzhi{
  display: flex;
  flex-direction: column;
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
.big{
  min-height: 450px;
  width: 100%;
  img{
    width: 150px;
    height: 150px;
    margin-top: 120px;
  }
}
</style>