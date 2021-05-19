<template>
  <view class="content">
    <!-- 头部 -->
    <view class="user-box">
      <Header :options="options"></Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <view class="u-flex user-box u-p-30">
        <image
          class="banner_img"
          src="https://img9.51tietu.net/pic/2019-091217/rls2dzopdklrls2dzopdkl.jpg"
        ></image>
        <!-- <view class="u-m-r-10">
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
        </view> -->
      </view>

      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item icon="rmb-circle" title="赞赏"></u-cell-item>
        </u-cell-group>
      </view>

      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item icon="star" title="介绍"></u-cell-item>
          <u-cell-item icon="coupon" title="留言"></u-cell-item>
          <u-cell-item icon="phone" title="联系"></u-cell-item>
          <u-cell-item icon="heart" title="免责声明"></u-cell-item>
        </u-cell-group>
      </view>

      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item icon="setting" title="更多"></u-cell-item>
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
    title:'我的 个人中心'
    // background: {
    //   backgroundColor: "white",
    // },
  };
  pic: string = "/static/1.jpg";
  show: boolean = true;
  //onLoad事件
  onShow() {}
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
.banner_img {
  width: 100%;
  height: 380rpx;
  border-radius: 30rpx;
}
</style>
