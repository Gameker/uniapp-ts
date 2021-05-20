<template>
  <view class="content">
    <!-- 头部 -->
    <view class="user-box">
      <Header :options="options"></Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <view class="u-flex user-box u-p-30">
        <view class="u-m-r-10">
          <u-avatar
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd.zdqx.com%2Fbaisi_20190703%2F011.jpg&refer=http%3A%2F%2Fd.zdqx.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623946413&t=63698fa0664f8de5983ef70497022a7a"
            size="140"
            mode="square"
            style="margin-right: 20rpx"
          ></u-avatar>
        </view>
        <view class="u-flex-1">
          <view class="u-font-18 u-p-b-5">NiuA</view>
          <view class="u-font-14 u-tips-color">
            <span style="margin-right: 16rpx">昵称:</span>达人</view
          >
          <view class="u-font-14 u-tips-color">
            <span style="margin-right: 16rpx">微信号:</span> x695414235</view
          >
        </view>

        <!-- <view class="u-m-l-10 u-p-10">
          <u-icon name="scan" color="#969799" size="28"></u-icon>
        </view> -->
        <view class="u-m-l-10 u-p-10">
          <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
        </view>
      </view>

      <view class="u-m-t-20" @tap="zs()">
        <u-cell-group>
          <u-cell-item icon="rmb-circle" title="支持"></u-cell-item>
        </u-cell-group>
      </view>

      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item icon="star" title="介绍" @tap="introduce"></u-cell-item>
          <u-cell-item
            icon="coupon"
            title="留言"
            @tap="msg()"
          ></u-cell-item>
          <u-cell-item
            icon="phone"
            title="联系"
            @tap="previewImage()"
          ></u-cell-item>
          <u-cell-item
            icon="heart"
            title="免责声明"
            @tap="disclaimer"
          ></u-cell-item>
        </u-cell-group>
      </view>
      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item
            icon="setting"
            title="更多"
            @tap="more = true"
          ></u-cell-item>
        </u-cell-group>
      </view>
    </view>
    <!-- 更多 -->
    <u-modal v-model="more" content="暂无更多，敬请期待！"></u-modal>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/header.vue"
@Component({ components: { Header } })
export default class index extends Vue {
  more: boolean = false
  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    title: "我的 个人中心",
  }
  //预览图片
  previewImage() {
    uni.previewImage({
      urls: ["/static/qq.jpg"],
    })
  }
  zs() {
    uni.previewImage({
      urls: ["/static/zs.png"],
    })
  }
  introduce() {
    this.$u.route("pages/center/introduce")
  }
  disclaimer() {
    this.$u.route("pages/center/disclaimer")
  }
  msg() {
    this.$u.route("pages/center/msg")
  }
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
</style>
