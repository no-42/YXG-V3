<template>
	<TopText title="实时竞价"></TopText>
	<view style="margin: 50rpx;">
		<u-list>
			<u-list-item v-for="(item,index) in goodsInfoList">
				<MyScrollItem :itemInfo="item" itemType="all" :itemId="'real' + index"></MyScrollItem>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import MyScrollItem from './component/my-scroll-item/my-scroll-item'
	export default{
		components:{
			MyScrollItem
		},
		data(){
			return{
				goodsInfoList: [{
						id: "id1",
						mallName: "mall",
						name: "goodsName",
						endTime: "3小时12分钟36秒后",
						finalPrice: "669",
					},
					{
						id: "id2",
						mallName: "mall",
						name: "goodsName",
						endTime: "3小时12分钟36秒后",
						finalPrice: "669",
					}
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
		}
	}
</script>

<style>
</style>