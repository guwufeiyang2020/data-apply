<template>
  <div class="section section1">
    <div class="sub-title">习主席要闻</div>
    <div class="img-box">
      <img class="banner-img" src="../../assets/images/img-left-top.png" />
      <p class="first-title">{{newList[0].title}}</p>
    </div>
    <ul class="new-list">
      <li class="new-item" v-for="item in newList.slice(1)" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default { 
  data() {
    return  { 
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
      }],
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
  .section1 {
    /*  width: 5.2rem;
    height: 4.33rem; */
    .img-box {
      width: 100%;
      max-height: 2.4rem;
      position: relative;
      img {
        width: 100%;
        max-height: 2.4rem;
      }
      .first-title {
        position: absolute;
        bottom: 0;
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
        line-height: .26rem;
      }
    }
  }
</style>


