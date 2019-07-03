<template>
	<div>
		<header class="bar bar-nav">
			<h1 class="title">全球购</h1>
			<a class="button button-link button-nav pull-right" href="cart" data-transition='slide-out' external>
        <span class="icon icon-cart"></span><span class="badge">{{cart}}</span>
			</a>
		</header>
		<div class="bar bar-header-secondary">
			<div class="searchbar">
				<a class="searchbar-cancel">取消</a>
				<div class="search-input">
					<label class="icon icon-search" for="search"></label>
					<input type="search" id='search' placeholder='输入关键字...' />
				</div>
			</div>
		</div>
		<app-nav earthbuy-cur="active"></app-nav>
		<div class="content infinite-scroll infinite-scroll-bottom" data-distance="50">
			<div class="list-container row buybox">
			</div>
			<!-- 加载提示符 -->
			<div class="infinite-scroll-preloader">
				<div class="preloader"></div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				id: '',
				name: '',
        cart: JSON.parse(window.localStorage.getItem("cart"))?JSON.parse(window.localStorage.getItem("cart")).length:0
			}
		},
		mounted: function() {
			this.infinite();
			this.goodsdetail();
		},
		computed: {

		},
		methods: {
			goodsdetail: function() {
				$(document).on("click",".card",function(e){
					let id = $(e.currentTarget).data("id")
					window.location.href="goodsdetail?id="+id;
				})
			},
			infinite: function() {

				this.$http.get("mock/earthbuyList").then(res => {
					    this.$store.state.data=res.data.list;
					    let d = this.$store.state.data;

						// 加载flag
						var loading = false;
						// 最多可加载的条目
						var maxItems = 17;
						// 每次加载添加多少条目
						var itemsPerLoad = 4;
						function addItems(number, lastIndex) {
							// 生成新条目的HTML
							var html = '';
							for(var i = lastIndex + 0; i <= lastIndex + number; i++) {

								var newslist = d[i];
								html += `<div class="card demo-card-header-pic col-50" data-id="${newslist.id}">
											<div valign="bottom" class="card-header color-white no-border no-padding">
												<img src="${newslist.proimg}" width="100%">
											</div>
											<div class="card-content">
										      <div class="card-content-inner">
										        <p>${newslist.protitle}</p>

										      </div>
										    </div>
											<div class="card-footer">
										      <div class="link price">￥<span>${newslist.proprice}</span></div>
										      <p class="link">${newslist.buyednum}人付款</p>
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
		padding: .5rem
	}

	* {
		touch-action: pan-y;
	}
  .bar{
  .pull-right{
    margin-right: .25rem;
  }
  }
  .badge{
    position: absolute;
    top: .1rem;
    left: 50%;
    z-index: 100;
    height: .8rem;
    min-width: .8rem;
    padding: 0 .2rem;
    font-size: .6rem;
    line-height: .8rem;
    color: #fff;
    vertical-align: top;
    background: red;
    border-radius: .5rem;
    margin-left: .1rem;
  }

</style>
