<template>
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
</template>

<script>
export default { 
  data() {
    return  { 
      recentBrowseList: [{
        id: '01',
        path: require('../../assets/images/img-left-botttom1.png'),
        title: '最近浏览资源1'
      }, {
        id: '02',
        path: require('../../assets/images/img-left-botttom2.png'),
        title: '最近浏览资源2'
      }, {
        id: '03',
        path: require('../../assets/images/img-left-botttom3.png'),
        title: '最近浏览资源3'
      }, {
        id: '04',
        path: require('../../assets/images/img-left-botttom4.png'),
        title: '最近浏览资源4'
      }, {
        id: '05',
        path: require('../../assets/images/img-left-botttom5.png'),
        title: '最近浏览资源5'
      }, {
        id: '06',
        path: require('../../assets/images/img-left-botttom3.png'),
        title: '最近浏览资源6'
      }, {
        id: '07',
        path: require('../../assets/images/img-left-botttom4.png'),
        title: '最近浏览资源7'
      }, {
        id: '08',
        path: require('../../assets/images/img-left-botttom5.png'),
        title: '最近浏览资源8'
      }]
    }
  }
} 
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
.section {
  width: 100%;
  background: #fff;
  border-radius: .06rem;
  padding: .16rem;
  .sub-title {
    height: .5rem;
    line-height: .5rem;
    font-size: .16rem;
    @include font_color($font-color-theme);
  }
}
.section8 {
  /* width: 100%;
  height: 1.4rem; */
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
</style>


