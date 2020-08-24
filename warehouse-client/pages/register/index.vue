<template>
	<view class="wrap">
		<view class="status_bar"></view>
		<view class="title">欢迎注册Emptyu</view>
		<view class="content">
			<u-form :model="form" ref="uForm" label-width="130">
				<u-form-item label="手机号" prop="phone">
					<u-input v-model="form.phone" />
				</u-form-item>
				<u-form-item label="姓名" prop="username">
					<u-input v-model="form.username" />
				</u-form-item>
				<u-form-item label="密码" prop="password">
					<u-input v-model="form.password" type="password" :password-icon="true" />
				</u-form-item>
				<u-form-item label="确认密码" prop="repassword">
					<u-input v-model="form.repassword" type="password" :password-icon="true" />
				</u-form-item>
			</u-form>
			<view class="tips">请认真填写信息哦！</view>
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">确认注册</button>
			<view class="alternative">
				<view class="password" @tap="goLogin">前往登录</view>
				<view class="issue">遇到问题</view>
			</view>
		</view>
		<view class="agreement">
			注册代表同意
			<text class="link">Emptyuu用户协议、隐私政策，</text>
			注:如果您注册为本软件用户则代表您同意本用户协议及隐私政策
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					phone: '18021041067',
					username: '汉朝强',
					password: '18021041066',
					repassword: '18021041066'
				},
				rules: {
					phone: [{
						min: 11,
						max: 11,
						type: "number",
						message: '请输入正确手机号',
						trigger: ['blur'],
					}, {
						required: true,
						message: '手机号不可为空',
						trigger: ['change', 'blur']
					}],
					password: [{
						required: true,
						min: 6,
						max: 16,
						message: '密码在6-16位之间',
						trigger: ['change', 'blur']
					}],
					username: [{
						required: true,
						min: 2,
						max: 5,
						message: '名字应在2-5位之间',
						trigger: ['change', 'blur']
					}],
					repassword: [{
						required: true,
						trigger: ['change', 'blur'],
						asyncValidator: (rule, value, callback) => {
							if (value != this.form.password) {
								callback(new Error('两次密码不同'));
							} else {
								callback();
							}
						}
					}]

				}
			}
		},
		computed: {
			inputStyle() {
				let style = {};
				if (this.form.phone) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			submit() {
				// if (this.$u.test.mobile(this.phone)) {
				// 	this.$u.route({
				// 		url: 'pages/template/login/code'
				// 	})
				// }
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.$u.UserApi.Userregister({
							username: this.form.username,
							phone: this.form.phone,
							password: this.form.password
						}).then(res => {
							if (res.code == 200) {
								this.goLogin()
							}
						}).catch(res => {
							console.log(res)
						})
					} else {
						console.log('验证失败');
					}
				});
			},
			goLogin() {
				// console.log(this.$u.route)
				this.$u.route({
					type: "navigateBack",
					url: 'pages/login/index',
					params: {
						flag: 2
					}
				})
			}


		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {
			uni.hideTabBar()
		}
	};
</script>

<style lang="scss" scoped>
	.wrap {
		height: 100%;
		display: flex;
		flex-direction: column;
		font-size: 28rpx;

		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 70rpx;
			padding: 20rpx 40rpx;
		}

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;
			flex: 1;

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}

			.tips {
				color: $u-type-info;
				margin-bottom: 60rpx;
				margin-top: 8rpx;
			}

			.getCaptcha {
				background-color: rgb(253, 243, 208);
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.agreement {
			height: 100rpx;
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;

			.link {
				color: $u-type-warning;
			}
		}
	}
</style>
