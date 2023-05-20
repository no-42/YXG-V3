<template>
  <view class="all-body">
    <image src="../static/img/welcome.jpg" class="img" mode="center">
    </image>
    <view class="text-and-button">
      <view style="margin-bottom: 50rpx;">
        <h2 style="color: white;margin-bottom: 100rpx;">欢迎</h2>
        <u-text color="white" text="欢迎使用YXG客户端"></u-text>
        <u-text color="white" text="YXG 欢迎您"></u-text>
      </view>
      <view class="show-button">
        <button class="button-white-back-purple-text"
                @click="toLogo">登录
        </button>
        <button class="button-white"
                @click="toRegister">创建新用户</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    toRegister() {
      console.log("注册");
      uni.navigateTo({
        url: "/pages/register"
      })
    },
    toLogo() {
      console.log("登录");
      uni.navigateTo({
        url: "/pages/loginWithName"
      })
    }
  }
};
</script>
<style>
.img {
  width: 100%;
  height: 100%;
  position: absolute;
}

.text-and-button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  bottom: 200rpx;
}
</style>