<template>
	<TopText title="上午好,领航员"></TopText>
	<view>
		<u-popup :show="isRegister" mode="bottom">
			<view class="show-button"
				style="width: 80vw;margin-left: 10vw;text-align: center;display: flex;flex-direction: column;">
				<view style="height: 200rpx"></view>
				<text class="popup-h2-text">增加您的信用点账户</text>
				<text class="popup-h2-text" style="margin-bottom: 50rpx;">到YXG客户端上</text>
				<text>我们正在尽力增加功能。</text>
				<text style="margin-bottom: 50rpx;">现在您可以怎加您的账户到YXG客户端上</text>
				<button class="button-purple-back-white-text" @click="addCard">增加</button>
				<button class="button-white-back-purple-text" @click="skipTemporarilyFn">暂时跳过</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: {
			isRegister: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			skipTemporarilyFn() {
				this.$emit('parentSkipTemporarily')
			},
			addCard() {
				uni.navigateTo({
					url: "/pages/addCard"
				})
			}
		}

	}
</script>

<style>
	.popup-h2-text {
		font-weight: bold;
		font-size: 40rpx;
		text-align: center;
	}
</style>