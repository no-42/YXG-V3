<template>
	<view style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
		<view>
			<TopText title="个人中心" color="#ffffff"></TopText>
		</view>
		<view>
			<u-icon name="scan" size="30" style="margin-right: 50rpx;"></u-icon>
		</view>
	</view>
	<view style="margin: 50rpx;">
		<u-row style="height: 100%;border-radius: 20px;">
			<u-col span="6">
				<u-avatar text="无头像" size="80" mode="aspectFit" style="margin-left: 20rpx;"></u-avatar>
			</u-col>
			<u-col span="6">
				<u-text color="#ffffff" size="25" :text="userInfo.name"></u-text>
				<u-text prefixIcon="YXGID:" color="#ffffff" :text="userInfo.id"></u-text>
			</u-col>
		</u-row>
	</view>
	<view style="background-color: white;border-top-left-radius: 20px;border-top-right-radius: 20px; height: 1005rpx;">
		<view style="padding: 20rpx;">
			<u-row>
				<u-col span="6">
					<u-text prefixIcon="职业:" :bold="true" size="15" :text="userInfo.career"></u-text>
				</u-col>
				<u-col span="6">
					<u-text prefixIcon="地下城\n抽签资格" :text="userInfo.drawsNum" suffixIcon="次"></u-text>
				</u-col>
			</u-row>
			<u-row>
				<u-col span="3">
					<u-text suffixIcon="动态" :text="userInfo.trends"></u-text>
				</u-col>
				<u-col span="3">
					<u-text suffixIcon="关注" :text="userInfo.follow"></u-text>
				</u-col>
				<u-col span="3">
					<u-text suffixIcon="粉丝" :text="userInfo.fans"></u-text>
				</u-col>
				<u-col span="3">
					<u-text suffixIcon="获赞" :text="userInfo.like"></u-text>
				</u-col>
			</u-row>
			<u-row>
				<u-text :text="userInfo.remark"></u-text>
			</u-row>
			<u-row>
				<u-col span="2" v-for="item in userInfo.tag">
					<!-- <u-tag :text="item"></u-tag> -->
					<u-text type="info" :text="item"></u-text>
				</u-col>
			</u-row>
			<u-row>
				<button>编辑个人资料</button>
			</u-row>
		</view>

		<u-cell-group>
			<u-cell style="margin-top: 50rpx;" class="option-cell" title="服务" :border="false" :isLink="true" icon="../static/img/yxg-logo-2.png">
			</u-cell>
			<u-cell class="option-cell" title="卡包" :border="false" :isLink="true" icon="../static/img/pack.png" @click="jumpToCard">
			</u-cell>
			<u-cell class="option-cell" title="任务中心" :border="false" :isLink="true" icon="../static/img/setting.png">
			</u-cell>
			<u-cell class="option-cell" title="设置" :border="false" :isLink="true" icon="../static/img/setting.png">
			</u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo: {
				type: Object,
				require: true
			}
		},
		methods: {
			jumpToCard(e) {
				uni.navigateTo({
					url: "/pages/card"
				})
			}
		}
	}
</script>

<style>
.option-cell {
	margin: 18rpx 60rpx;
	margin-left: 50rpx;
	padding: 14rpx 0;
	border-radius: 15px;
	border: 1px solid rgba(214, 214, 214, 1);
	box-shadow: -1px 7px 18px rgba(0, 0, 0, 0.25);
}
</style>