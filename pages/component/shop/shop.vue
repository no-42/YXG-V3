<template style="width: 100vw;">
	<view style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
		<view>
			<TopText title="商城"></TopText>
		</view>
		<view>
			<u-icon name="shopping-cart" size="30" style="margin-right: 50rpx;"></u-icon>
		</view>
	</view>
	<view>
		<u-row>
			<u-scroll-list style="width: 100vw;" :indicator="false">
				<u-tag style="padding-left: 20rpx;" v-for="(item,index) in categoryInfoList" :icon="item.image"
					:text="item.name" :plainFill="!item.checked" :plain="!item.checked" @click="radioClick"
					:name="item.id" :bgColor="item.checked?'':'#F1F7F5'"></u-tag>
			</u-scroll-list>
		</u-row>
		<!-- 轮播图 -->
		<u-swiper style="margin: 20rpx;border-radius: 20px;" :list="swiperDataList" keyName="url" indicatorMode="line"
			@click="clickSwiper">
		</u-swiper>
		<view style="margin: 20rpx;">
			<!-- 实时竞价 -->
			<u-row>
				<u-col span="6"><u-text text="实时竞价" size="18" bold="true"></u-text></u-col>
				<u-col span="6"><u-text align="right" text="" size="18" bold="true" prefixIcon="查看全部"
						@click="realTimeBiddingClick"></u-text></u-col>
			</u-row>
			<u-scroll-list style="width: 100vw;" :indicator="false">
				<MyScrollItem v-for="(good,index) in goodsInfoList" :itemInfo="good" :itemId="'shopReal' + index"></MyScrollItem>
			</u-scroll-list>
		</view>
	</view>
</template>

<script>
	import MyScrollItem from '../my-scroll-item/my-scroll-item.vue'
	export default {
		components: {
			MyScrollItem
		},
		data() {
			return {
				categoryInfoList: [{
						id: "id1",
						name: "生活用品",
						image: ""
					},
					{
						id: "id2",
						name: "电子产品",
						image: ""
					},
					{
						id: "id3",
						name: "食品",
						image: ""
					},
					{
						id: "id4",
						name: "食品",
						image: ""
					},
					{
						id: "id5",
						name: "电子产品",
						image: ""
					},
					{
						id: "id6",
						name: "生活用品",
						image: ""
					},
					{
						id: "id7",
						name: "电子产品",
						image: ""
					},
					{
						id: "id8",
						name: "食品",
						image: ""
					},
					{
						id: "id9",
						name: "食品",
						image: ""
					},
					{
						id: "id10",
						name: "电子产品",
						image: ""
					}
				],
				swiperDataList: [{
						url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
						poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东',
						resourcesType: "video"
					},
					{
						url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东',
						resourcesType: "img"
					},
					{
						url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东',
						resourcesType: "img"
					},
					{
						url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东',
						resourcesType: "img"
					}
				],
				goodsInfoList: [{
						id: "id1",
						mallName: "mall",
						name: "goodsName",
						endTime: "3小时12分钟36秒后",
						finalPrice: "669",
					}
					// ,
					// {
					// 	id: "id2",
					// 	mallName: "mall",
					// 	name: "goodsName",
					// 	endTime: "3小时12分钟36秒后",
					// 	finalPrice: "669",
					// }
					// {
					// 	id: "id3",
					// 	mallName: "mall",
					// 	name: "goodsName",
					// 	endTime: "3小时12分钟36秒后",
					// 	finalPrice: "669",
					// },
					// {
					// 	id: "id4",
					// 	mallName: "mall",
					// 	name: "goodsName",
					// 	endTime: "3小时12分钟36秒后",
					// 	finalPrice: "669",
					// }
				]

			}
		},
		methods: {
			radioClick(id) {
				console.log(id)
				this.categoryInfoList.map((item, index) => {
					item.checked = item.id === id ? true : false
				})
			},
			clickSwiper(i) {
				console.log(this.swiperDataList[i].resourcesType)
			},
			realTimeBiddingClick() {
				console.log("查询更多实时竞价");
				uni.navigateTo({
					url:"/pages/realTimeBidding"
				})
			}
		}
	}
</script>

<style>
</style>