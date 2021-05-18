<template>
  <div class="index-wrapper">
    <div class="index-top">
      <div class="top-left">
        <div class="section section1">
          <div class="sub-title">习主席要闻</div>
          <div class="img-box">
            <img class="banner-img" src="../assets/images/img-left-top.png" />
            <p class="first-title">{{newList[0].title}}</p>
          </div>
          <ul class="new-list">
            <li class="new-item" v-for="item in newList.slice(1)" :key="item.id">{{item.title}}</li>
          </ul>
        </div>
        <div class="section section2">
          <div class="sub-title">我的看板</div>
          <ul class="kan-ban">
            <li>
              <p class="label">数据</p>
              <p class="value">16</p>
            </li>
            <li>
              <p class="label">产品</p>
              <p class="value">10</p>
            </li>
            <li>
              <p class="label">法规制度</p>
              <p class="value">10</p>
            </li>
            <li>
              <p class="label">模型</p>
              <p class="value">29</p>
            </li>
            <li>
              <p class="label">应用</p>
              <p class="value">8</p>
            </li>
          </ul>
          <div class="echart-box">
            <img class="echart-img" src="../assets/images/img-center-tjt.png" />
          </div>
        </div>
        <div class="section section3">
          <div class="section3-left">
            <div class="sub-title">我的目录</div>
            <div class="tree-box min-scrollbar">
              <el-tree 
                :data="treeData" 
                :props="defaultProps" 
                node-key="id"
                :default-expanded-keys="[1, 3, 5]"
                @node-click="handleNodeClick">
              </el-tree>
            </div>
          </div>
          <div class="section3-right">
            <div class="sub-title">搜索</div>
            <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
              <el-button slot="append" >搜索</el-button>
            </el-input>
            <ul class="search-list">
              <li class="search-item" v-for="item in searchList" :key="item.id">
                <div class="item-left">
                  <div class="img-box">
                    <img class="echart-img" :src="computedIcon(item.type)" />
                  </div>
                  <div class="content-box">
                    <p>
                      <span class="type" :style="{ background: backgroundComputed(item.type) }"> {{item.type}} </span> 
                      <span class="title"> {{item.title}} </span> 
                    </p>
                    <p class="content"> {{item.content}} </p>
                  </div>
                </div>
                <div class="item-right">
                  <p>{{item.date}}</p>
                  <p>提供方：{{item.provider}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="top-right">
        <div class="section section5">
          <div class="sub-title">训练靶场</div>
          <ul class="system-list">
            <li class="system-item">
               <div class="img-box">
                  <img class="echart-img" src="../assets/images/icon-r-jsxl.png" />
                </div>
              <p>军事训练系统</p>
            </li>
            <li class="system-item">
               <div class="img-box">
                  <img class="echart-img" src="../assets/images/icon-r-bdxx.png" />
                </div>
              <p>部队信息管理系统</p>
            </li>
            <li class="system-item">
               <div class="img-box">
                  <img class="echart-img" src="../assets/images/iocn-r-jsjy.png" />
                </div>
              <p>军事教育信息系统</p>
            </li>
            <li class="system-item">
               <div class="img-box">
                  <img class="echart-img" src="../assets/images/icon-r-zygb.png" />
                </div>
              <p>专业干部教育</p>
            </li>
          </ul>
        </div>
        <div class="section section6">
           <div class="tab-wrapper">
            <ul class="tab-list">
              <li
                v-for="(item, index) in tabList"
                :key="index"
                :class="[{ active: currentIndex == item.index }, 'tab-item']"
                @click="selectTab(item)"
              >{{ item.label }}</li>
            </ul>
          </div>
          <div class="tab-content">
            <ul class="img-news">
              <li class="img-item">
                <img class="img" src="../assets/images/img1-r.png" />
                <p>{{infoList[0].title}}</p>
              </li>
              <li class="img-item">
                <img class="img" src="../assets/images/img2-r.png" />
                <p>{{infoList[1].title}}</p>
              </li>
            </ul>
            <ul class="text-news">
              <li v-for="(item, index) in infoList.slice(2)" :key="index" class="text-item">
                {{item.title}}
              </li>
            </ul>

          </div>
        </div>
        <div class="section section7">
          <div class="sub-title">专业支撑</div>
           <ul class="system-list">
            <li class="system-item">
              <div class="img-box">
                <img class="echart-img" src="../assets/images/icon-r-jsxl.png" />
              </div>
              <p>信息栏目</p>
            </li>
            <li class="system-item">
              <div class="img-box">
                <img class="echart-img" src="../assets/images/icon-r-bdxx.png" />
              </div>
              <p>信息发布</p>
            </li>
            <li class="system-item">
              <div class="img-box">
                <img class="echart-img" src="../assets/images/iocn-r-jsjy.png" />
              </div>
              <p>人工审核</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="index-bottom">
      <div class="section section8">
        <ul class="recent-browse-list">
          <li class="recent-browse-item" v-for="(item, index) in recentBrowseList" :key="index">
            <img class="recent-browse-img" :src="item.path" />
            <p class="recent-browse-text">{{item.title}}</p>
          </li>
        </ul>
        <div class="status-box">
          <div class="status-list">
            <p class="status-item"><i class="dot on"></i>平时状态</p>
            <p class="status-item"><i class="dot"></i>应急状态</p>
            <p class="status-item"><i class="dot"></i>作战状态</p>
          </div>
          <p>
            天文时间 2021-05-112 18:53:11
          </p>
          <p>
            作战时间 2021-05-112 18:53:11
          </p>
        </div>
        <div class="last-box">
           <p>
            意见反馈
          </p>
          <p>
            联系我们
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return  {
      search: '',
      newList: [{
        id: '01',
        title: '习主席是"一带一路"伟大筑梦者'
      }, {
        id: '02',
        title: '小角落大民生这件"小事"习近平一直关心'
      }, {
        id: '03',
        title: '习主席在出席的这项活动让全军倍感振奋'
      }, {
        id: '04',
        title: '习主席在解放军和武警部队代表全体会议上的讲话'
      }, {
        id: '05',
        title: '2021新年贺词，习主席为中国人民和中国军人点赞'
      }],
      treeData: [{
          id: 1,
          label: '资源目录',
          children: [{
            id: 3,
            label: '目录1',
            children: [{
              id: 8,
              label: '目录11'
            }, {
              id: 9,
              label: '目录12'
            }]
          }, {
            id: 4,
            label: '目录2',
            children: [{
              id: 10,
              label: '目录21'
            }, {
              id: 11,
              label: '目录22'
            }]
          }]
        }, {
          id: 2,
          label: '我的目录',
          children: [{
            id: 5,
            label: '海军',
            children: [{
              id: 12,
              label: '装备管理'
            }, {
              id: 13,
              label: '信息化规章'
            }, {
              id: 14,
              label: '党政建设'
            }]
          }, {
            id: 6,
            label: '陆军'
          }, {
            id: 7,
            label: '空军'
          }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchList: [{
        type: '定制应用',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        type: '法规标准',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        type: '模型资源',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        type: '数据产品',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        type: '数据资源',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }],
      tabList: [{
        label: '海外军情解密',
        index: 1
      }, {
        label: '热点信息',
        index: 2
      }, {
         label: '智能推荐',
        index: 3
      }],
      currentIndex: 1,
      infoList: [{
        id: '01',
        title: '伊朗12艘快艇高速逼近美舰队：只为要钱不为麻烦'
      }, {
        id: '02',
        title: '以色列对加沙地带发动空袭 巴勒斯坦称已致20人死亡'
      }, {
        id: '03',
        title: '警惕！疑美军库用间谍船在台海周边对大陆抵近侦察'
      }, {
        id: '04',
        title: '150枚火箭弹夜袭以色列，以外长访韩途中紧急回国'
      }, {
        id: '05',
        title: '警惕！疑美军库用间谍船在台海周边对大陆抵近侦察'
      }, {
        id: '06',
        title: '150枚火箭弹夜袭以色列，以外长访韩途中紧急回国'
      }],
      recentBrowseList: [{
        id: '01',
        path: require('../assets/images/img-left-botttom1.png'),
        title: '最近浏览资源1'
      }, {
        id: '02',
        path: require('../assets/images/img-left-botttom2.png'),
        title: '最近浏览资源2'
      }, {
        id: '03',
        path: require('../assets/images/img-left-botttom3.png'),
        title: '最近浏览资源3'
      }, {
        id: '04',
        path: require('../assets/images/img-left-botttom4.png'),
        title: '最近浏览资源4'
      }, {
        id: '05',
        path: require('../assets/images/img-left-botttom5.png'),
        title: '最近浏览资源5'
      }, {
        id: '06',
        path: require('../assets/images/img-left-botttom3.png'),
        title: '最近浏览资源6'
      }, {
        id: '07',
        path: require('../assets/images/img-left-botttom4.png'),
        title: '最近浏览资源7'
      }, {
        id: '08',
        path: require('../assets/images/img-left-botttom5.png'),
        title: '最近浏览资源8'
      }]
    }
  },
  computed: {
   computedIcon() {
     return (type) => {
       if(type === '定制应用') {
         return require('../assets/images/icon-c-dzyy.png')
       } else if (type === '法规标准') {
        return require('../assets/images/icon-c-fgbz.png')
       } else if (type === '模型资源') {
        return require('../assets/images/icon-c-dzyy.png')
       } else if (type === '数据产品') {
        return require('../assets/images/icon-c-cpsj.png')
       } else if (type === '数据资源') {
        return require('../assets/images/icon-c-sjzy.png')
       } else {
         return require('../assets/images/icon-c-dzyy.png')
       }
     }
    },
    backgroundComputed() {
      return (type) => {
        if(type === '定制应用') {
          return '#00AE65'; 
        } else if (type === '法规标准') {
          return '#c0144e'; 
        } else if (type === '模型资源') {
          return '#d28a11'; 
        } else if (type === '数据产品') {
          return '#1481c0'; 
        } else if (type === '数据资源') {
          return '#00AE65'; 
        } else {
          return '#00AE65'; 
        }
      }
    }
  },
  mounted() {
    
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    selectTab(item) {
      this.currentIndex = item.index;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
.index-wrapper {
  width: 100%;
  padding: .32rem 1rem;
  background: #f6f6f6;
  .index-top {
    display: flex;
    .top-left {
      width: 12.8rem;
    }
    .top-right {
      flex: 1;
    }
  }
  .index-bottom {
    height: 1.4rem;
  }
  .section {
    background: #fff;
    border-radius: .06rem;
    margin: 0 .14rem .14rem 0;
    padding: .16rem;
    float: left;
    .sub-title {
      height: .5rem;
      line-height: .5rem;
      font-size: .16rem;
      @include font_color($font-color-theme);
    }
  }
  .section1 {
    width: 5.2rem;
    height: 4.33rem;
    .img-box {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }
      .first-title {
        position: absolute;
        bottom: 2px;
        width: 100%;
        height: 31px;
        padding: 0 .1rem;
        background: rgba(45, 81, 139, 0.7);
        font-size: 14px;
        color: #fff;
        line-height: 31px;
      }
    }
    .new-list {
      margin-top: .1rem;
      .new-item {
        padding: 0 .1rem;
        font-size: 12px;
        line-height: .28rem;
      }
    }
  }
  .section2 {
    width: 7.3rem;
    height: 4.33rem;
    .kan-ban {
      display: flex;
      justify-content: space-between;
      li {
        flex: 1;
        text-align: center;
        .label {
          line-height: .3rem;
          font-size: 14px;
          color: #8C8888;
        }
        .value {
          font-size: 22px;
          line-height: .3rem;
          font-weight: bold;
          color: #1C1A1A;
        }
      }
    }
    .echart-box {
      margin-top: .1rem;
      padding: .2rem;
      .echart-img {
        width: 100%;
      }
    }
  }
  .section3 {
    display: flex;
    width: calc(100% - .14rem);
    margin-right: .14rem;
    height: 4.33rem;
    .section3-left {
      flex: 1;
      margin-right: .3rem;
      padding: .1rem;
      .tree-box {
        max-height: 3.3rem;
        overflow-y: auto;
      }
    }
    .section3-right {
      width: 8rem;
      height: 4.33rem;
      /deep/ .el-button {
        @include bg_color($background-color-theme);
        @include border_color($font-color-theme);
        color: #fff;
        border-radius: 0 4px 4px 0;
      }
      .search-list {
        margin-top: .1rem;
        padding: .1rem;
        max-height: 2.8rem;
        overflow-y: auto;
        .search-item {
          height: .88rem;
          font-size: 14px;
          color: #867f7f;
          display: flex;
          border-bottom: 1px solid #ecf1f8;
          justify-content: space-between;
        }
        .item-left {
          height: .88rem;
          display: flex;
          align-items: center;
        }
        .img-box {
          width: .6rem;
          height: .6rem;
          padding: .1rem;
          border-radius: .1rem;
          margin-right: .1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          @include bg_color($background-color-theme);
          @include border_color("border_color1");
          img {
            width: .28rem;
            height: .28rem;
          }
        }
        .content-box {
          p {
            height: .3rem;
            line-height: .3rem;
          }
          .type {
            padding: 4px 5px;
            background: #49c014;
            color: #fff;
            border-radius: 3px;
            margin-right: .1rem;
          }
          .title {
            color: #383636;
          }
          .content {
            color: #867f7f;
          }
        }
        .item-right {
          height: .88rem;
          text-align: right;
          padding-top: .16rem;
          p {
            height: .3rem;
            line-height: .3rem;
          }
        }
      }
    }
  }
  .section5 {
    width: 100%;
    height: 2.8rem;
    margin-bottom: .1rem;
    .system-list {
      .system-item {
        width: 1.6rem;
        height: 1.1rem;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img-box {
          width: .58rem;
          height: .58rem;
          @include bg_color($background-color-theme);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: .4rem;
            height: .4rem;
          }
        }
        p {
          line-height: .32rem;
          font-size: 12px;
        }
      }
    }
  }
  .section6 {
    width: 100%;
    height: 3.8rem;
    margin-bottom: .1rem;
    .tab-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .2rem 0 0;
      height: .46rem;
      margin: .07rem 0 .26rem 0;
      border-bottom: 1px solid #ececec;
      .tab-list {
        display: flex;
        line-height: .44rem;
        font-size: 14px;
        color: #999;
        .tab-item {
          margin-right: .2rem;
          padding: 0 .1rem;
          cursor: pointer;
          &.active {
            @include font_color($font-color-theme);
            @include border_color_bottom($font-color-theme);
          }
        }
      }
    }
    .tab-content {
      .img-news {
        display: flex;
        margin-bottom: .2rem;
        .img-item {
          width: 1.7rem;
          margin-right: 20px;
          img {
            width: 1.7rem;
            height: 1.05rem;
          }
          p {
            line-height: .2rem;
            color: #1C1A1A;
            font-size: 12px;
          }
        }
      }
      .text-item {
        line-height: .24rem;
        font-size: 12px;
        color: #747070;
      }
    }
  }
  .section7 {
    width: 100%;
    height: 2rem;
     .system-list {
      .system-item {
        width: 0.9rem;
        height: 1.1rem;
        float: left;
        margin-right: .2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img-box {
          width: .58rem;
          height: .58rem;
          @include bg_color($background-color-theme);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: .4rem;
            height: .4rem;
          }
        }
        p {
          line-height: .32rem;
          font-size: 12px;
        }
      }
    }
  }
  .section8 {
    width: 100%;
    height: 1.4rem;
    display: flex;
    .recent-browse-list {
      display: flex;
      align-items: center;
      height: 1rem;
      border-right: 1px solid #ccc;
      .recent-browse-item {
        width: .96rem;
        margin-right: .2rem;
        .recent-browse-img {
          width: .78rem;
          height: .6rem;
        }
        .recent-browse-text {
          line-height: .2rem;
          font-size: 12px;
        }
      }
    }
    .status-box {
      height: 1rem;
      border-right: 1px solid #ccc;
      padding: .2rem .5rem;
      .status-list {
        display: flex;
        margin-bottom: .1rem;
        .status-item {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: bold;
          color: #1C1A1A;
          margin-right: .4rem;
          
          .dot {
            display: inline-block;
            width: .16rem;
            height: .16rem;
            border-radius: 50%;
            margin-right: .05rem;
            background: #a3a3a3;
            &.on {
              background: #009900;
            }
          }
        }
      }
      p {
        font-size: 14px;
        line-height: .26rem;
      }
    }
    .last-box {
      flex: 1;
      padding-top: .3rem;
      p {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: #1C1A1A;
        line-height: .24rem;
      }
    }
  }
}
</style>