<template>
	<div class="box">
		<header class="bar bar-nav">
			<h1 class="title">我</h1>
		</header>
		<app-nav me-cur="active"></app-nav>
		<div class="content">
			<div class="buttons-tab">
				<a href="#tab1" class="tab-link button" :class="{'active':show}">注册</a>
				<a href="#tab2" class="tab-link button" :class="{'active':showtab}">登录</a>
			</div>
			<div class="list-block">
				<div class="tabs">
					<div id="tab1" class="tab" :class="{'active':show}">
						<ul>
							<li>
								<div class="item-content">
									<div class="item-media"><i class="icon icon-name"></i></div>
									<div class="item-inner">
										<div class="item-title label">姓名</div>
										<div class="item-input">
											<input type="text" placeholder="Your name" class="zc-name">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content">
									<div class="item-media"><i class="icon icon-form-email"></i></div>
									<div class="item-inner">
										<div class="item-title label">邮箱</div>
										<div class="item-input">
											<input type="email" placeholder="E-mail" class="zc-mail">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content">
									<div class="item-media"><i class="icon icon-form-password"></i></div>
									<div class="item-inner">
										<div class="item-title label">密码</div>
										<div class="item-input">
											<input type="password" placeholder="Password" class="zc-psw">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content">
									<div class="item-media"><i class="icon icon-form-password"></i></div>
									<div class="item-inner">
										<div class="item-title label">再次密码</div>
										<div class="item-input">
											<input type="password" placeholder="Password" class="zc-psw-again">
										</div>
									</div>
								</div>
							</li>
						</ul>
						<div class="content-block">
							<div class="row">
								<div class="col-100">
									<a href="#" class="button button-big button-fill " @click="signin">注册</a>
								</div>
							</div>
						</div>
					</div>
					<div id="tab2" class="tab" :class="{'active':showtab}">
						<ul>
							<li>
								<div class="item-content">
									<div class="item-media"><i class="icon icon-form-name"></i></div>
									<div class="item-inner">
										<div class="item-title label">姓名</div>
										<div class="item-input">
											<input type="text" placeholder="Your name" class="dl-name">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content">
									<div class="item-media"><i class="icon icon-form-password"></i></div>
									<div class="item-inner">
										<div class="item-title label">密码</div>
										<div class="item-input">
											<input type="password" placeholder="Password" class="dl-psw">
										</div>
									</div>
								</div>
							</li>
						</ul>
						<div class="content-block">
							<div class="row">
								<div class="col-100">
									<a href="#" class="button button-big button-fill button-success" @click="login">登录</a>
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
				email: 'admin@admin.com',
				name: 'admin',
				pass: 'admin888',
				show: true,
				showtab: false
			}
		},
		mounted: function() {

		},
		computed: {
			isShow() {
				return this.$store.getters.isShow;

			}
		},
		watch: { 
			$route(to, from) {
				console.log(to)
				if(to.name === 'me') {
					this.$store.dispatch('showFooter')
				} else {
					this.$store.dispatch('hideFooter')
				}
			}
		},
		methods: {
			login: function() {
				let nameval = $(".dl-name").val(),
					psval = $(".dl-psw").val(),
					_this = this;
				if(nameval === this.name && psval === this.pass) {
					$.alert("登录成功！", function() {
						if(!window.localStorage) {
							$.alert("浏览器不支持localstorage");
							return false;
						} else {
							let storage = window.localStorage;
							storage.setItem("name", _this.name);
							storage.setItem("pass", _this.pass);
							console.log(typeof storage["name"]);
							console.log(typeof storage["pass"]);
						}
						window.location.href = "logined";
					})
				} else {
					$.alert("用户密码不正确！", function() {
						$(".dl-name").val("");
						$(".dl-psw").val("")
					})
				}
			},
			signin: function() {
				let _this = this;
				let mailval = $(".zc-mail").val(),
					nameval = $(".zc-name").val(),
					psval = $(".zc-psw").val(),
					psagval = $(".zc-psw-again").val(),
					emailReg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),
					nameReg = new RegExp("^([\\u4e00-\\u9fa5]{1,20}|[a-zA-Z\\.\\s]{1,20})$"),
					/**
					 * 1.可以是中文
					   2.可以是英文，允许输入点（英文名字中的那种点）， 允许输入空格
			           3.中文和英文不能同时出现
			           4.长度在20个字符以内
					 */
					psReg = new RegExp("^(?!\\d+$|[a-zA-Z]+$)\\w{8,}$")
				/**
				 * 密码至少包含字母，数字，且不少于8位
				 */
				if(nameval === "") {
					$.toast("姓名不能为空")
				} else if(!nameReg.test(nameval)) {
					$.toast("姓名格式不正确")
				} else if(nameval === this.name) {
					$.toast("该姓名已经被注册")
				} else if(mailval === "") {
					$.toast("E-mail不能为空")
				} else if(!emailReg.test(mailval)) {
					$.toast("E-mail格式不正确")
				} else if(mailval === this.email) {
					$.toast("该E-mail已经被注册")
				} else if(psval === "") {
					$.toast("密码不能为空")
				} else if(!psReg.test(psval)) {
					$.toast("密码格式不正确")
				} else if(psval !== psagval) {
					$.toast("两次密码不一致")
				} else {
					$.alert("注册成功！", function() {
						_this.show = false;
						_this.showtab = true
					})
				}

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
