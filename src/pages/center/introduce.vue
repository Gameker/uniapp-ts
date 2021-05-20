<template>
  <view class="content">
    <!-- 头部 -->
    <view>
      <Header :options="options"></Header>
    </view>
    <view class="user-box">
      <h3>介绍</h3>
      <p>~ 女士们，先生们，你们期待的女友圈上线啦！</p>
      <p>~ 听说多看美女能使人健康长寿</p>
      <p>~ 为了你们青春永驻，我愿意牺牲一下自己</p>
      <p>~ 在百忙之中抽空帮你们写了个女友圈小程序</p>
      <p>~ 最后，觉得不错就支持一下吧！</p>

      <h3>关于我</h3>
      <p>1、还在全栈工程师之路爬坑中...</p>
      <p>2、后端：Node.js、Typescript、Koa框架等</p>
      <p>3、前端：Vue.js、Typescript、ES6等</p>
      <p>
        4、小程序为个人开发的作品，附带开发了一个后台管理系统（就叫女朋友管理系统吧！），用于方便自己对图片分类的，上传以及增删改查的操作
      </p>
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
    title: "主页",
    isBback: true,
  }
}
</script>
<style>
page {
  background-color: rgb(240, 240, 240);
}
</style>

<style lang="scss" scoped>
.user-box {
  background-color: #fff;
  margin: 40rpx;
  border-radius: 20rpx;
  padding: 30rpx;
  h3 {
    border-bottom: 1px solid gainsboro;
    padding: 25rpx 15rpx;
    margin-bottom: 20rpx;
    font-weight: bold;
  }
  p {
    line-height: 2;
  }
}
</style>

