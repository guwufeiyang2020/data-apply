<template>
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
          <img class="img" src="../../assets/images/img1-r.png" />
          <p>{{infoList[0].title}}</p>
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/images/img2-r.png" />
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
</template>

<script>
export default { 
  data() {
    return  { 
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
    }
  },
  methods: {
    selectTab(item) {
      this.currentIndex = item.index;
    },
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
 .section6 {
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
</style>


