// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/fonts/font.css'
import './assets/css/index.css'
import Nav from '@/components/nav'
require('./mock')

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component('app-nav', Nav)

new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})