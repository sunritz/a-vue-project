// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import store from './store/detail'
import router from './router'
import './assets/fonts/font.css'
import './assets/css/index.css'
import Nav from '@/components/nav'
import Menu from '@/components/menu'
import Buynav from '@/components/buynav'
import NavCart from '@/components/navcart'
import NavCartManage from '@/components/navcartmanage'
import NavCollectManage from '@/components/navcollectmanage'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.component('app-nav', Nav)
Vue.component('app-menu', Menu)
Vue.component('app-buynav', Buynav)
Vue.component('app-navcart', NavCart)
Vue.component('app-navcartmanage', NavCartManage)
Vue.component('app-navcollectmanage', NavCollectManage)
new Vue({
	el: '#app',
	router,
	store,
  render: h => h(App)
})
