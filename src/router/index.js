import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import News from '@/components/news'
import Grow from '@/components/grow'
import Me from '@/components/me'
import EarthBuy from '@/components/earthbuy'
import GoodsDetail from '@/components/goodsdetail'
import Logined from '@/components/logined'

Vue.use(Router)
Vue.filter('formatDate', function(value) { // 一个时间戳转正常的过滤器
	let date = new Date(value) // new 一个时间
	let getHours // 小时
	let getMinutes // 分
	if(date.getHours() < 10) {
		getHours = "0" + date.getHours()
	} else {
		getHours = date.getHours()
	}
	// 判断小时是否小于10的补全：加0
	if(date.getMinutes() < 10) {
		getMinutes = "0" + date.getMinutes()
	} else {
		getMinutes = date.getMinutes()
	}
	// 判断分是否小于10的补全：加0
	return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + getHours + ":" + getMinutes // 返回转换后的值
})
export default new Router({
	mode: 'history',
	base: '/index',
	routes: [{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/news',
			name: 'news',
			component: News
		},
		{
			path: '/grow',
			name: 'grow',
			component: Grow
		},
		{
			path: '/me',
			name: 'me',
			component: Me
		},
		{
			path: '/earthbuy',
			name: 'earthbuy',
			component: EarthBuy
		},
		{
			path: '/goodsdetail',
			name: 'goodsdetail',
			component: GoodsDetail
		},
    {
      path: '/logined',
      name: 'logined',
      component: Logined
    }
	]
})
