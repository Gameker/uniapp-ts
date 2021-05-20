<template>
  <view class="content">
    <!-- 头部 -->
    <view class="header">
      <Header :options="options">
        <template #query>
          <view style="padding: 6px">
            <!-- <view class="">
              <u-input
                v-model="value"
                :type="type"
                :border="border"
                @click="show = true"
              />
              <u-action-sheet
                :list="actionSheetList"
                v-model="show"
                @click="actionSheetCallback"
              ></u-action-sheet>
            </view> -->
            <!-- <u-tabs
              inactive-color="white"
              active-color="#8A2BE2"
              :list="listt"
              :is-scroll="false"
              :current="current"
              bg-color="inherit"
              @change="change"
            ></u-tabs> -->
          </view>
        </template>
      </Header>
    </view>
    <!-- 内容 -->
    <view class="main">
      <!-- 轮播图 -->
      <view style="padding: 20px 15px 6px 15px">
        <u-swiper
          :effect3d="true"
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
              @tap="details(item.group_id, item.desc)"
            >
              <u-lazy-load
                threshold="-120"
                border-radius="10"
                loading-img="/static/ol.gif"
                error-img="/static/404.jpg"
                :image="item.url"
                :index="index"
              ></u-lazy-load>
              <!-- 左上角标签 -->
              <!-- <view class="demo-tag"><Tag :type="item.desc" /></view> -->
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view
              class="demo-warter"
              v-for="(item, index) in rightList"
              :key="index"
              @tap="details(item.group_id, item.desc)"
            >
              <u-lazy-load
                threshold="-120"
                border-radius="10"
                :image="item.url"
                :index="index"
                loading-img="/static/ol.gif"
                error-img="/static/404.jpg"
              ></u-lazy-load>
              <!-- 左上角标签 -->
              <!-- <view class="demo-tag"><Tag :type="item.desc" /></view> -->
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
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header.vue";
import Tag from "@/components/tag.vue";
@Component({ components: { Header, Tag } })
export default class index extends Vue {
  value = "";
  type = "select";
  show = false;
  border = true;
  actionSheetList = [
    {
      text: "男",
    },
    {
      text: "女",
    },
    {
      text: "保密",
    },
  ];
  actionSheetCallback(index: any) {
    this.value = this.actionSheetList[index].text;
  }

  //头部组件参数，还有：height，color，background:{}等可选
  options: any = {
    title: "专辑 每日更新",
    // border: true,
  };
  // =======================================================
  //返回顶部相关的参数和方法
  scrollTop: number = 0;
  //返回顶部样式自定义
  iconStyle = {
    fontSize: "40rpx",
    color: "black",
  };
  //返回顶部
  onPageScroll(e: any) {
    this.scrollTop = e.scrollTop;
  }
  // =======================================================
  //头部标签栏数据
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
  // 标签栏当前值默认第一项：0
  current = 0;
  //标签栏切换触发事件
  change(index: number) {
    this.current = index;
  }
  // =======================================================
  //轮播图参数
  list2 = [
    {
      image:
        "https://img9.51tietu.net/pic/2019-091217/rls2dzopdklrls2dzopdkl.jpg",
      title: "昨夜星辰昨夜风，画楼西畔桂堂东",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091115%2F3fdbunbgvna3fdbunbgvna.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623858420&t=e90fae35783817231e6dfa5d70cbc9a7",
      title: "身无彩凤双飞翼，心有灵犀一点通",
    },
    {
      image: "https://img9.51tietu.net/pic/2019-091408/0ml21upwzut0ml21upwzut.jpg",
      title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
    },
  ];
  // =======================================================
  //以下是瀑布流相关参数和方法
  loadStatus = "loading";
  flowList: any = [];
  list: any = [];
  // =======================================================
  details(group_id: number, desc: string) {
    this.$u.route("pages/index/album", {
      group_id: group_id,
      desc: desc,
    })
  }
  // =======================================================
  index: number = 1;
  //获取首页数据接口
  async getData() {
    let that = this;
    const that_index = that.index;
    const res: any = await this.$ajax.index.getData({
      page: { index: this.index },
    });
    //解决数组连接问题
    if (res != null && res.data.length > 0) {
      if (that_index == this.index) {
        this.flowList = this.flowList.concat(res.data);
        this.index++;
      } else {
        this.index = that_index + 1;
      }
    } else {
      this.loadStatus = "nomore";
    }
  }
  onReachBottom() {
    this.loadStatus = "loading";
    // 模拟数据加载
    setTimeout(() => {
      this.getData();
    }, 1000);
  }
  // =======================================================
  //onLoad事件
  onLoad() {
    this.getData();
  }
  // =======================================================
  //下拉刷新
  onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function () {
      uni.reLaunch({ url: "/pages/index/index" });
      uni.stopPullDownRefresh();
    }, 567);
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
  top: 6rpx;
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