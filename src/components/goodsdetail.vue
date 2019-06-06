<template>
	<div>
		<header class="bar bar-nav">
      <a class="button button-link button-nav pull-left back" data-transition='slide-out'>
        <span class="icon icon-circle-left"></span>
      </a>
			<h1 class="title">商品详情</h1>
      <a class="button button-link button-nav pull-right" href="" data-transition='slide-out'>
        <span class="icon icon-cart"></span>
      </a>

		</header>
		<app-buynav></app-buynav>
		<div class="content">
			<div class="content">
				<!-- Slider -->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in detail.proimg"><img :src="item.img" alt=""></div>
					</div>
				</div>
				<div class="proprice">
					<span>￥</span>{{detail.proprice}}<span>起</span>
					<p>30天热卖{{detail.salednum}}件</p>
				</div>
				<div>{{detail.protitle}}</div>
				<div class="row">
					<div class="col-50">{{detail.prised}}人赞过</div>
					<div class="col-50">帮我选</div>
				</div>
				<div>
					50000件爆款，限时降价，一件包邮
				</div>
				<div class="sendpro">发货：<span class="icon icon-location">{{detail.province}}{{detail.city}}</span> | 快递：免运费 月销{{detail.salednum}}+</div>
				<div class="list-block">
					<ul>
						<li class="item-content item-link">
							<div class="item-media">服务</div>
							<div class="item-inner">
								<div class="item-title">商品名称</div>
							</div>
						</li>
						<li class="item-content item-link">
							<div class="item-media">选择</div>
							<div class="item-inner">
								<div class="item-title">型号</div>
							</div>
						</li>
						<li class="item-content item-link">
							<div class="item-media">参数</div>
							<div class="item-inner">
								<div class="item-title">品牌、尺码</div>

							</div>
						</li>
					</ul>
				</div>
				<div class="list-block">
					<ul>
						<li class="item-content item-link">
							<div class="item-media">宝贝评价(2535)</div>
							<div class="item-inner">
								 <div class="item-title"></div>
								<div class="item-after">查看全部</div>
							</div>
						</li>
					</ul>
				</div>

				<div class="discuss">
					<span>质量不错(234)</span>
					<span>很舒适(211)</span>
					<span>很划算(160)</span>
					<span>布料好(55)</span>
					<div class="user"><img :src="detail.header">{{detail.user}}</div>
					<p>{{detail.discuss}}</p>
				</div>
				<div class="list-block">
					<ul>
						<li class="item-content item-link">
							<div class="item-media">买家相册(5) </div>
							<div class="item-inner">
								<div class="item-title"></div>
								<div class="item-after">查看全部</div>
							</div>
						</li>
					</ul>
				</div>
				<ul class="user-photos">
					<li v-for="item in detail.userimg"><img :src="item.img"></li>
				</ul>
				<p>{{detail.id}}</p>
				<p>{{detail.buyednum}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				details: this.$store.state.detail
			}
		},
		created: function() {

		},
		computed: mapGetters([
			'detail'
		]),
		methods: mapActions([
			//			'increment',
			//			'decrement',
			//			'incrementIfOdd',
			//			'incrementAsync',
			//			'vuexjson',
			//			'checkbox'
		]),
		mounted: function() {
			this.$store.dispatch('vuexjson');
			$(function() {
				$(".swiper-container").swiper({
					pagination: '.swiper-pagination',
					observer: true,
					observeParents: true
				});
			});

			//		var mySwiper = new swiper('.swiper-container',{
			//						pagination: '.swiper-wp',
			//						dynamicBullets: true,
			//						observer: true,
			//						observeParents: true
			//		})
			//		mySwiper.reInit();
			//		 this.$store.dispatch('getJson');
			//			this.ajaxdata();
			//			this.add();
			//  		$(function() {
			//			  $(".swiper-container").swiper(
			//			  			{
			//		  				 	spaceBetween: 30,
			//		  				 	slidesPerView: 1,
			//							pagination : '.swiper-pagination',
			//			    			observer:true,
			//			    			observeParents:true
			//						}
			//			  		);
			//			});
		}
		//	methods: {
		//		back:function(){
		//			history.back(-1)
		//		},
		//		ajaxdata:function(){
		//			this.$http.get("mock/proDetail").then(res => {
		//				    JSON.parse(JSON.stringify(this.goodsdetail=res.data.detail));
		//					})
		//					.catch(err => {
		//						console.log(err);
		//					});
		//		},
		//		add:function(){
		//			let num = this.goodsdetail.buyednum;
		//			this.goodsdetail.buyednum=num+1
		//		}
		//	}
	}
</script>

<style lang="scss" scoped type="text/css">
	$bg:#fff;
	.content {
		background-color: $bg;
		padding: .5rem
	}
	.swiper-container{
		padding-bottom: 0;
	}
  .user-photos{
    display:flex;
    border-radius: .5rem;
    overflow: hidden;
    width:100%;
    margin: 0;
    padding: 0;
    flex-wrap: nowrap;
      li{
        list-style: none;
        img{
            width:100%;
            height: 100%;
         }
    }
  }
	.sendpro{
		font-size: .7rem;
		color: #ccc;
    .icon{
      vertical-align: text-top;
      width:7rem;
      text-overflow:ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .icon:before{
      margin-right: .3rem;
      font-size: .6rem;
      color: #999;
    }
	}
  .list-block{
    margin:.5rem 0;
    .item-title,.item-after,.item-media{
      font-size:.7rem;
    }
    .item-after{
      color:#EE5757;
    }
    .item-media {
      color:#999;
      margin-left: -.7rem;
    }
  }
	.discuss{
		span{
			font-size: .6rem;
			border-radius: .55rem;
			padding: .25rem;
			color: #fff;
			background: #FDA5A1;
			white-space: nowrap;
		}
		.user{
			margin-top: .5rem;
			img{
				border-radius: 50%;
				vertical-align: middle;
				margin-right: .3rem;
			}
		}
    p{
      font-size: .7rem;
      line-height: 1rem;
      color:#999
    }
	}
	.col-50{
		font-size: .7rem;
		color: #ccc;
		text-align: center;
	}
	.proprice{
		background: #f00;
		color: #fff;
		height: 3rem;
		font-size: 1rem;
		padding:0 .5rem;
		span{
			font-size: .6rem;
		}
		p{
			line-height: 1rem;
			margin: 0;
			padding: 0;
			font-size: .8rem;
		}
	}
	.swiper-slide {
		img {
			width: 100%
		}
	}
	* {
		touch-action: pan-y;
	}
</style>
