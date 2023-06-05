<template>
	<view style="margin: 50rpx;">
		<u-text size="25" :bold="true" :color="color" :text="title"></u-text>
	</view>
	<u-line length="10%" color="rgb(255,126,118)" margin="50rpx" :hairline="true"></u-line>
</template>

<script setup>
	const props = defineProps({
		title: {
			type: String,
			required: true
		},
		color: {
			type: String,
			// 对象或数组默认值必须从一个工厂函数获取
			default: function() {
				return "#000";
			}
		}
	})
</script>

<style lang="less">
	@import url("style.less");
</style>