<template>
  <div class="detail-wrapper">
    <div class="detail-content">
      <div class="detail-top">
        <div class="top-left">
          <div class="section1">
            <img src="../assets/images/img1-left.png" />
            <div class="section1-content">
              <div class="title">
                <span class="line"></span>
                <h1>作战数据应用网站标准</h1>
              </div>
              <ul class="info-list">
                <li class="info-item">
                  <div class="label">密级：</div>
                  <div class="value">机密</div>
                </li>
                <li class="info-item">
                  <div class="label">资源标识：</div>
                  <div class="value">N22312323</div>
                </li>
                <li class="info-item">
                  <div class="label">资源类型：</div>
                  <div class="value">管理员</div>
                </li>
                <li class="info-item">
                  <div class="label">资源大小：</div>
                  <div class="value">5.5GB</div>
                </li>
                <li class="info-item">
                  <div class="label">所属目录：</div>
                  <div class="value">管理员</div>
                </li>
                <li class="info-item">
                  <div class="label">最新版本：</div>
                  <div class="value">2.0</div>
                </li>
                <li class="info-item">
                  <div class="label">拥有者：</div>
                  <div class="value">管理员</div>
                </li>
                <li class="info-item">
                  <div class="label">最新发布日期：</div>
                  <div class="value">2021年3月12日</div>
                </li>
                <li class="info-item">
                  <div class="label">提供方：</div>
                  <div class="value">数据大队</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="section2">
            <button class="btn btn-border">
              <i class="el-icon-view"></i>
              访问  
            </button>
            <button class="btn btn-border">
              <i class="el-icon-download"></i>
              下载
            </button>
             <button class="btn btn-border">
              <i class="el-icon-star-off"></i>
              收藏
            </button>
            <button class="btn btn-border">
              <i class="el-icon-lock"></i> 
              申请权限
            </button>
          </div>
          <div class="section3">
            <h2>资源介绍:</h2>
            <p>本标准规定了作战数据应用网站的总体技术要求，本标准适用作战数据应用网站的设计。</p>
          </div>
        </div>
        <div class="top-right">
          <div class="section4">
            <h3 class="sub-title">相关标签</h3>
            <ul class="label-list">
              <li 
                class="label-item" 
                v-for="(item, index) in labelList" 
                :key="index">
                {{item}}
              </li>
            </ul> 
          </div>
          <div class="section5">
            <h3 class="sub-title">海外军情解密<a href="#">更多</a></h3>
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
           <div class="section6">
            <h3 class="sub-title">最近浏览<a href="#">更多</a></h3>
            <ul class="recent-browse-list">
              <li class="recent-browse-item" v-for="(item, index) in recentBrowseList" :key="index">
                <img class="recent-browse-img" :src="item.path" />
                <div class="recent-browse-content">
                  <span class="recent-browse-text">{{item.title}}</span>
                  <span class="recent-browse-date">{{item.date}}</span>
                </div>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="detail-bottom">
        <h3 class="bottom-title">你可能还会喜欢</h3>
        <ul class="resource-list">
          <li class="resource-item" v-for="item in tabContentList" :key="item.id">
            <img class="resource-img" :src="item.path" />
            <div class="resource-content">
              <div class="resource-title">{{item.title}}</div>
              <div class="resource-type">
                <div class="type-left">
                  {{item.type}}
                </div>
                <div class="type-right">
                  <svg-icon icon-class="like" class="icon-svg" />
                  ({{item.likeNum}})
                </div>
              </div>
            </div>
          </li>
        </ul>

        <h3 class="bottom-title">人气组合</h3>
        <ul class="resource-list">
          <li class="resource-item" v-for="item in tabContentList" :key="item.id">
            <img class="resource-img" :src="item.path" />
            <div class="resource-content">
              <div class="resource-title">{{item.title}}</div>
              <div class="resource-type">
                <div class="type-left">
                  {{item.type}}
                </div>
                <div class="type-right">
                  <svg-icon icon-class="like" class="icon-svg" />
                  ({{item.likeNum}})
                </div>
              </div>
            </div>
          </li>
        </ul>

        <h3 class="bottom-title">发布者其他资源</h3>
        <ul class="resource-list">
          <li class="resource-item" v-for="item in tabContentList" :key="item.id">
            <img class="resource-img" :src="item.path" />
            <div class="resource-content">
              <div class="resource-title">{{item.title}}</div>
              <div class="resource-type">
                <div class="type-left">
                  {{item.type}}
                </div>
                <div class="type-right">
                  <svg-icon icon-class="like" class="icon-svg" />
                  ({{item.likeNum}})
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
   </div>
  </div>
</template>

<script>

