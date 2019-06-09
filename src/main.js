// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/detail'
import router from './router'
//import axios from 'axios'
import './assets/fonts/font.css'
import './assets/css/index.css'
import Nav from '@/components/nav'
import Menu from '@/components/menu'
import Buynav from '@/components/buynav'
import VueResource from 'vue-resource'
Vue.use(VueResource)


Vue.config.productionTip = false
//Vue.prototype.$http = axios
Vue.component('app-nav', Nav)
Vue.component('app-menu', Menu)
Vue.component('app-buynav', Buynav)
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App />'
})
