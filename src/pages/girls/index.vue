<template>
  <view class="content">
    <!-- 头部 -->
    <view class="header">
      <Header :options="options"></Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <view class="type" v-for="i in 5" :key="i">
        <image
          class="type-img"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2579971333,403380026&fm=26&gp=0.jpg"
        ></image>
        <u-section title="今日热门" sub-title="查看更多" :show-line='false'></u-section>
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
    title: "推荐 精选分类",
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

<style lang='scss' scoped>
.type {
  margin: 30rpx;
  padding: 30rpx;
  background: white;
  .type-img {
    width: 100%;
    height: 350rpx;
    margin-bottom: 20rpx;
  }
}
</style>
