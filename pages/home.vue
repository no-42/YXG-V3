<template>
	<view>
		<view v-if="pageValue == 0">
			<!-- <view class="logo-view">
        <image src="../static/img/yxg-logo-2.png" mode="aspectFit"
               class="logo-image"></image>
      </view> -->
			<view style="margin: 50rpx;">
				<u-text class="logo-text" size="25" :bold="true" text="上午好,领航员"></u-text>
			</view>
			<u-line length="10%" color="rgb(255,126,118)" margin="50rpx" :hairline="true"></u-line>
			<view>
				<u-popup :show="isRegister" mode="bottom" @close="closePopup" @open="openPopup">
					<view class="show-button"
						style="width: 80vw;margin-left: 10vw;text-align: center;display: flex;flex-direction: column;">
						<view style="height: 200rpx"></view>
						<text class="popup-h2-text">增加您的信用点账户</text>
						<text class="popup-h2-text" style="margin-bottom: 50rpx;">到YXG客户端上</text>
						<text>我们正在尽力增加功能。</text>
						<text style="margin-bottom: 50rpx;">现在您可以怎加您的账户到YXG客户端上</text>
						<button class="button-purple-back-white-text" @click="addCard">增加</button>
						<button class="button-white-back-purple-text" @click="skipTemporarily">暂时跳过</button>
					</view>
				</u-popup>
			</view>
		</view>

		<view v-if="pageValue == 1">
			<view style="margin: 50rpx;">
				<u-text class="logo-text" size="25" :bold="true" text="消息通知"></u-text>
			</view>
			<u-line length="10%" color="rgb(255,126,118)" :hairline="true"></u-line>
		</view>

		<view v-if="pageValue == 2" style="background-image: url('../../static/img/welcome.jpg')">
			<view style="margin: 50rpx;">
				<u-row>
					<u-col span="10">
						<u-text class="logo-text" color="#ffffff" size="25" :bold="true" text="个人中心"></u-text>
					</u-col>
					<u-col span="2" style="height: 50rpx; width: 50rpx;">
						<u-icon name="scan" size="30"></u-icon>
					</u-col>
				</u-row>
			</view>
			<u-line length="10%" color="rgb(255,126,118)" margin="30rpx" :hairline="true"></u-line>
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
			<view style="background-color: white;border-radius: 20px;">
				<view style="padding: 20rpx;">
					<u-row>
						<u-col span="6">
							<u-text prefixIcon="职业:" bold="true" size="15" :text="userInfo.career"></u-text>
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
					<u-cell title="服务" :isLink="true" icon="../static/img/yxg-logo-2.png">
					</u-cell>
					<u-cell title="卡包" :isLink="true" icon="../static/img/pack.png" @click="jumpToCard">
					</u-cell>
					<u-cell title="任务中心" :isLink="true" icon="../static/img/setting.png">
					</u-cell>
					<u-cell title="设置" :isLink="true" icon="../static/img/setting.png">
					</u-cell>
				</u-cell-group>
			</view>
		</view>

		<u-tabbar :value="pageValue" @change="pageChange" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item icon="home">
			</u-tabbar-item>
			<u-tabbar-item icon="bell">
			</u-tabbar-item>
			<u-tabbar-item icon="account">
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageValue: 0,
				isRegister: true,
				userInfo: {
					id: "id",
					name: "Jayyou",
					career: "领航员",
					drawsNum: 5,
					trends: 114,
					follow: 115,
					fans: 1688,
					like: 11111,
					remark: "ccssee",
					tag: ["测试标签", "测试标签"]
				}
			}
		},
		onLoad(option) {
			if (option.register) {
				this.isRegister = option.register
			}
		},
		onShow() {
			if (this.isRegister) {
				console.log("弹窗")
			}
		},
		methods: {
			openPopup() {},
			closePopup() {
				this.isRegister = false;
			},
			skipTemporarily() {
				this.isRegister = false;
			},
			pageChange(e) {
				this.pageValue = e;
				console.log(e);
			},
			jumpToCard(e) {
				uni.navigateTo({
					url: "/pages/card"
				})
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