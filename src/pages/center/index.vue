<template>
  <view class="content">
    <!-- 头部 -->
    <view class="user-box">
      <Header :options="options"></Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <view class="u-flex user-box u-p-30">
        <!-- <image
          class="banner_img"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd.zdqx.com%2Fbaisi_20190703%2F011.jpg&refer=http%3A%2F%2Fd.zdqx.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623946413&t=63698fa0664f8de5983ef70497022a7a"
        ></image> -->
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

      <view class="u-m-t-20" @tap="show = true">
        <u-cell-group>
          <u-cell-item icon="rmb-circle" title="赞赏"></u-cell-item>
        </u-cell-group>
      </view>

      <view class="u-m-t-20">
        <u-cell-group>
          <u-cell-item icon="star" title="介绍" @tap="js = true"></u-cell-item>
          <u-cell-item
            icon="coupon"
            title="留言"
            @tap="msg = true"
          ></u-cell-item>
          <u-cell-item icon="phone" title="联系" @tap="lx = true"></u-cell-item>
          <u-cell-item
            icon="heart"
            title="免责声明"
            @tap="mz = true"
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
    <!-- 赞赏 -->
    <u-popup v-model="show" mode="right" length="60%" :closeable="true">
      <view class="panel">
        <h3 style="text-align: center; margin: 30rpx">赞赏</h3>
        <p>等闲变却故人心，却道故人心易变1</p>
        <p>就按肯德112323基奥斯卡登记卡1231</p>
      </view>
    </u-popup>
    <!-- 介绍 -->
    <u-popup v-model="js" mode="bottom" length="50%" :closeable="true">
      <view class="panel">
        <h3 style="text-align: center; margin: 30rpx">介绍</h3>
        <p>等闲变却故人心，却道故人心易变1</p>
        <p>就按肯德112323基奥斯卡登记卡1231</p>
      </view>
    </u-popup>
    <!-- 联系 -->
    <u-popup v-model="lx" mode="right" length="60%" :closeable="true">
      <view class="panel">
        <h3 style="text-align: center; margin: 30rpx">联系方式</h3>
        <p>啥也没有</p>
        <p>留个qq吧！</p>
        <p>857469834</p>
      </view>
    </u-popup>
    <!-- 免责声明 -->
    <u-popup v-model="mz" mode="center" length="80%" :closeable="true">
      <view class="panel">
        <h3 style="text-align: center; margin: 30rpx">免责声明</h3>
        <p>尽快登记拉123克丝建档立卡123时间到角1231</p>
        <p style="margin-bottom: 35rpx">就按肯德112323基奥斯卡登记卡1231</p>
      </view>
    </u-popup>

    <!-- 留言板 -->
    <u-popup v-model="msg" mode="center" length="90%" :closeable="true">
      <view class="panel">
        <h3 style="text-align: center; margin: 20rpx">留言板</h3>
        <u-form :model="form" ref="uForm">
          <u-form-item prop="intro">
            <u-input
              placeholder="请输入评论内容"
              v-model="form.intro"
              type="textarea"
              :border="true"
              height="180"
              :auto-height="true"
              maxlength="200"
            />
          </u-form-item>
          <u-form-item label="联系" prop="name">
            <u-input
              v-model="form.name"
              placeholder="微信/手机号/QQ"
              maxlength="20"
            />
          </u-form-item>
        </u-form>
        <u-button type="primary" @click="submit">提交</u-button>
      </view>
    </u-popup>
    <!-- 更多 -->
    <u-popup v-model="more" mode="center" length="80%" :closeable="true">
      <view class="panel">
        <h3 style="text-align: center; margin: 30rpx">更多</h3>
        <p>暂无更多，敬请期待！</p>
        <p style="margin-bottom: 35rpx">如有需要，请给我留个言吧！</p>
      </view>
    </u-popup>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header.vue";
@Component({ components: { Header } })
export default class index extends Vue {
  form = {
    name: "",
    intro: "",
  };
  submit() {}
  show: boolean = false;
  js: boolean = false;
  lx: boolean = false;
  mz: boolean = false;
  msg: boolean = false;
  more: boolean = false;
  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    title: "我的 个人中心",
    // background: {
    //   backgroundColor: "white",
    // },
  };
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
.panel {
  text-align: center;
  padding: 40rpx;
}
.user-box {
  background-color: #fff;
}
.banner_img {
  width: 100%;
  height: 380rpx;
  border-radius: 30rpx;
}
</style>
