<template>
	<div class="page-group">
		<div class="page page-current">
			<header class="bar bar-nav">
				<h1 class="title">新闻</h1>
			</header>
			<app-nav news-cur="active"></app-nav>
			<div class="content">
				<div class="buttons-tab">
					<a href="#tab1" class="tab-link active button">全部</a>
					<a href="#tab2" class="tab-link button">待付款</a>
					<a href="#tab3" class="tab-link button">待发货</a>
				</div>
				<div style="margin-top: 1.5rem;" class="content pull-to-refresh-content" data-ptr-distance="55">
					<!-- 默认的下拉刷新层 -->
					<div class="tabs">
						<div id="tab1" class="tab active">
							<div class="pull-to-refresh-layer">
								<div class="preloader"></div>
								<div class="pull-to-refresh-arrow"></div>
							</div>
							<div class="content-padded msg-list">

								<div class="row msg-box open-detail" v-for="(item, index) in list" @click="detail(item.title,item.content,item.time)">
									<div class="col-40">
										<img :src="item.pic" alt="" />
									</div>
									<div class="col-60">
										<h4>{{ item.title }}</h4>
										<p>{{ item.disp }}</p>
										<p class="row"><span class="col-60 time">{{ item.time }}</span><span class="col-40"><button class="button button-round button-fill" v-if="show" @click.stop="del(index,1)">删除</button></span></p>
									</div>
								</div>

							</div>
						</div>
						<div id="tab2" class="tab">
							<div class="pull-to-refresh-layer">
								<div class="preloader"></div>
								<div class="pull-to-refresh-arrow"></div>
							</div>
							<div class="content-padded msg-list">
								<div class="row msg-box open-detail" v-for="(item, index) in mlist" @click="detail(item.title,item.content,item.time)">
									<div class="col-40">
										<img :src="item.pic" alt="" />
									</div>
									<div class="col-60">
										<h4>{{ item.title }}</h4>
										<p>{{ item.disp }}</p>
										<p class="row"><span class="col-60 time">{{ item.time }}</span><span class="col-40"><button class="button button-round button-fill" v-if="show" @click.stop="del(index,2)">删除</button></span></p>
									</div>
								</div>
							</div>
						</div>
						<div id="tab3" class="tab">
							<div class="pull-to-refresh-layer">
								<div class="preloader"></div>
								<div class="pull-to-refresh-arrow"></div>
							</div>
							<div class="content-padded msg-list">
								<div class="row msg-box open-detail" v-for="(item, index) in slist" @click="detail(item.title,item.content,item.time)">
									<div class="col-40">
										<img :src="item.pic" alt="" />
									</div>
									<div class="col-60">
										<h4>{{ item.title }}</h4>
										<p>{{ item.disp }}</p>
										<p class="row"><span class="col-60 time">{{ item.time }}</span><span class="col-40"><button class="button button-round button-fill" v-if="show" @click.stop="del(index,3)">删除</button></span></p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: 'admin',
				list: [],
				mlist: [],
				slist: [],
				show: false
			}
		},
		mounted: function() {

			this.loadmore();
			this.secloadmore();
			this.thrloadmore();
			

			var _this = this;
			$(document).on('refresh', '.pull-to-refresh-content', function(e) {
				// 模拟2s的加载过程

				setTimeout(function() {
					_this.pullrefresh();
					// 加载完毕需要重置
					$.pullToRefreshDone('.pull-to-refresh-content');
				}, 2000);
			});
		},
		methods: {
			add:function(){
				this.num=this.num+this.add
			},
			del: function(id,num) {
				if(num == 1){
					let listdata = this.list;
					$.confirm('是否删除数据？', function() {
						this.list = listdata.splice(id, 1, );
					})
				}else if(num == 2){
					let listdata = this.mlist;
					$.confirm('是否删除数据？', function() {
						this.mlist = listdata.splice(id, 1, );
					})
				}else if(num == 3){
					let listdata = this.slist;
					$.confirm('是否删除数据？', function() {
						this.slist = listdata.splice(id, 1, );
					})
				}
			},
			detail: function(tit, con, time) {
				var popupHTML =
					`<div class="popup">
						<header class="bar bar-nav">
						    <a class="button button-link button-nav pull-left"  data-transition='slide-out'>
						      <span class="icon icon-circle-left close-popup"></span>
						      返回
						    </a>
						    <h1 class="title">` + tit + `</h1>

					  	</header>
					  	<div class="content">

						  	<div class="content-block">
						  		 <b>` + time + `</b>
								 <p>` + con + `</p>
								 <p>` + con + `</p>
								 <p>` + con + `</p>
								 <p>` + con + `</p>
							</div>
						</div>
                     </div>`
				$.popup(popupHTML);
			},

			loadmore: function() {
				let storage = window.localStorage;
				if(storage.getItem("name") === this.name) {
					this.show = true;
				}
				this.$http.get("mock/newsList").then(res => {
						this.list = this.list.concat(res.data.list);
						//						this.list.push(res.data.list)
					})
					.catch(err => {
						console.log(err);
					});
			},
			secloadmore: function() {
				let storage = window.localStorage;
				if(storage.getItem("name") === this.name) {
					this.show = true;
				}
				this.$http.get("mock/mList").then(res => {
						this.mlist = this.mlist.concat(res.data.list);
						//						this.list.push(res.data.list)
					})
					.catch(err => {
						console.log(err);
					});
			},
			thrloadmore: function() {
				let storage = window.localStorage;
				if(storage.getItem("name") === this.name) {
					this.show = true;
				}
				this.$http.get("mock/mList").then(res => {
						this.slist = this.slist.concat(res.data.list);
						//						this.list.push(res.data.list)
					})
					.catch(err => {
						console.log(err);
					});
			},
			pullrefresh: function() {
				this.$http.get("mock/newsList").then(res => {
						var list = {};
						var arr = res.data.list;
						for(var key in arr) {
							list[key] = arr[key];
							this.list.splice(0, 0, list[key]);
						}
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
	.time {
		margin: .2rem 0 0 0;
	}

	.buttons-tab {
		z-index: 2;
	}

	html {
		touch-action: manipulation;
	}

	* {
		touch-action: pan-y;
	}

	.content {
		background-color: $bg;
	}

	.msg-list img {
		width: 100%;
	}

	.icon-link .col-25 {
		text-align: center;
	}

	.popup-overlay.modal-overlay-visible {
		display: none;
	}

	.icon-link img {
		width: 80%;
	}

	.icon-link p {
		line-height: .1rem;
		font-size: .7rem;
		color: #555;
	}

	.msg-title {
		font-size: .8rem;
		font-weight: 400;
		background: url("../assets/msg-title-icon.gif") no-repeat;
		text-indent: 1rem;
		background-size: .8rem;
		line-height: .8rem
	}

	.msg-box {
		border-bottom: 1px solid #efefef;
		padding: .5rem 0;
	}

	.msg-box>.col-60>h4 {
		margin: 0;
		padding: 0;
		font-weight: 400;
		font-size: .8rem;
		color: #000;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.msg-box>.col-40>img {
		float: left;
		border: 1px solid #efefef;
	}

	.msg-box>.col-60>p {
		margin: .5rem 0 0 0;
		padding: 0;
		font-weight: 400;
		font-size: .7rem;
		color: #555;
	}
</style>
