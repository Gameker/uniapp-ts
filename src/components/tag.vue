<template>
  <view class="content">
    <u-tag
      :bg-color="Bgcolor"
      :text="typeName"
      mode="dark"
      shape="circleRight"
    />
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
enum Color {
  YJ = "rgba(0,0, 0, 0.3)",
  LL = "rgba(0,0, 0, 0.3)",
  DXS = "rgba(0,0, 0, 0.3)",
  MT = "rgba(0,0, 0, 0.3)",
}
@Component
export default class index extends Vue {
  @Prop({ type: Number, default: () => 0 }) type!: number

  get Bgcolor() {
    switch (this.type) {
      case 1:
        return Color.YJ
      case 2:
        return Color.LL
      case 3:
        return Color.DXS
      case 4:
        return Color.MT
      default:
        return "rgba(0,0, 0, 0.3)"
    }
  }

  get typeName() {
    switch (this.type) {
      case 1:
        return "白皙幼滑"
      case 2:
        return "萝莉"
      case 3:
        return "白皙幼滑"
      case 4:
        return "模特"
      default:
        return "其他"
    }
  }
}
</script>

<style>
</style>
