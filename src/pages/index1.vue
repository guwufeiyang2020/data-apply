<template>
  <div class="index">
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :responsive="true"
      :vertical-compact="true"
      :margin="[10, 10, 10, 10]"
      :use-css-transforms="true"
    >
      <grid-item 
        :x="layout[0].x"
        :y="layout[0].y"
        :w="layout[0].w"
        :h="layout[0].h"
        :i="layout[0].i"
        :key="layout[0].i">
        <div class="banner">
          <div class="width1000">
            <el-input
              class="search-input"
              placeholder="搜索资源"
              v-model="searchKey">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </grid-item>

      <grid-item 
        :x="layout[1].x"
        :y="layout[1].y"
        :w="layout[1].w"
        :h="layout[1].h"
        :i="layout[1].i"
        :key="layout[1].i">
        <!-- 平台推荐 -->
        <div class="swiper-box">
          <div class="sub-title">
            <div class="title-bg"></div>
            <h3>平台推荐</h3>
          </div>
          <swiper :options="swiperOption" ref="MySwiper" v-if="courseList.length > 1">
            <swiper-slide v-for="(item, index) in courseList" :key="index">
              <div class="slide-box">
                <img class="typeList-img" :src="item.path" />
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </grid-item>
    
      <grid-item 
        :x="layout[2].x"
        :y="layout[2].y"
        :w="layout[2].w"
        :h="layout[2].h"
        :i="layout[2].i"
        :key="layout[2].i">
        <div class="box">
          <div class="line">
            <div class="line-blue"></div>
          </div>
          <div class="summary-box">
            <img class="summary-img" src="../assets/images/summary-img.png" />
            <div class="summary-content">
              <div class="title">全球海洋温度格点化数据产品汇总</div>
              <div class="content">
                由大气所成里京副研究院牵头研制的全球海洋温度数据集，主要基于XBT、CTD、Argo.MBT等现场观测数据，利用XBT数据偏差订正方案（CH14）、
                新格点化方案、“重采样测试”评估方案等技7研制，有效克服了目前主流方案的3要问题。
              </div>
            </div>
          </div>
        </div>
      </grid-item>

      <grid-item 
        :x="layout[3].x"
        :y="layout[3].y"
        :w="layout[3].w"
        :h="layout[3].h"
        :i="layout[3].i"
        :key="layout[3].i">
        <!-- 热门资源 -->
        <div class="hot-resource-box">
          <div class="sub-title">
            <div class="title-bg"></div>
            <h3>热门资源</h3>
          </div>
          <div class="tab-wrapper">
            <ul class="tab-list">
              <li
                v-for="(item, index) in tabList"
                :key="index"
                :class="[{ active: currentStatus == item.status }, 'tab-item']"
                @click="selectTab(item)"
              >{{ item.label }}</li>
            </ul>
           
          </div>
          <div class="tab-content">
            <ul class="resource-list">
              <li class="resource-item" v-for="item in tabContentList" :key="item.id">
                <img class="resource-img" :src="item.path" />
                <div class="resource-title">{{item.title}}</div>
                <div class="resource-star">
                  <div class="left">
                    <my-rate :score="item.star" disabled />({{item.rateScore}})
                  </div>
                  <div class="right">
                    <svg-icon icon-class="like" class="icon-svg" />
                    ({{item.likeNum}})
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </grid-item>
      
      <grid-item 
        :x="layout[4].x"
        :y="layout[4].y"
        :w="layout[4].w"
        :h="layout[4].h"
        :i="layout[4].i"
        :key="layout[4].i">
        <!-- 按类目查看 -->
        <div class="category-box">
          <div class="sub-title">
            <div class="title-bg"></div>
            <h3>按类目查看</h3>
          </div>
          <ul class="category-list">
            <li class="category-item" v-for="item in categoryList" :key="item.id">
              <img class="category-img" :src="item.path" />
              <div class="category-title">{{item.title}}</div>
              <div class="category-num">({{item.num}})</div>
            </li>
          </ul>
        </div>
      </grid-item>  
    </grid-layout>
  </div>
</template>

<script>
import MyRate from '@/components/Rate';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VueGridLayout from 'vue-grid-layout'
import 'swiper/css/swiper.css'

