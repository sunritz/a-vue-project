<template>
	<div class="box">
		<header class="bar bar-nav">
			<h1 class="title">成长</h1>
		</header>
		<app-nav grow-cur="active"></app-nav>
		<div class="content infinite-scroll infinite-scroll-bottom" data-distance="100">
 			
          	<div class="list-container">
          	</div>
          
          	<!-- 加载提示符 -->
	          <div class="infinite-scroll-preloader">
	              <div class="preloader"></div>
	          </div>
			<!--<div class="card facebook-card" v-for="(item, index) in list">
				<div class="card-header no-border">
					<div class="facebook-avatar"><img :src="item.userpic" width="40" height="40"></div>
					<div class="facebook-name">{{item.name}}</div>
					<div class="facebook-date">星期{{item.week}} {{item.time}}</div>
				</div>
				<div class="card-content"><img :src="item.pic" width="100%"></div>
				<div class="card-footer no-border">
					<a href="#" class="link">赞({{item.prise}})</a>
					<a href="#" class="link">评论({{item.diss}})</a>
					<a href="#" class="link">分享({{item.share}})</a>
				</div>
			</div>-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				name: '',
				list: []
			}
		},
		mounted: function() {
			this.infinite();
		},
		methods: {
			loadmore: function() {
				this.$http.get("mock/growList").then(res => {
						this.list = this.list.concat(res.data.list);
						//						this.list.push(res.data.list)
					})
					.catch(err => {
						console.log(err);
					});
			},
			infinite: function() {
				this.$http.get("mock/growList").then(res => {
						//	this.newsList = this.newsList.concat(res.data.list);
						//	this.list.push(res.data.list)                  
						// 加载flag
						var loading = false;
						// 最多可加载的条目
						var maxItems = 17;
						// 每次加载添加多少条目
						var itemsPerLoad = 4;
						function addItems(number, lastIndex) {
							// 生成新条目的HTML
							var html='';
							for(var i = lastIndex + 0; i <= lastIndex + number; i++) {
								var newslist = res.data.list[i];	
								
								html +=`<div class="card facebook-card">
											<div class="card-header no-border">
												<div class="facebook-avatar"><img src="${newslist.userpic}" width="40" height="40"></div>
												<div class="facebook-name">${newslist.name}</div>
												<div class="facebook-date">星期${newslist.week} ${newslist.time}</div>
											</div>
											<div class="card-content"><img src="${newslist.pic}" width="100%"></div>
											<div class="card-footer no-border">
												<a href="#" class=" icon icon-heart"> (${newslist.prise})</a>
												<a href="#" class=" icon icon-message"> (${newslist.diss})</a>
												<a href="#" class=" icon icon-share"> (${newslist.share})</a>
											</div>
										</div>`
							}
							// 添加新条目
							$('.infinite-scroll-bottom .list-container').append(html);

						}
						//预先加载5条
						addItems(itemsPerLoad, 0);

						// 上次加载的序号

						var lastIndex = 4;

						// 注册'infinite'事件处理函数
						$(document).on('infinite', '.infinite-scroll-bottom', function() {

							// 如果正在加载，则退出
							if(loading) return;

							// 设置flag
							loading = true;

							// 模拟1s的加载过程
							setTimeout(function() {
								// 重置加载flag
								loading = false;

								if(lastIndex >= maxItems) {
									$.toast("mock数据已经加载完")
									// 加载完毕，则注销无限加载事件，以防不必要的加载
									$.detachInfiniteScroll($('.infinite-scroll'));
									// 删除加载提示符
									$('.infinite-scroll-preloader').remove();
									return;
								}

								// 添加新条目
								addItems(itemsPerLoad, lastIndex);
								// 更新最后加载的序号
								lastIndex = $('.list-container .card').length;
								//容器发生改变,如果是js滚动，需要刷新滚动
								$.refreshScroller();
							}, 1000);
						});

					})
					.catch(err => {
						console.log(err);
					});

			}
			
			

		}
	}
</script>

<style lang="scss" scoped type="text/css">
	$bg:#fff;
	.content {
		background-color: $bg;
	}
</style>