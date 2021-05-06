<template>
  <view class="content">
    <u-navbar
      :border-bottom="false"
      :height="options.height || '50'"
      :title-color="options.color || 'white'"
      :is-back="false"
      :background="options.background || background"
      :title="options.title"
    >
      <view class="navbar-right" slot="right" v-if="options.slotRight">
        <view style="margin: 5px 12px 0 0">
          <u-icon name="camera" color="white" size="60"></u-icon>
        </view>
      </view>
    </u-navbar>
    <slot name="query"></slot>
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class index extends Vue {
  @Prop({ type: Object, default: () => {} }) options!: any;
  background: any = {
    // backgroundColor: "#001f3f",

    // 导航栏背景图
    // background: "url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat",
    // // 还可以设置背景图size属性
    // backgroundSize: "cover",

    // 渐变色
    backgroundImage: "linear-gradient(-90deg,#a050d7 0,#f7889c 100%)",
  };
}
</script>

<style>
</style>
