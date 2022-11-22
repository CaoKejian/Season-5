export default{
  namespaced:true,
  state:{
    token:'',
    cartarry:[],
  } ,
  mutations:{
    settoken(state,token){
        state.token = token
    },
    tocart(state,item){
        let goods = state.cartarry.find(e=>e.name==item.name)
        state.cartarry.push({name:item.name,
          // count:1,
          img:item.img,
          ml:500,
          price:item.price
        })
        // if(goods){
        //     goods.count+=1
        // }else{
        //     state.cartarry.push({name:item.name,count:1,img:item.img,ml:item.ml,price:item.price})
        // }
    }
  } ,
  actions:{
    tocart({commit},item){
      commit('tocart',item)
    }
  },
}
