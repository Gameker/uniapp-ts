<template>
  <view class="content">
    <!-- 头部 -->
    <view class="header">
      <Header :options="options"></Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
        <view class="u-m-r-10">
          <u-avatar
            :src="pic"
            size="140"
            mode="square"
            style="margin-right: 20rpx"
          ></u-avatar>
        </view>
        <view class="u-flex-1">
          <view class="u-font-18 u-p-b-5">NiuA</view>
          <view class="u-font-14 u-tips-color">
            <span style="margin-right: 16rpx">昵称:</span>巷子达人</view
          >
          <view class="u-font-14 u-tips-color">
            <span style="margin-right: 16rpx">微信号:</span> x695414235</view
          >
        </view>

        <view class="u-m-l-10 u-p-10">
          <u-icon name="scan" color="#969799" size="28"></u-icon>
        </view>
        <view class="u-m-l-10 u-p-10">
          <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
        </view>
      </view>

      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
        </u-cell-group>
      </view>

      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item icon="star" title="收藏"></u-cell-item>
          <u-cell-item icon="photo" title="相册"></u-cell-item>
          <u-cell-item icon="coupon" title="卡券"></u-cell-item>
          <u-cell-item icon="heart" title="关注"></u-cell-item>
        </u-cell-group>
      </view>

      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item icon="setting" title="设置"></u-cell-item>
        </u-cell-group>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header.vue";
@Component({ components: { Header } })
export default class index extends Vue {
  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    background: {
      backgroundColor: "white",
    },
  };
  pic: string = "/static/1.jpg";
  show: boolean = true;
  async getSwiper() {
    let params = {
      KeyboardEvent: "1111",
      dataType: "json",
    };
    const res = await this.$ajax.center.getSwiper({ ...params });
    console.log(res, 222);
  }
  //onLoad事件
  onShow() {
    this.getSwiper();
  }
}
</script>

<style>
/* page不能写带scope的style标签中，否则无效 */
page {
  background-color: rgb(240, 240, 240);
}
</style>

<style lang="scss" scoped>
.user-box {
  background-color: #fff;
}
</style>
