import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  num: 33
};

const cart = new Vuex.Store({
  state
});

export default cart;
