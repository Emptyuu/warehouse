<template>
	<view>
		<!-- //不显示任何内容，仅用来进行实例化操作 -->
		<!-- <view class=""> -->
		<!-- <view class="status_bar"> -->
		<!-- 这里是状态栏 -->
		<!-- </view>
		<view class="userInfo">
			<u-avatar :src="src" mode="square"></u-avatar>
		</view>
		<view class="list">
		</view> -->
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			uni.hideTabBar()
			// if(){

			// }
		},
		methods: {

		},
		onReady() {
			console.log(this.$store.state.tabbar.current)

			// console.log(this.$store.state.tabbar.list)
			uni.getStorage({
				key: 'token'
			}).then(res => {
				if (res[1]) {
					let token = res[1].data
					console.log(this.$u.api)
					this.$u.UserApi.VerifyToken({
						token
					}).then(result => {
						console.log(result)
						switch (result.code) {
							case 200:
								this.$u.route({
									type: "reLaunch",
									url: 'pages/home/index',
								})
								break;
							case 400:
								this.$u.route({
									url: 'pages/login/index',
									params: {
										flag: 1
									}
								})
								break;
						}
					})
				} else {
					this.$u.route({
						type:"redirectTo",
						url: 'pages/login/index',
					})
				}
			})
		},
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: green;
	}
</style>
