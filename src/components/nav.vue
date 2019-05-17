<template>
		<nav class="bar bar-tab">
			<a :class="[tabItem,indexCur]" href="/" external>
				<span class="icon icon-home"></span>
				<span class="tab-label">首页</span>
			</a>
			<a :class="[tabItem,growCur]" href="grow" external>
				<span class="icon icon-camera"></span>
				<span class="tab-label">成长</span>
			</a>
			<a :class="[tabItem,newsCur]" href="news" external>
				<span class="icon icon-paperfile"></span>
				<span class="tab-label">新闻</span>
			</a>
			<a :class="[tabItem,meCur]" href="me" external>
				<span class="icon icon-profile"></span>
				<span class="tab-label">我</span>
			</a>
		</nav>
	
</template>
<script>
	export default {
		data() {
			return {
				tabItem: "tab-item",
				current: 'active',
				cur: false
			}
		},
		methods: {
			active: function(a) {
				this.cur = a;
				alert(this.cur)
			}
		},
		props: ['indexCur', 'newsCur','growCur','meCur']
	}
</script>
<style scoped>
	.bar-tab .tab-item.active,
	.bar-tab .tab-item:active {
		color: #9bcb67
	}
</style>