<template>
  <view class="content">
    <!-- 头部 -->
    <view class="header">
      <Header :options="options">
        <template #query>
          <view style="padding: 6px">
            <!-- <u-search action-text="搜索"></u-search> -->
            <u-tabs
              inactive-color="white"
              active-color="#8A2BE2"
              :list="listt"
              :is-scroll="false"
              :current="current"
              bg-color="inherit"
              @change="change"
            ></u-tabs>
          </view>
        </template>
      </Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <!-- 轮播图 -->
      <view style="padding: 20px 15px 6px 15px">
        <u-swiper
          height="350"
          :list="list2"
          indicator-pos="topRight"
          :title="true"
        ></u-swiper>
      </view>
      <!-- 瀑布流 -->
      <view class="wrap">
        <u-waterfall v-model="flowList" ref="uWaterfall">
          <template v-slot:left="{ leftList }">
            <view
              class="demo-warter"
              v-for="(item, index) in leftList"
              :key="index"
            >
              <u-lazy-load
                threshold="-270"
                border-radius="10"
                loading-img="/static/loading.gif"
                error-img="/static/load_error.png"
                :image="item.url"
                :index="index"
              ></u-lazy-load>
              <!-- 左上角标签 -->
              <view class="demo-tag"><Tag :type="item.type" /></view>
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view
              class="demo-warter"
              v-for="(item, index) in rightList"
              :key="index"
            >
              <u-lazy-load
                threshold="-270"
                border-radius="10"
                :image="item.url"
                :index="index"
                loading-img="/static/loading.gif"
                error-img="/static/load_error.png"
              ></u-lazy-load>
              <!-- 左上角标签 -->
              <view class="demo-tag"><Tag :type="item.type" /></view>
            </view>
          </template>
        </u-waterfall>
        <!-- 加载更多 -->
        <u-loadmore
          bg-color="rgb(240, 240, 240)"
          :status="loadStatus"
          @loadmore="addRandomData"
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
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header.vue";
import Tag from "@/components/tag.vue";
@Component({ components: { Header, Tag } })
export default class index extends Vue {
  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    title: "管理系统",
    // border: true,
  };
  //返回顶部相关的参数和方法
  scrollTop: number = 0;
  iconStyle = {
    fontSize: "40rpx",
    color: "#F7889D",
  };
  onPageScroll(e: any) {
    this.scrollTop = e.scrollTop;
  }
  listt: any = [
    {
      name: "推荐",
    },
    {
      name: "萝莉",
    },
    {
      name: "富婆",
    },
    {
      name: "学生",
    },
    {
      name: "模特",
    },
  ];
  change(index: number) {
    this.current = index;
  }
  current = 0;
  //轮播图参数
  list2 = [
    // {
    //   image:
    //     "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2542710983,3406835393&fm=26&gp=0.jpg",
    //   title: "昨夜星辰昨夜风，画楼西畔桂堂东",
    // },
    {
      image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
      title: "身无彩凤双飞翼，心有灵犀一点通",
    },
    {
      image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
      title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
    },
  ];
  //以下是瀑布流相关参数和方法
  loadStatus = "loadmore";
  flowList: any = [];
  list: any = [];
  async getData() {
    const res: any = await this.$ajax.index.getData();
    // console.log(res)
    this.flowList = res.data;
  }
  onReachBottom() {
    this.loadStatus = "loading";
    // 模拟数据加载
    setTimeout(() => {
      this.getData();
      this.loadStatus = "loadmore";
    }, 700);
  }
  addRandomData() {
    for (let i = 0; i < 10; i++) {
      let index = this.$u.random(0, this.list.length - 1);
      // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
      let item = JSON.parse(JSON.stringify(this.list[index]));
      item.id = this.$u.guid();
      this.flowList.push(item);
    }
  }
  //onLoad事件
  onLoad() {
    this.getData();
    // this.addRandomData();
  }
  onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function () {
      uni.reLaunch({ url: "/pages/index/index" });
      uni.stopPullDownRefresh();
    }, 500);
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
.header {
  background: linear-gradient(-90deg, #a050d7 0, #f7889c 100%);
}

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
  top: 10rpx;
}

// .demo-title {
//   font-size: 30rpx;
//   margin-top: 5px;
//   color: $u-main-color;
//   //多行文本溢出显示...
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
// }
</style>