export default{
  name: 'index',
  components:{
    Swiper,
    SwiperSlide,
    MyRate,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data(){
    return {
      searchKey: '',
      swiperOption: {
        // 环状轮播
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true  
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerGroup: 1,
        slidesPerView: 4,
        spaceBetween : 20,
        grabCursor: true,
        freeMode: true
      },
      courseList: [
        {
          id: '01',
          path: require('../assets/images/course1.png'),
          title: '流感预测模型',
          content: '本文收集国内2012年第一周至2018年第48周的流感监测周报数据，采用ARIMA模型和Holt-Winters指数平滑模型对国家流感中心数据建模'
        },
        {
          id: '02',
          path: require('../assets/images/course2.png'),
          title: '2020年人口流动数据',
          content: '百度地图城市省份流入流出数据，包括交通工具类型'
        },
        {
          id: '03',
          path: require('../assets/images/course3.png'),
          title: '中国海海气通量格点数据产品',
          content: '主要基于卫星遥感和再分析数据，以中国近海浮标、海上平台和海量塔等观测数据为训练数据、采用卷积神经网络深度学习和改进后的COARE3.5算法等技术研发'
        },
        {
          id: '04',
          path: require('../assets/images/course1.png'),
          title: '福建东南沿海风暴潮自贡',
          content: '主要基于卫星遥感和再分析数据，以中国近海浮标、海上平台和海量塔等观测数据为训练数据、采用卷积神经网络深度学习和改进后的COARE3.5算法等技术研发'
        },
        {
          id: '05',
          path: require('../assets/images/course2.png'),
          title: '流感预测模型',
          content: '本文收集国内2012年第一周至2018年第48周的流感监测周报数据，采用ARIMA模型和Holt-Winters指数平滑模型对国家流感中心数据建模'
        }
      ],
      tabList: [{
        label: '最热门',
        status: 'hot'
      }, {
        label: '最新上架',
        status: 'putaway'
      }, {
        label: '最近浏览',
        status: 'browse'
      }],
      currentStatus: 'hot',
      
      tabContentList: [{
          id: '01',
          path: require('../assets/images/resource-img1.png'),
          title: '2018年人口流动数据',
          star: 3,
          rateScore: 1200,
          likeNum: 120
      }, {
          id: '02',
          path: require('../assets/images/resource-img2.png'),
          title: '2019年人口流动数据',
          star: 4,
          rateScore: 1600,
          likeNum: 130
      }, {
          id: '03',
          path: require('../assets/images/resource-img3.png'),
          title: '2020年人口流动数据',
          star: 5,
          rateScore: 2000,
          likeNum: 140
      }, {
          id: '04',
          path: require('../assets/images/resource-img4.png'),
          title: '2021年人口流动数据',
          star: 2,
          rateScore: 800,
          likeNum: 60
      }, {
          id: '05',
          path: require('../assets/images/resource-img5.png'),
          title: '2018年人口流动数据',
          star: 1,
          rateScore: 400,
          likeNum: 28
      }],
      categoryList: [{
        id: '01',
        path: require('../assets/images/category-img1.png'),
        title: '数据资源',
        num: 1000
      }, {
        id: '02',
        path: require('../assets/images/category-img2.png'),
        title: '数据产品',
        num: 1239
      }, {
        id: '03',
        path: require('../assets/images/category-img3.png'),
        title: '数据产品',
        num: 1239
      }, {
        id: '04',
        path: require('../assets/images/category-img4.png'),
        title: '数据产品',
        num: 1239
      }, {
        id: '05',
        path: require('../assets/images/category-img5.png'),
        title: '数据产品',
        num: 1239
      }],
      layout: [
        {"x": 1, "y": 1, "w": 12, "h": 11, "i": "0", "maxW": 12 },
        {"x": 1, "y": 2, "w": 12, "h": 8, "i": "1", "maxW": 12},
        {"x": 1, "y": 3, "w": 12, "h": 9, "i": "2" , "minW": 12},
        {"x": 1, "y": 4, "w": 12, "h": 9, "i": "3", "minW": 12},
        {"x": 1, "y": 5, "w": 12, "h": 8, "i": "4", "minW": 12},
      ],
    }
  },
  computed: {
    MySwiper() {
      return this.$refs.MySwiper.swiper;
    }
  },
  mounted() {
    
  },
  methods: {
    selectTab(item) {
      this.currentStatus = item.status;
    },
  }
}
</script>

<style lang="scss" scoped>
  .index {
    .banner {
      width: 100%;
      height: 4.6rem;
      background: url('../assets/images/banner-bg.png') no-repeat left top;
      background-size: 100% 100%;
      .width1000 {
        display: flex;
        justify-content: center;
        .search-input {
          width: 7.6rem;
          margin-top: 3rem;
          /deep/ .el-input__inner {
            height: .5rem;
            line-height: 50px;
          }
        }
      }
    }
    .info-box {
      height: .54rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon-box {
        background: #1658c5;
        padding: .05rem .02rem .02rem;
        border-radius: .02rem;
        margin-right: .1rem;
      }
      .icon-svg {
        width: .2rem;
        height: .2rem;
      }
    }
    .sub-title {
      height: .6rem;
      position: relative;
      h3 {
        position: absolute;
        left: 0;
        top: 0;
        line-height: .6rem;
        font-size: .2rem;
        font-weight: bold;
      }
      .title-bg {
        position: absolute;
        left: .27rem;
        top: .27rem;
        width: .64rem;
        height: .12rem;
        background: #c3dfff;
      }
    }
    .slide-box {
      width: 3.6rem;
      margin: 0 50px;
      .typeList-img {
        width: 100%;
      }
      .title {
        height: .4rem;
        line-height: .4rem;
        font-size: .16rem;
        color: #1a1818;
      }
      .content {
        font-size: .14rem;
        line-height: .16rem;
        color: #898989;
      }
    }
    .line {
      height: .02rem;
      background: #ececec;
      margin: .3rem auto;
      position: relative;
      .line-blue {
        width: 3.3rem;
        height: .04rem;
        background: #1658c5;
        position: absolute;
        top: -1px;
      }
    }
    .summary-box {
      display: flex;
      height: 3rem;
      margin-bottom: 30px;
      .summary-img {
        width: 6.74rem;
        height: 3rem;
      }
      .summary-content {
        flex: 1;
        height: 3rem;
        padding: .3rem;
        background: #f6f6f6;
        .title {
          line-height: .4rem;
          font-size: .16rem;
          color: #1a1818;
        }
        .content {
          font-size: .14rem;
          line-height: .2rem;
          color: #898989;
        }
      }
    }
    .tab-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .2rem 0 0;
      height: .46rem;
      margin: .07rem 0 .26rem 0;
      border-bottom: 2px solid #ececec;
      .tab-list {
        display: flex;
        line-height: .44rem;
        font-size: 14px;
        color: #999;
        .tab-item {
          margin-right: .3rem;
          padding: 0 .2rem;
          cursor: pointer;
          &.active {
            color: #1668c5;
            border-bottom: 2px solid #1668c5;
          }
        }
      }
      .view-more {
        font-size: 14px;
        color: #1668c5;
      }
    }
    .resource-list {
      display: flex;
      justify-content: space-between;
    }
    .resource-item {
      width: 3rem;
      height: 2.8rem; 
      &:last-child {
        margin-right: 0;
      }
      .resource-img {
        width: 100%;
        margin-bottom: 5px;
      }
      .resource-title {
        line-height: .3rem;
        font-size: .16rem;
        color: #1a1818;
      }
      .resource-star {
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size: 14px;
        .left {
          display: flex;
          align-items: center;
        }
        .right {
          display: flex;
          align-items: center;
          .icon-svg {
            width: .15rem;
            margin-right: 1px;
          }
        }
      }
    }
    // 按类目查看
    .category-box {
      margin-bottom: .3rem;
      .sub-title { 
        .title-bg { 
          left: .48rem;
        }
      }
      .category-list {
        display: flex;
        justify-content: space-between;
      }
      .category-item {
        width: 2.8rem;
        height: 240px;
        padding-top: .28rem;
        background: #011130;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        .category-title {
          line-height: .4rem;
        }
      }
    }
  }
</style>