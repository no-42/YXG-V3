<template>
	<view class="view-type-item">
		<view class="view-item-top-style">
			<u-image :src="itemInfo.img"  width="100%" height="100%"></u-image>
		</view>
		<view class="view-item-buttom-style">
			<view style="padding: 20rpx;height: 100%;">
				<u-row style="margin-top: -50rpx;" justify="end">
					<view class="scroll-item-icon-style">
						<u-icon size="18" name="share"></u-icon>
					</view>
					<view class="scroll-item-icon-style" style="margin-left: 10rpx;">
						<u-icon size="18" name="heart"></u-icon>
					</view>
				</u-row>
				<view style="height: 90%;display: flex;flex-direction: column;justify-content: space-evenly;">
					<view>
						<u-row>
							<u-text color="rgba(141, 152, 175, 1)" size="13" :text="itemInfo.mallName"></u-text>
						</u-row>
						<u-row>
							<u-col span="8" style="margin-bottom: 10rpx;"><u-text color="rgba(0, 0, 0, 1)" :bold="true" :text="itemInfo.name"></u-text></u-col>
							<u-col span="4"><u-text prefixIcon="./img/priceChanges.png" size="18px" color="rgba(10, 178, 125, 1)" bold="true" :text="itemInfo.finalPrice"></u-text></u-col>
						</u-row>
					</view>
					<view>
						<u-row justify="space-between">
							<u-col span="7">
								<text class="time-show-style">
									{{itemInfo.endTime}}
								</text>
							</u-col>
							<u-col span="4">
								<button class="scroll-item-button-style">出价</button>
							</u-col>
						</u-row>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			itemInfo: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style>
	.scroll-item-button-style {
		border-radius: 16px;
		background: rgba(93, 95, 239, 1);
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
		font-size: 10px;
		color: rgba(255, 255, 255, 1);
		text-align: center;
	}
	
	.scroll-item-icon-style {
		border-radius: 50rpx;
		background-color: white;
		padding: 10rpx;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25)
	}

	.view-type-item {
		width: 500rpx;
		height: calc(500rpx*1.1);
	}

	.view-type-item-all-vw {
		width: 100vw;
		height: calc(100vw*1.1);
	}

	.view-item-top-style {
		background-color: aquamarine;
		width: 100%;
		height: 60%;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.view-item-buttom-style {
		background-color: white;
		width: 100%;
		height: 60%;
		border-radius: 20px;
		margin-top: -20%;
		z-index: 10000;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
	}

	.time-show-style {
		font-size: 10px;
		border-radius: 16px;
		background: rgba(239, 239, 253, 1);
		border-color: rgba(93, 95, 239, 1);
		color: rgba(93, 95, 239, 1);
		text-align: center;
		vertical-align: middle;
		padding: 10rpx;
	}
</style>