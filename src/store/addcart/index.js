export default {
  state:{
    phoneData:[],
    totalPrice:0,
    totalMount:0,
    cartData:[
        // id:1,
        // img:'',
        // name:'',
        // price:1000,
        // cale:"",
        // ml:'',
        // describe:"",
        // totalMount:1,
        // totalPrice:1000*1
    ]
  },
  mutations:{
    SET_DATA(state,data){
      const {phoneData,totalMount,totalPrice,cartData} = data
      state.phoneData = phoneData
      state.totalMount = totalMount
      state.totalPrice = totalPrice
      state.cartData = cartData
    },
    SET_TOTAL(state,payload){
      const { price, type} = payload
      switch(type){
        case 'PLUS':
          state.totalPrice +=price
          state.totalMount +=1
          break
        case 'MINUS':
            state.totalPrice -= price;
            state.totalMount -= 1;
            break;
        default:
          break
      }
    },
    SET_CART(state,payload){
      const{type,id,img,name,price,cale,ml,describe,checked} = payload
      const index = state.cartData.findIndex(item=> Number(item.id) === id)
      if(index===-1){
        state.cartData.push({
          type,id,img,name,price,cale,ml,describe,checked,totalMount:1,totalPrice:price
        })
      }else{
        switch(type){
          case 'PLUS':
            state.cartData[index].totalMount+=1
            state.cartData[index].totalPrice+=price
            break
          case 'MINUS':
            state.cartData[index].totalMount -=1
            state.cartData[index].totalPrice-=price
            if(!state.cartData[index].totalMount){
              state.cartData = state.cartData.filter(item=>item.id!==id)
            }
            break
          default:
            break
        }
      }
    }
  },
  actions:{
    setData({commit}){
      let phoneData =JSON.parse(localStorage.getItem('datas')||'[]');
        const totalPrice = Number(localStorage.getItem('totalPrice')||'0');
        const totalMount = Number(localStorage.getItem('totalMount')||'0');
        const  cartData = JSON.parse(localStorage.getItem('cartData')||'[]');
      commit("SET_DATA",{
        phoneData,totalPrice,totalMount,cartData
      })
    },
    setTotal({commit},payload){
      commit('SET_TOTAL',payload)
    },
    setCart({commit},payload){
      commit("SET_CART",payload)
    }
  },
}
