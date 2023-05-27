<template>
	<view>
		<view style="margin: 50rpx;">
			<u-text class="logo-text" size="25" :bold="true" text="增加新信用点卡"></u-text>
		</view>
		<u-line length="10%" color="rgb(255,126,118)" margin="50rpx" :hairline="true"></u-line>
	</view>
	<view class="show-body-only show-button" v-if="page == 1">
		<u-row>
			<text style="font-weight: bold;">信用点账户</text>
		</u-row>
		<u-grid :border="false" col="5">
			<u-grid-item v-for="(item,index) in creditPointAccount" :key="index">
				<view @click="choose(item)">
					<u-row>
						<image style="width: 100rpx;height: 100rpx;" :src="item.img" mode="scaleToFill"></image>
					</u-row>
					<u-row justify="center">
						<text>{{item.name}}</text>
					</u-row>
				</view>
			</u-grid-item>
		</u-grid>
		<button style="margin-top: 50rpx;" class="button-white-back-purple-text">查询所有</button>
	</view>
	<view class="show-body-only show-button" v-if="page == 2">
		<u-form :model="chooseItem">
			<u-text :color="textColor" text="账户所绑定的姓名"></u-text>
			<u-form-item>
				<u-input v-model="chooseItem.name"></u-input>
			</u-form-item>
			<u-text :color="textColor" text="卡号"></u-text>
			<u-form-item>
				<u-input v-model="chooseItem.cardNo"></u-input>
			</u-form-item>
			<u-row gutter="10">
				<u-col span="8">
					<u-text :color="textColor" text="卡到期日期"></u-text>
					<u-form-item>
						<u-input v-model="chooseItem.endTime"></u-input>
					</u-form-item>
				</u-col>
				<u-col span="4">
					<u-text :color="textColor" text="CVV"></u-text>
					<u-form-item>
						<u-input v-model="chooseItem.cvv"></u-input>
					</u-form-item>
				</u-col>
			</u-row>
			<u-form-item class="show-button">
				<button class="button-purple-back-white-text" @click="registerCardFunction">增加</button>
			</u-form-item>
		</u-form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textColor: "rgb(143,146,161)",
				page: 1,
				chooseItem: {
					creditPointAccountId: "",
					name: "",
					cardNo: "",
					endTime: "",
					cvv: ""
				},
				creditPointAccount: [{
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}, {
					id: "1",
					name: "待定",
					img: "../static/img/nanjing.png"
				}]
			}
		},
		methods: {
			choose(item) {
				this.chooseItem.creditPointAccountId = item.id;
				this.page = 2;
				console.log(this.page);
			},
			registerCardFunction() {
				console.log(this.chooseItem)
			}
		}
	}
</script>

<style>
</style>