export default{
  name: 'query',
  components: {
   
  },
  data(){
    return {
      labelList: ['人口', '数据', '2020年', '城市大数据', '人口统计学', '行为分析', '预测分析', '人口', '行为分析', '预测分析', '人口', '数据', '2020年', '城市大数据', '人口统计学'],
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
      }],
      recentBrowseList: [{
        id: '01',
        path: require('../assets/images/img3-r.png'),
        title: '最近浏览资源1',
        date: '2021-03-22 16:22:30'
      }, {
        id: '02',
        path: require('../assets/images/img4-r.png'),
        title: '最近浏览资源2',
        date: '2021-03-22 16:22:30'
      }, {
        id: '03',
        path: require('../assets/images/img5-r.png'),
        title: '最近浏览资源3',
        date: '2021-03-22 16:22:30'
      }, {
        id: '04',
        path: require('../assets/images/img6-r.png'),
        title: '最近浏览资源4',
        date: '2021-03-22 16:22:30'
      }],
      tabContentList: [{
          id: '01',
          path: require('../assets/images/resource-img1.png'),
          title: '2018年人口流动数据',
          type: '人口统计学',
          likeNum: 120
      }, {
          id: '02',
          path: require('../assets/images/resource-img2.png'),
          title: '2019年人口流动数据',
          type: '人口统计学',
          likeNum: 130
      }, {
          id: '03',
          path: require('../assets/images/resource-img3.png'),
          title: '2020年人口流动数据',
          type: '人口统计学',
          likeNum: 140
      }, {
          id: '04',
          path: require('../assets/images/resource-img4.png'),
          title: '2021年人口流动数据',
          type: '人口统计学',
          likeNum: 60
      }, {
          id: '05',
          path: require('../assets/images/resource-img5.png'),
          title: '2018年人口流动数据',
          type: '人口统计学',
          likeNum: 28
      }, {
         id: '06',
          path: require('../assets/images/resource-img6.png'),
          title: '2018年人口流动数据',
          type: '人口统计学',
          likeNum: 28
      }],
    }
  },
  computed: {
   
  },
  mounted() {
    
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
  .detail-wrapper {
    width: 100%;
    min-height: calc(100vh - 1.4rem);
    padding: .32rem 1rem;
    background: #f6f6f6;
    .detail-content {
      background: #fff;
      border-radius: .06rem;
      padding: .3rem;
    }
    .detail-top {
      display: flex;
      border-bottom: 1px solid rgb(223, 223, 223);
      .top-left {
        width: 12rem;
        padding: .2rem;
        .section1 {
          display: flex;
          img {
            width: 3.4rem;
            height: 3rem;
            margin-right: .3rem;
          }
          .section1-content {
            flex: 1;
          }
          .title {
            display: flex;
            align-items: center;
            height: .6rem;
            margin-bottom: .2rem;
            .line {
              display: inline-block;
              width: .08rem;
              height: .36rem;
              margin-right: .1rem;
              background: #1d72e8;
            }
            h1 {
              font-size: 24px;
              font-weight: bold;
              color: #575757;
            }
          }
          .info-list {
            .info-item {
              display: flex;
              line-height: .5rem;
              width: 50%;
              float: left;
              font-size: 14px;
              .label {
                width: 1.2rem;
                margin-right: .1rem;
                text-align: right;
                color: #727a82;
              }
              .value {
                color: #575757;
              }
            }
          }
        }
        .section2 {
          padding: .4rem 0;
          border-bottom: 1px solid rgb(223, 223, 223);
        }
        .section3 {
          h2 {
            line-height: 0.6rem;
            font-size: 18px;
            font-weight: bold;
          }
          p {
            font-size: 14px;
            color: #727b83;
          }
        }
      }
      .top-right {
        flex: 1;
        padding-right: .3rem;
        .section4 {
          margin-bottom: .2rem;
          .label-item {
            display: inline-block;
            margin: 0 .2rem .2rem 0;
            font-size: .14rem;
            color: #7d858c;
            padding: .08rem .1rem;
            border-radius: .04rem;
            border: 1px solid #7e868d;
          }
        }
        .section5 {
          margin-bottom: .2rem;
          .img-news {
            display: flex;
            margin-bottom: .2rem;
            .img-item {
              width: 2rem;
              margin-right: .3rem;
              img {
                width: 2rem;
                height: 1.2rem;
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
        .section6 {
          .recent-browse-list {
            .recent-browse-item {
              display: flex;
              align-items: center;
              margin-bottom: .3rem;
              .recent-browse-img {
                width: 1rem;
                height: 1rem;
                margin-right: .2rem;
              }
              .recent-browse-content {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .recent-browse-text {
                font-size: .16px;
                color: #788087;
              }
              .recent-browse-date {
                font-size: .14rem;
                color: #c2c2c2;
              }
            }
          }
        }
        .sub-title {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: bold;
          padding-right: .3rem;
          line-height: .5rem;
          color: #1a1a1a;
          a {
            font-size: .14rem;
            color: #959595;
            font-weight: normal;
          }
        }
      }
    }
    .detail-bottom {
      .bottom-title {
        line-height: .8rem;
        font-size: 20px;
        font-weight: bold;
      }
      .resource-list {
        display: flex;
        justify-content: space-between;
        margin-bottom: .3rem;
         .resource-item {
          width: 2.46rem;
          .resource-img {
            width: 100%;
            margin-bottom: 5px;
          }
          .resource-title {
            line-height: .3rem;
            font-size: .16rem;
            color: #1a1818;
          }
          .resource-type {
            display: flex;
            justify-content: space-between;
            color: #999;
            font-size: 14px;
            .type-left {
              display: flex;
              align-items: center;
            }
            .type-right {
              display: flex;
              align-items: center;
              .icon-svg {
                width: .15rem;
                margin-right: 1px;
              }
            }
          }
        }
      }
    }
   

    .btn-border {
      color: #1d72e8;
      font-size: .16rem;
      background: #fff;
      outline: none;
      margin-right: .1rem;
      padding: .1rem .2rem;
      border-radius: .05rem;
      border: 1px solid #3983ea;
      -webkit-appearance: none;
      cursor: pointer;
      &:hover {
        background: #C9E2F7;
        border: 1px solid #C9E2F7;
      }
    }
  }
</style>