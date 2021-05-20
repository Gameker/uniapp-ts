<template>
  <view class="content">
    <!-- 头部 -->
    <view>
      <Header :options="options"></Header>
    </view>
    <view class="user-box">
      <h3>免责声明</h3>
      <p>
        1、小程序中的图片均来收集于网络，如有侵犯到您的权益，请及时联系作者删除
      </p>
      <p>
        2、小程序为作者个人开发作品，仅限学习交流使用，请勿用于非法用途以和商业用途
      </p>
      <p>
        3、用户以各种方式使用小程序图片的过程中，不得以任何方式利用小程序直接或间接从事违反中国法律法规、以及社会公德的行为
      </p>
    </view>
  </view>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/header.vue"
@Component({ components: { Header } })
export default class index extends Vue {
  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    title: "主页",
    isBback: true,
  }
}
</script>
<style>
page {
  background-color: rgb(240, 240, 240);
}
</style>
<style lang="scss" scoped>
.user-box {
  background-color: #fff;
  margin: 40rpx;
  border-radius: 20rpx;
  padding: 30rpx;
  h3 {
    border-bottom: 1px solid gainsboro;
    padding: 25rpx 15rpx;
    margin-bottom: 20rpx;
    font-weight: bold;
  }
  p {
    line-height: 2;
  }
}
</style>
