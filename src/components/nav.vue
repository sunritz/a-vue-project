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
			<a :class="[tabItem,earthbuyCur]" href="earthbuy" external>
				<span class="icon icon-earthbuy"></span>
				<span class="tab-label">全球购</span>
			</a>
			<a :class="[tabItem,newsCur]" href="news" external>
				<span class="icon icon-paperfile"></span>
				<span class="tab-label">新闻</span>
			</a>
			<a :class="[tabItem,meCur]" @click="tome" external>
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
				cur: false,
        name:'admin'
			}
		},
		methods: {
			active: function(a) {
				this.cur = a;
				alert(this.cur)
			},
      tome: function(){
        let storage = window.localStorage;
        if(storage.getItem("name") === this.name) {
          window.location.href = "logined";
        }else{
          window.location.href = "me";
        }
      }
		},
		props: ['indexCur', 'newsCur','earthbuyCur','growCur','meCur']
	}
</script>
<style scoped>
	.bar-tab .tab-item.active,
	.bar-tab .tab-item:active {
		color: #9bcb67
	}
</style>
