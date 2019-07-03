import Vue from 'vue';
import Vuex from 'vuex';


require('../../mock');
Vue.use(Vuex);

const state = {
  totalprice:0,
  allcheck:0,
	detail: {

	},
  collected:[],
  cart: JSON.parse(window.localStorage.getItem("cart"))?JSON.parse(window.localStorage.getItem("cart")).length:0
};
const getters = {
	detail: state => state.detail = state.detail
};
const mutations = {
   CHANGE(state){
     state.cart++;
   }
};
const actions = {
  uncollected(){
    if(!window.localStorage) {
      $.alert("浏览器不支持localstorage");
      return false;
    } else {
      let storage = window.localStorage;
      if(JSON.parse(storage.getItem("collected")).length==1){
          storage.removeItem('collected');
      }else{
        let c = JSON.parse(storage.getItem("collected"));
        c.splice(c.length-1,1);//Mock数据，删除数组最后一个,实际项目中还是要对应ID删除
        localStorage.setItem("collected",JSON.stringify(c))
        console.log(JSON.parse(storage.getItem("collected")).length)
      }
    }
  },
    collected() {
      if(!window.localStorage) {
        $.alert("浏览器不支持localstorage");
        return false;
      } else {
        let storage = window.localStorage;
        if(storage.getItem("collected")==null){
           storage.setItem("collected","["+storage.getItem("detail")+"]");
        }else{
          let c = JSON.parse(storage.getItem("collected"));
          c.push(JSON.parse(storage.getItem("detail")));
          storage.setItem("collected", JSON.stringify(c));
          console.log(JSON.parse(storage.getItem("collected")).length)
        }
      }
    },
	vuexjson() {
		    Vue.http.get("mock/proDetail").then(res => {
				if(!window.localStorage) {
							$.alert("浏览器不支持localstorage");
							return false;
						} else {
              state.detail = res.data.list;
							let storage = window.localStorage;
							storage.setItem("detail", JSON.stringify(res.data.list));
						}
			})
			.catch(err => {
				console.log(err);
			});
	},
  addcart(context){
    Vue.http.get("mock/proDetail").then(res => {
      if(!window.localStorage) {
        $.alert("浏览器不支持localstorage");
        return false;
      } else {
        let storage = window.localStorage;
        if(storage.getItem("cart")==null){
          storage.setItem("cart","["+storage.getItem("detail")+"]");
          context.commit("CHANGE");
        }else{
          let c = JSON.parse(storage.getItem("cart"));
          c.push(JSON.parse(storage.getItem("detail")));
          storage.setItem("cart", JSON.stringify(c));
          context.commit("CHANGE");
        }
      }
    })
      .catch(err => {
        console.log(err);
      });
  }

};
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});

export default store;
