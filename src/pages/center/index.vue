<template>
  <view class="content">
    <!-- 头部 -->
    <view class="header">
      <Header :options="options"></Header>
    </view>
    <!-- 内容 -->
    <view class="main"></view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header.vue";
@Component({ components: { Header } })
export default class index extends Vue {
  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    title: "个人中心",
  };

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
</style>
