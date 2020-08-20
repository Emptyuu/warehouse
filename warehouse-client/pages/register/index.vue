<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎注册Emptyu</view>
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
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon">
						<u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon>
					</view>
					微信
				</view>
				<view class="QQ item">
					<view class="icon">
						<u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon>
					</view>
					QQ
				</view>
			</view>
			<view class="hint">
				注册代表同意
				<text class="link">Emptyuu用户协议、隐私政策，</text>
				注:如果您注册为本软件用户则代表您同意本用户协议及隐私政策
			</view>
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
						required: true,
						min: 11,
						max: 11,
						message: '请输入手机号',
						trigger: ['change', 'blur'],
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
						// this.$u.post('http://192.168.124.5:3000').then(res=>{
						// 	console.log(res)
						// })
						this.$u.post('/users/register', {
							username: this.form.username,
							phone: this.form.phone,
							password: this.form.password
						}).then(res => {
							console.log(res)
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
					// type:"reLaunch",
					url: 'pages/login/index',
				})
			}


		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	};
</script>

<style lang="scss" scoped>
	.wrap {
		height:100%;
		display: flex;
		flex-direction: column;
		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;
			flex: 1;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

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

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;

				.link {
					color: $u-type-warning;
				}
			}
		}
	}
</style>
