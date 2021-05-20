<template>
  <view class="content">
    <!-- 头部 -->
    <view class="header">
      <Header :options="options"></Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <!-- 瀑布流 -->
      <view class="wrap">
        <u-waterfall v-model="flowList" ref="uWaterfall">
          <template v-slot:left="{ leftList }">
            <view
              class="demo-warter"
              v-for="(item, index) in leftList"
              :key="index"
              @tap="previewImage(item.url)"
            >
              <u-lazy-load
                threshold="-120"
                border-radius="10"
                loading-img="/static/ol.gif"
                error-img="/static/404.jpg"
                :image="item.url"
                :index="index"
              ></u-lazy-load>
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view
              class="demo-warter"
              v-for="(item, index) in rightList"
              :key="index"
              @tap="previewImage(item.url)"
            >
              <u-lazy-load
                threshold="-120"
                border-radius="10"
                :image="item.url"
                :index="index"
                loading-img="/static/ol.gif"
                error-img="/static/404.jpg"
              ></u-lazy-load>
            </view>
          </template>
        </u-waterfall>
        <!-- 加载更多 -->
        <u-loadmore
          bg-color="rgb(240, 240, 240)"
          :status="loadStatus"
        ></u-loadmore>
      </view>
    </view>
    <!-- 返回顶部 -->
    <u-back-top
      :scroll-top="scrollTop"
      :icon-style="iconStyle"
      :duration="500"
    ></u-back-top>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/header.vue"
import Tag from "@/components/tag.vue"
@Component({ components: { Header, Tag } })
export default class index extends Vue {
  type: number = 0
  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    title: "",
    isBback: true,
    // border: true,
  }
  // =======================================================
  //返回顶部相关的参数和方法
  scrollTop: number = 0
  //返回顶部样式自定义
  iconStyle = {
    fontSize: "40rpx",
    color: "black",
  }
  //返回顶部
  onPageScroll(e: any) {
    this.scrollTop = e.scrollTop
  }
  // =======================================================
  //以下是瀑布流相关参数和方法
  loadStatus = "loading"
  flowList: any = []
  list: any = []
  // =======================================================
  //预览图片
  previewImage(url: string) {
    uni.previewImage({
      urls: [url],
    })
  }
  // =======================================================
  index: number = 1
  //获取首页数据接口
  async getData() {
    let that = this
    const that_index = that.index
    const res: any = await this.$ajax.girls.types({
      page: { index: this.index },
      type: this.type,
    })
    //解决数组连接问题
    if (res != null && res.data.length > 0) {
      if (that_index == this.index) {
        this.flowList = this.flowList.concat(res.data)
        this.index++
      } else {
        this.index = that_index + 1
      }
    } else {
      this.loadStatus = "nomore"
    }
  }
  onReachBottom() {
    this.loadStatus = "loading"
    // 模拟数据加载
    setTimeout(() => {
      this.getData()
    }, 1000)
  }
  // =======================================================
  //onLoad事件
  onLoad(option: any) {
    this.type = option.type
    this.options.title = option.title
    this.getData()
    console.log(option) //打印出上个页面传递的参数。
  }
  // =======================================================
  //下拉刷新
  onPullDownRefresh() {
    console.log("refresh")
    setTimeout(function () {
      uni.reLaunch({ url: "/pages/index/index" })
      uni.stopPullDownRefresh()
    }, 567)
  }
}
</script>

<style>
/* page不能写带scope的style标签中，否则无效 */
page {
  background-color: rgb(240, 240, 240);
}
</style>

<style lang="scss" scoped>
.wrap {
  padding: 18rpx;
}

.demo-warter {
  border-radius: 8px;
  margin: 5px;
  background-color: #ffffff;
  padding: 8px;
  position: relative;
}

.demo-tag {
  display: flex;
  margin-top: 5px;
  position: absolute;
  top: 6rpx;
}
</style>