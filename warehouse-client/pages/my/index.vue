<template>
	<view>
		<view class="wrap">
			<u-navbar :is-back="false" title="　" :border-bottom="false">
				<view class="u-flex u-row-right" style="width: 100%;">
					<view class="camera u-flex u-row-center">
						<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
					</view>
				</view>
			</u-navbar>
			<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
				<view class="u-m-r-10">
					<u-avatar :src="pic" size="140"></u-avatar>
				</view>
				<view class="u-flex-1">
					<view class="u-font-18 u-p-b-20">uView ui</view>
					<view class="u-font-14 u-tips-color">微信号:helang_uView</view>
				</view>
				<view class="u-m-l-10 u-p-10">
					<u-icon name="scan" color="#969799" size="28"></u-icon>
				</view>
				<view class="u-m-l-10 u-p-10">
					<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
				</view>
			</view>

			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
				</u-cell-group>
			</view>

			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="star" title="收藏"></u-cell-item>
					<u-cell-item icon="photo" title="相册"></u-cell-item>
					<u-cell-item icon="coupon" title="卡券"></u-cell-item>
					<u-cell-item icon="heart" title="关注"></u-cell-item>
				</u-cell-group>
			</view>

			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="setting" title="设置"></u-cell-item>
					<u-cell-item icon="man-delete" style="color: #fa3534;" title="退出登录" @click="openExit"></u-cell-item>
				</u-cell-group>
			</view>
		</view>
		<u-tabbar v-model="$store.state.tabbar.current" :list="$store.state.tabbar.list"></u-tabbar>
		<u-modal v-model="model.show" content="是否确定要退出登录" show-confirm-button show-cancel-button confirm-text="退出"
		 cancel-text="取消" confirm-color="red" @confirm="exitUser"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic: 'https://uviewui.com/common/logo.png',
				model: {
					show: false
				}
			}
		},
		onLoad() {

		},
		methods: {
			// 模态框显示
			openExit() {
				this.model.show = true;
			},
			// 确定退出
			exitUser() {
				uni.removeStorageSync('token');
				this.$u.route({
					type: "redirectTo",
					url: 'pages/login/index',
					params: {
						flag: 3,
					}
				}) 
				try {
					
				} catch (e) {
					// error
				}

			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}

	.user-box {
		background-color: #fff;
	}
</style>
