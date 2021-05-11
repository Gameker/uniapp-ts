<template>
  <view class="content">
    <u-tag
      :bg-color="Bgcolor"
      :text="typeName"
      size="mini"
      mode="dark"
      shape="circleRight"
    />
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
enum Color {
  YJ = "#a050d7",
  LL = "pink",
  DXS = "#a05077",
  MT = "red",
}
@Component
export default class index extends Vue {
  @Prop({ type: Number, default: () => 0 }) type!: number;

  get Bgcolor() {
    switch (this.type) {
      case 1:
        return Color.YJ;
      case 2:
        return Color.LL;
      case 3:
        return Color.DXS;
      case 4:
        return Color.MT;
      default:
        return "black";
    }
  }

  get typeName() {
    switch (this.type) {
      case 1:
        return "御姐";
      case 2:
        return "萝莉";
      case 3:
        return "学生";
      case 4:
        return "模特";
      default:
        return "其他";
    }
  }
}
</script>

<style>
</style>
