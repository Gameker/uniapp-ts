<template>
  <view class="content">
    <!-- 头部 -->
    <view class="header">
      <Header :options="options">
        <template #query>
          <view style="padding: 15px 20px">
            <u-search action-text="搜索"></u-search>
          </view>
        </template>
      </Header>
    </view>
    <!-- 内容 -->
    <view class="main u-skeleton">
      <view style="padding: 20px 15px 6px 15px">
        <u-swiper
          height="350"
          :list="list2"
          indicator-pos="topRight"
          :title="true"
          class="u-skeleton-rect"
        ></u-swiper>
      </view>
      <view class="wrap">
        <!-- <u-button @click="clear">清空列表</u-button> -->
        <u-waterfall v-model="flowList" ref="uWaterfall">
          <template v-slot:left="{ leftList }">
            <view
              class="demo-warter"
              v-for="(item, index) in leftList"
              :key="index"
            >
              <!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
              <u-lazy-load
                threshold="-450"
                border-radius="10"
                loading-img="/static/loading.gif"
                error-img="/static/load_error.png"
                :image="item.image"
                :index="index"
              ></u-lazy-load>
              <view class="demo-title">
                {{ item.title }}
              </view>
              <view class="demo-price"> {{ item.price }}元 </view>
              <view class="demo-tag">
                <view class="demo-tag-owner"> 自营 </view>
                <view class="demo-tag-text"> 放心购 </view>
              </view>
              <view class="demo-shop">
                {{ item.shop }}
              </view>
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view
              class="demo-warter"
              v-for="(item, index) in rightList"
              :key="index"
            >
              <u-lazy-load
                threshold="-450"
                border-radius="10"
                :image="item.image"
                :index="index"
                loading-img="/static/loading.gif"
                error-img="/static/load_error.png"
              ></u-lazy-load>
              <view class="demo-title">
                {{ item.title }}
              </view>
              <view class="demo-price"> {{ item.price }}元 </view>
              <view class="demo-tag">
                <view class="demo-tag-owner"> 自营 </view>
                <view class="demo-tag-text"> 放心购 </view>
              </view>
              <view class="demo-shop">
                {{ item.shop }}
              </view>
            </view>
          </template>
        </u-waterfall>
        <u-loadmore
          bg-color="rgb(240, 240, 240)"
          :status="loadStatus"
          @loadmore="addRandomData"
        ></u-loadmore>
      </view>
      <!--引用组件 骨架屏-->
      <u-skeleton
        :loading="false"
        :animation="true"
        bgColor="#FFF"
      ></u-skeleton>
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
@Component({ components: { Header } })
export default class index extends Vue {
  options: any = {
    title: "女友管理程序",
  };
  scrollTop: number = 0;
  iconStyle = {
    fontSize: "40rpx",
    color: "#F7889D",
  };
  onLoad() {
    this.addRandomData();
  }
  onPageScroll(e: any) {
    this.scrollTop = e.scrollTop;
  }
  onReachBottom() {
    this.loadStatus = "loading";
    // 模拟数据加载
    setTimeout(() => {
      this.addRandomData();
      this.loadStatus = "loadmore";
    }, 1000);
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

  // loadingImg = "/static/loading.gif";
  // errorImg = "/static/load_error.png";
  keyword: string = "遥看瀑布挂前川";

  list2 = [
    {
      image:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2542710983,3406835393&fm=26&gp=0.jpg",
      title: "昨夜星辰昨夜风，画楼西畔桂堂东",
    },
    {
      image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
      title: "身无彩凤双飞翼，心有灵犀一点通",
    },
    {
      image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
      title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
    },
  ];
  loadStatus = "loadmore";
  flowList: any = [];
  list = [
    {
      price: 35,
      title:
        "北国风光，千里冰封，万里雪飘北国风光，千里冰封，万里雪飘2222122222222222222222233111",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1015613717,2953594052&fm=26&gp=0.jpg",
    },
    {
      price: 75,
      title: "望长城内外，惟余莽莽",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss1.bds1111tatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3158103848,3930143469&fm=26&gp=0.jpg",
    },
    {
      price: 385,
      title: "大河上下，顿失滔滔",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1123325709,3889625062&fm=26&gp=0.jpg",
    },
    {
      price: 784,
      title: "欲与天公试比高",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3610741644,1365751844&fm=26&gp=0.jpg",
    },
    {
      price: 7891,
      title: "须晴日，看红装素裹，分外妖娆",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3769855956,3407723647&fm=26&gp=0.jpg",
    },
    {
      price: 2341,
      shop: "李白杜甫白居易旗舰店",
      title: "江山如此多娇，引无数英雄竞折腰",
      image:
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=856416488,2118015371&fm=26&gp=0.jpg",
    },
    {
      price: 661,
      shop: "李白杜甫白居易旗舰店",
      title: "惜秦皇汉武，略输文采",
      image:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1889660434,1069288854&fm=26&gp=0.jpg",
    },
    {
      price: 1654,
      title: "唐宗宋祖，稍逊风骚",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2410275967,581601604&fm=26&gp=0.jpg",
    },
    {
      price: 1678,
      title: "一代天骄，成吉思汗",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=353433341,2564518283&fm=26&gp=0.jpg",
    },
    {
      price: 924,
      title: "只识弯弓射大雕",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1196781438,2822532451&fm=26&gp=0.jpg",
    },
    {
      price: 8243,
      title: "俱往矣，数风流人物，还看今朝",
      shop: "李白杜甫白居易旗舰店",
      image:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=405276296,856841904&fm=26&gp=0.jpg",
    },
  ];
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
/* page不能写带scope的style标签中，否则无效 */
page {
  background-color: rgb(240, 240, 240);
}
</style>

<style lang="scss" scoped>
.wrap {
  padding: 18rpx;
}

.header {
  background: linear-gradient(-90deg, #a050d7 0, #f7889c 100%);
}
.demo-warter {
  border-radius: 8px;
  margin: 5px;
  background-color: #ffffff;
  padding: 8px;
  position: relative;
}

.u-close {
  position: absolute;
  top: 32rpx;
  right: 32rpx;
}

.demo-image {
  width: 100%;
  border-radius: 4px;
}

.demo-title {
  font-size: 30rpx;
  margin-top: 5px;
  color: $u-main-color;
  //多行文本溢出显示...
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.demo-tag {
  display: flex;
  margin-top: 5px;
}

.demo-tag-owner {
  background-color: #c27ef0;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 4rpx 14rpx;
  border-radius: 50rpx;
  font-size: 20rpx;
  line-height: 1;
}

.demo-tag-text {
  border: 1px solid $u-type-primary;
  color: $u-type-primary;
  margin-left: 10px;
  border-radius: 50rpx;
  line-height: 1;
  padding: 4rpx 14rpx;
  display: flex;
  align-items: center;
  border-radius: 50rpx;
  font-size: 20rpx;
}

.demo-price {
  font-size: 30rpx;
  color: $u-type-error;
  margin-top: 5px;
}

.demo-shop {
  font-size: 22rpx;
  color: $u-tips-color;
  margin-top: 5px;
}
</style>