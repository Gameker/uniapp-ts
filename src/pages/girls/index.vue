<template>
  <view class="content">
    <!-- 头部 -->
    <view class="header">
      <Header :options="options"></Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <view
        class="type"
        v-for="item in list"
        :key="item.id"
        @click="details(item.type, item.title)"
      >
        <image class="type-img" :src="item.url"></image>
        <u-section
          :title="item.title"
          sub-title="查看更多"
          :show-line="false"
        ></u-section>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/header.vue"

@Component({ components: { Header } })
export default class index extends Vue {
  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    title: "推荐 精选分类",
  }
  details(type: number, title: string) {
    this.$u.route("pages/girls/details", {
      type: type,
      title: title,
    })
  }
  list: any = []
  async getData() {
    const res: any = await this.$ajax.girls.getData({})
    this.list = res.data
    console.log(res)
  }
  //onLoad事件
  onShow() {
    this.getData()
  }
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
