<template>
	<view>
		<view class="wrap" @click.stop="" ref="group">
			<view class="list">
				<view class="cell">
					<u-icon class="icon" name="photo"></u-icon>
					<text class="title">等待开发</text>
				</view>
				<view class="cell">
					<u-icon class="icon" name="photo"></u-icon>
					<text class="title">等待开发</text>
				</view>
				<view class="cell">
					<u-icon class="icon" name="photo"></u-icon>
					<text class="title">等待开发</text>
				</view>
			</view>
			<u-icon class="jiao" name="arrow-up-fill"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			show: Boolean
		},
		methods: {},
		watch: {
			show: {
				handler(oldV,newV){
					if(oldV){
						// 框框展示动画
						// console.log(this.$refs.group.$el.style.height = "800px")
					}
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		color: white;
		border-radius: 12rpx;
		// width: 300rpx;
		// height: 500rpx;
		background-color: #4C4C4C;
		padding: 0 30rpx;

		.cell {
			display: flex;
			align-items: center;
			padding: 20rpx 0;

			.icon {
				font-size: 40rpx;
				padding-right: 30rpx;
			}

			.title {
				height: 50rpx;
				line-height: 50rpx;
				font-size: 30rpx;
			}
		}

		.jiao {
			position: absolute;
			font-size: 40rpx;
			right: 15rpx;
			top: -18rpx;
			color: #4c4c4c;
		}
	}
</style>
