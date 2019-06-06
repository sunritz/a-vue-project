import Vue from 'vue';
import Vuex from 'vuex';
require('../../mock');
Vue.use(Vuex);

const state = {
	detail: {

	}

};
const getters = {
	detail: state => state.detail = state.detail
};
const mutations = {
	getJson() {



	}

};
const actions = {
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
