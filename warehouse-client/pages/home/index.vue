<template>
	<view>
		<view class="wrap"> 
			<view class="enterprise">
			<view class="status_bar"></view>
				<view class="info">
					<view class="title">
						<text>{{$store.state.user.info.company}}</text>
						<u-icon name="list" class="fun" @click="showfunList"></u-icon>
					</view>
					<view class="outbound">
						<view class="money">
							<p class="tit">今日收入</p>
							<text class="result">0.00</text>
						</view>
						<view class="storenum">
							<p class="tit">今日销售</p>
							<text class="result">10辆</text>
						</view>
					</view>
				</view>
			</view>
			<view class="wordbench">
				<view class="store">
					<u-icon class="icon" name="shopping-cart-fill"></u-icon>
					<p class="tit">库存</p>
				</view>
				<view class="store">
					<u-icon class="icon" name="photo"></u-icon>
					<p class="tit">销售	</p>
				</view>
				<view class="store">
					<u-icon class="icon" name="grid-fill"></u-icon>
					<p class="tit">等待开发</p>
				</view>
				<view class="store">
					<u-icon class="icon" name="grid-fill"></u-icon>
					<p class="tit">等待开发</p>
				</view>
				<view class="store">
					<u-icon class="icon" name="grid-fill"></u-icon>
					<p class="tit">等待开发</p>
				</view>
			</view>
		</view>
		<u-tabbar v-model="$store.state.tabbar.current" :list="$store.state.tabbar.list"></u-tabbar>
		<view class="funlistmask" :style="funlist?'display:block;':'display:none;'" @click="mengban">
			<TitleList class="list" :show="funlist" @click="funlist = true"></TitleList>
		</view>
	</view>
</template>

<script>
	import TitleList from './components/titlelist.vue'
	export default {
		components: {
			TitleList
		},
		data() {
			return {
				funlist: false,
				// userinfo:{}
			}
		},
		methods: {
			showfunList() {
				this.funlist = true
			},
			mengban() {
				this.funlist = false
			}
		},
		onReady() {
			this.$u.UserApi.GetHomeInfo().then(res=>{
				this.$store.state.user.info = res.data
			})
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		// height: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;

		.enterprise {
			width: 100%;
			background-color: #eee;
			// overflow: hidden;
			padding-bottom: 30rpx;

			.info {
				.title {
					position: relative;
					width: 100%;
					text-align: center;
					padding: 30rpx 0;
					font-size: 36rpx;
					.fun {
						position: absolute;
						top: 0;
						bottom: 0;
						right: 40rpx;
					}
				}

				.outbound {
					display: flex;
					align-items: center;
					justify-content: space-around;
					padding: 20rpx 0;

					.tit {
						margin-bottom: 20rpx;

						.result {
							font-size: 12rpx;
						}
					}
				}
			}
		}

		.wordbench {
			flex: 1;
			width: 100%;
			display: flex;
			// align-items: center;
			// justify-content: space-between;
			flex-wrap: wrap;
			padding: 70rpx 0;

			.store {
				width: 250rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				padding: 30rpx;
				.icon {
					font-size: 70rpx;
					text-align: center;
				}
				.tit{
					margin-top: 25rpx;
					font-size: 26rpx;
				}
			}
		}
	}

	.funlistmask {
		z-index: 99;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		// background-color: #EEE;
		.list {
			position: absolute;
			top: 96rpx;
			margin-top: var(--status-bar-height);
			right: 20rpx; 
		}
	}
</style>
