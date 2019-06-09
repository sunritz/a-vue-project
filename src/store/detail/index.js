import Vue from 'vue';
import Vuex from 'vuex';


require('../../mock');
Vue.use(Vuex);

const state = {
	detail: {

	},
  collected:[]
};
const getters = {
	detail: state => state.detail = state.detail
};
const mutations = {
	getJson() {
    
	}

};
const actions = {
  uncollected(i){
    if(!window.localStorage) {
      $.alert("浏览器不支持localstorage");
      return false;
    } else {
      let storage = window.localStorage;
      let c = JSON.parse(storage.getItem("collected"));
      c.splice(c.length-1,1);
      //state.collected=c;//取消收藏直接删除localStorage的数据，不经过vuex的store
      localStorage.setItem("collected",JSON.stringify(c))
      console.log(JSON.parse(storage.getItem("collected")).length)
    }
  },
  collected() {
    if(!window.localStorage) {
      $.alert("浏览器不支持localstorage");
      return false;
    } else {
      let storage = window.localStorage;
      let c = JSON.parse(storage.getItem("collected"));
      c.push(JSON.parse(JSON.stringify(state.detail)))
      //state.collected.push(JSON.parse(JSON.stringify(state.detail)));//添加收藏直接存储localStorage的数据，不经过vuex的store
      storage.setItem("collected", JSON.stringify(c));
      console.log(JSON.parse(storage.getItem("collected")).length)
    }
  },
	vuexjson() {
//		context.commit('getJson');
		    Vue.http.get("mock/proDetail").then(res => {
				state.detail = res.data.list;
        console.log(state.detail)
				if(!window.localStorage) {
							$.alert("浏览器不支持localstorage");
							return false;
						} else {
							let storage = window.localStorage;
							storage.setItem("detail", res.data.list);
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
