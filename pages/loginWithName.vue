<template style="background-color: white;">
  <view class="show-body">
    <view>
      <view class="logo-view">
        <image src="../static/img/yxg-logo.png" mode="aspectFit"
               class="logo-image">
      </view>
      <view style="margin-top: 50rpx;">
        <u-text class="half-text-view" size="25" :bold="true" text="登录到"></u-text>
      </view>
      <view style="margin-top: 50rpx;">
        <u-text class="half-text-view" size="25" :bold="true" text="YXG客户端"></u-text>
      </view>
      <u-line length="10%" color="rgb(255,126,118)" margin="10rpx 10rpx" :hairline="true"></u-line>
    </view>
    <view>
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
          <u-button class="button-purple" text="登录" @click="loginFunction"></u-button>
        </u-form-item>
        <u-row>
          <u-text :color="textColor" text="或" align="center"></u-text>
        </u-row>
        <u-form-item>
          <u-button class="button-purple" text="YXG社区一键登录" @click="fastLogin"></u-button>
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
        url: "/pages/index/userMain?signName=" + this.login.sign
      })
    },
    fastLogin() {
      console.log("快速登录");
      uni.redirectTo({
        url: "/pages/index/userMain?signName=" + this.login.sign
      })
    },
    loginToRegister() {
      console.log("跳转注册");
      uni.navigateTo({
        url: "/pages/index/register"
      })
    }
  }
}
</script>

<style>
</style>