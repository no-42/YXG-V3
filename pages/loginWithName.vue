<template style="background-color: white;">
  <view class="show-body">
    <view>
      <view class="logo-view">
        <image src="../static/img/yxg-logo.png" mode="aspectFit"
               class="logo-image"></image>
      </view>
      <view style="margin-top: 50rpx;">
        <u-text class="half-text-view" size="25" :bold="true" text="登录到"></u-text>
      </view>
      <view style="margin-top: 50rpx;">
        <u-text class="half-text-view" size="25" :bold="true" text="YXG客户端"></u-text>
      </view>
      <u-line length="10%" color="rgb(255,126,118)" margin="10rpx 10rpx" :hairline="true"></u-line>
    </view>
    <view class="show-button">
      <u-form :model="login" ref="ulogin">
        <u-text :color="textColor" text="邮箱或手机"></u-text>
        <u-form-item>
          <u-input v-model="login.sign"></u-input>
        </u-form-item>
        <u-text :color="textColor" text="密码"></u-text>
        <u-form-item>
          <u-input type="password" :password-icon="true" v-model="login.passWord"></u-input>
        </u-form-item>
        <u-form-item>
          <u-checkbox-group>
            <u-checkbox @change="rememberMe" v-model="login.remember" key="remember" label="记住我"
                        :label-color="textColor" name="1"></u-checkbox>
          </u-checkbox-group>
        </u-form-item>
        <u-form-item>
          <button class="button-purple-back-white-text" @click="loginFunction">登录</button>
        </u-form-item>
        <u-row>
          <u-text :color="textColor" text="或" align="center"></u-text>
        </u-row>
        <u-form-item>
          <button class="button-purple-back-white-text" @click="fastLogin">YXG社区一键登录</button>
        </u-form-item>
      </u-form>
    </view>
    <view style=" width: 100%;">
      <u-row justify="center" @click="loginToRegister">
        <u-col span="6">
          <u-text :color="textColor" align="right" text="没有YXG账户?"></u-text>
        </u-col>
        <u-col span="4">
          <u-text color="rgb(74,70,224)" :bold="true" text="注册"></u-text>
        </u-col>
      </u-row>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      textColor: "rgb(143,146,161)",
      login: {
        sign: '',
        passWord: '',
        remember: false
      }
    };
  },
  methods: {
    rememberMe(e) {
      console.log(e)
      this.login.remember = e;
    },
    loginFunction() {
      console.log(this.login);
      uni.redirectTo({
        url: "/pages/home?signName=" + this.login.sign
      })
    },
    fastLogin() {
      console.log("快速登录");
      uni.redirectTo({
        url: "/pages/home?signName=" + this.login.sign
      })
    },
    loginToRegister() {
      console.log("跳转注册");
      uni.navigateTo({
        url: "/pages/register"
      })
    }
  }
}
</script>

<style>
</style>