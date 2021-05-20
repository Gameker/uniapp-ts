<template>
  <view class="content">
    <!-- 头部 -->
    <view>
      <Header :options="options"></Header>
    </view>
    <view class="user-box">
      <h3>留言板</h3>
      <u-form :model="form" ref="uForm">
        <u-form-item prop="msg">
          <u-input
            placeholder="请输入评论内容"
            v-model="form.msg"
            type="textarea"
            :border="true"
            height="170"
            :auto-height="true"
            maxlength="200"
          />
        </u-form-item>
        <u-form-item label="联系" prop="wx">
          <u-input
            v-model="form.wx"
            placeholder="微信/手机号/QQ"
            maxlength="20"
          />
        </u-form-item>
      </u-form>
      <u-button type="primary" @click="submit">提交</u-button>
    </view>
    <u-top-tips ref="uTips"></u-top-tips>
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
  form = {
    msg: "",
    wx: "",
  }
  rules = {
    msg: [
      {
        required: true,
        message: "请输入留言",
        // 可以单个或者同时写两个触发验证方式
        trigger: "blur",
      },
    ],
    wx: [
      {
        required: true,
        message: "请输入联系方式",
        trigger: "blur",
      },
    ],
  }
  submit() {
    ;(this.$refs.uForm as any).validate((valid: any) => {
      if (valid) {
        this.$ajax.center
          .msg(this.form)
          .then((res) => {
            ;(this.$refs.uTips as any).show({
              title: "添加成功",
              type: "success",
              duration: "2300",
            })
            this.form = {
              msg: "",
              wx: "",
            }
          })
          .catch((err) => {
            ;(this.$refs.uTips as any).show({
              title: "添加失败,请联系作者！",
              type: "error",
              duration: "2300",
            })
          })
      } else {
        console.log("验证失败")
      }
    })
  }
  onReady() {
    ;(this.$refs.uForm as any).setRules(this.rules)
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
    padding: 25rpx 15rpx;
    font-weight: bold;
  }
  p {
    line-height: 2;
  }
}
</style>
