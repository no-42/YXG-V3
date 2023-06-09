<template>
	<view>
		<!-- 首页 -->
		<view v-if="pageValue == 0">
			<WelcomePage :isRegister="isRegister" @parentSkipTemporarily="skipTemporarily"></WelcomePage>
		</view>
		<!-- 消息页 -->
		<view v-if="pageValue == 1">
			<TopText title="消息通知"></TopText>
		</view>
		<!-- 商城页 -->
		<view v-if="pageValue == 2">
			<Shop></Shop>
		</view>
		<!-- 个人中心 -->
		<view v-if="pageValue == 3" style="background-image: url('../../static/img/welcome.jpg')">
			<PersonalCenter :userInfo="userInfo"></PersonalCenter>
		</view>

		<u-tabbar :value="pageValue" @change="pageChange" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item icon="home">
			</u-tabbar-item>
			<u-tabbar-item icon="bell">
			</u-tabbar-item>
			<u-tabbar-item icon="bag">
			</u-tabbar-item>
			<u-tabbar-item icon="account">
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import Shop from './component/shop/shop'
	import WelcomePage from './component/welcome-page/welcome-page'
	import PersonalCenter from './component/personal-center/personal-center'
	export default {
		components:{
			Shop,
			WelcomePage,
			PersonalCenter
		},
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
		methods: {
			skipTemporarily() {
				this.isRegister = false;
			},
			pageChange(e) {
				this.pageValue = e;
				console.log(e);
			}
		}
	}
</script>

<style>
	
</style>