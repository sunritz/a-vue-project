<template>
	<div class="box">
		<header class="bar bar-nav">
			<div class="searchbar">
				<a class="searchbar-cancel">取消</a>
				<div class="search-input">
					<label class="icon icon-search" for="search"></label>
					<input type="search" id='search' placeholder='宝宝感冒了怎么办...' />
				</div>
			</div>
		</header>
		<app-nav index-cur="active"></app-nav>
		<div class="content">
			<!-- Slider -->
			<div class="swiper-container" data-space-between='0' data-autoplay='2000'>
				<div class="swiper-wrapper">
					<div class="swiper-slide"><img src="../assets/banner.jpg" alt=""></div>
					<div class="swiper-slide"><img src="../assets/banner2.jpg" alt=""></div>
					<div class="swiper-slide"><img src="../assets/banner3.jpg" alt=""></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>

			<div class="content-padded grid-demo icon-link sprite-icon">
				<div class="row">
					<div class="col-25">
						<div class="icon-1"></div>
						<p>营养膳食</p>
					</div>
					<div class="col-25">
						<div class="icon-2"></div>
						<p>智力开发</p>
					</div>
					<div class="col-25">
						<div class="icon-3"></div>
						<p>品德教育</p>
					</div>
					<div class="col-25">
						<div class="icon-4"></div>
						<p>习惯培养</p>
					</div>
				</div>
				<div class="row">
					<div class="col-25">
						<div class="icon-5"></div>
						<p>性格养成</p>
					</div>
					<div class="col-25">
						<div class="icon-6"></div>
						<p>亲子互动</p>
					</div>
					<div class="col-25">
						<div class="icon-7"></div>
						<p>专家在线</p>
					</div>
					<div class="col-25">
						<div class="icon-8"></div>
						<p>儿科疾病</p>
					</div>
				</div>
			</div>

			<div class="content-padded  msg-list">
				<h3 class="msg-title">消息推送</h3>
				<div class="row msg-box" v-for="(item, index) in list">
					<div class="col-40">
						<img :src="item.pic" alt="" @click="del(index)" />
					</div>
					<div class="col-60">
						<h4>{{ item.title }}</h4>
						<p>{{ item.disc }}</p>
					</div>
				</div>
				<p>
					<a href="#" class="button button-big" v-on:click="loadmore">加载更多</a>
				</p>
			</div>

		</div>

	</div>
</template>

<script>
	import pic4 from '../assets/pic1.jpg'
	import pic5 from '../assets/pic2.jpg'
	export default {
		name: 'carindex',
		data() {
			return {
				id: '',
				name: '',
				list: [{
					"title": "根据传入的id获取到这个要删除数据",
					"pic": pic4,
					"disc": "调用list.findIndex()方法，根据传入的id获取到这个要删除数据的索引值"
				}, {
					"title": "根据传入的id获取到这个要删除数据",
					"pic": pic5,
					"disc": "调用list.findIndex()方法，根据传入的id获取到这个要删除数据的索引值"
				}]
			}
		},
		methods: {
			
			add: function() {
				//包装成list要求的对象
				var tem = {
					id: this.id,
					name: this.name,
					time: new Date()
				};
				//将tem追加到list数组中
				this.list.push(tem);
				//清空页面上的文本框中的数据
				this.id = "";
				this.name = "";
			},
			loadmore: function() {
				this.$http.get("mock/indexList").then(res => {
						this.list = this.list.concat(res.data.list);
						//						this.list.push(res.data.list)
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	}
	$(function() {
		$.init();
	});
</script>
<style lang="scss" scoped type="text/css">
	$bg:#fff;
	header.bar {
		background-color: #9bcb67;
		color: #fff;
	}
	
	.bar .searchbar .searchbar-cancel {
		color: $bg;
	}
	
	.content {
		background-color: $bg;
	}
	
	.swiper-pagination-bullet-active {
		background-color: #9bcb67;
	}
	
	.swiper-wrapper>.swiper-slide>img {
		width: 100%;
	}
	
	.msg-list img {
		width: 100%;
	}
	
	.icon-link .col-25 {
		text-align: center;
	}
	
	.icon-link img {
		width: 80%;
	}
	
	.icon-link p {
		line-height: .1rem;
		font-size: .7rem;
		color: #555;
	}
	
	.sprite-icon>.row .col-25>div {
		width: 3rem;
		height: 3rem;
		background-image: url("../assets/icon-csssprite.png");
		background-size: 100%;
		position: relative;
		overflow: hidden;
		margin: 0 auto;
	}
	
	$iconNum:8!default;
	$iconPos:-3rem!default
	@for $i from 1 through $iconNum {
		.icon-#{$i} {		
			background-position:0 $iconPos * ($i - 1);
		}
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
	
	.bar {
		background-color: #fff;
		border-top: 1px solid #c5c5c5;
	}
	/*svg sprite*/
	
	.bar-tab svg {
		width: 1rem;
		height: 1rem;
		fill: #999;
	}
	
	.bar-tab>.active svg {
		fill: #9bcb67;
	}
	/*svg sprite*/
</style>