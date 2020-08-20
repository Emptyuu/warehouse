<template>
	<view class="wrap">
		<view class="status_bar"></view>
		<view class="title">欢迎登录Emptyu</view>
		<view class="loginCon">
			<view class="imgHeader">
				<u-avatar text="韩" size="150" bg-color="#eee"></u-avatar>
			</view>
			<u-form :model="form" ref="uForm" label-width="130">
				<u-form-item label="手机号" prop="phone">
					<u-input v-model="form.phone" />
				</u-form-item>
				<u-form-item label="密码" prop="password">
					<u-input v-model="form.password" type="password" :password-icon="true" />
				</u-form-item>
			</u-form>
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">确认登录</button>
			<view class="alternative">
				<view class="password" @tap="goRegister">前往注册</view>
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
					phone: "",
					password: ""
				},
				rules: {
					phone: [{
						required: true,
						message: '请输入正确的手机号',
						max: 11,
						min: 11,
						trigger: ['blur'],
					}],
				}
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			goRegister() {
				// console.log(this.$u.route)
				this.$u.route({
					type:"reLaunch",
					url: 'pages/register/index',
				})
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
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>
<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.title {
		text-align: left;
		font-size: 60rpx;
		font-weight: 500;
		margin-bottom: 100rpx;
		padding: 20rpx 40rpx;
	}

	.loginCon {
		flex: 1;
		padding: 20rpx 40rpx;

		.imgHeader {
			text-align: center;
			padding-bottom: 100rpx;
		}

		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}

		.getCaptcha {
			margin-top: 60rpx;
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;

			&::after {
				border: none;
			}
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
</style>
