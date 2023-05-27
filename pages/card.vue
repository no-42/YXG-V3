<template>
	<view>
		<view>
			<view style="margin: 50rpx;">
				<u-text class="logo-text" size="25" :bold="true" text="您的信用点卡"></u-text>
			</view>
			<u-line length="10%" color="rgb(255,126,118)" margin="50rpx" :hairline="true"></u-line>
		</view>
		<view class="show-button show-body-only">
			<view v-for="item in card">
				<view class="card-view-item">
					<u-row>
						<u-col span="1"></u-col>
						<u-col span="11">
							<text style="font-weight: bold;">{{item.cardName}}</text>
						</u-col>
					</u-row>
					<u-row>
						<text>{{item.cardNo}}</text>
					</u-row>
					<u-row>
						<u-col span="4"><text>{{item.memberName}}</text></u-col>
						<u-col span="4"><text>{{item.endTime}}</text></u-col>
						<u-col span="4"></u-col>
					</u-row>
				</view>
			</view>
			<button class="button-white-back-purple-text" @click="addCard">增加新的信用点卡</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				card: [{
					cardName: "福州信用点发行中心",
					cardNo: "123456",
					memberName: "Jayyou",
					endTime: "12/58"
				}, {
					cardName: "Jay信用点发行中心",
					cardNo: "123456243512",
					memberName: "Jayyou",
					endTime: "12/58"
				}]
			}
		},
		methods: {
			addCard(e) {
				uni.navigateTo({
					url: "/pages/addCard"
				})
			}
		}
	}
</script>

<style>
	.card-view-item {
		padding-left: 5vw;
		margin-top: 20rpx;
		margin-bottom: 40rpx;
		padding: 40rpx;
		/* width: 80vw; */
		height: 300rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: blue;
		border-radius: 20rpx;
	}
</style>