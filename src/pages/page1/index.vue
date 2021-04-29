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
  options: any = {
    title: "女友圈",
    title_color: "white",
    height: 50,
    background: {
      // backgroundColor: "#001f3f",
      // 导航栏背景图
      // background: "url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat",
      // // 还可以设置背景图size属性
      // backgroundSize: "cover",

      // 渐变色
      backgroundImage: "linear-gradient(-90deg,#a050d7 0,#f7889c 100%)",
    },
  };

  async getSwiper() {
    let params = {
      KeyboardEvent: "1111",
      dataType: "json",
    };
    const res = await this.$ajax.base.getSwiper({ ...params });
    console.log(res, 222);
  }
  onShow() {
    // this.getSwiper();
  }
}
</script>

<style>
</style>
