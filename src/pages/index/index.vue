<template>
  <div class="index-wrapper">
    <div class="index-top">
      <div class="top-left">
        <focus-news></focus-news>
        <kan-ban></kan-ban>
        <my-Catalog></my-Catalog>
      </div>
      <div class="top-right">
        <train-range></train-range>
        <new-list></new-list>
        <professional-support></professional-support>
      </div>
    </div>
    <div class="index-bottom">
     <recent-browse></recent-browse>
    </div>
  </div>
</template>

<script>
import FocusNews from './FocusNews.vue';
import KanBan from './KanBan.vue';
import MyCatalog from './MyCatalog.vue';
import TrainRange from './TrainRange.vue';
import NewList from './NewList.vue';
import ProfessionalSupport from './ProfessionalSupport.vue';
import RecentBrowse from './RecentBrowse.vue';
export default {
  name: 'index',
  components: {
    FocusNews,
    KanBan,
    MyCatalog,
    TrainRange,
    NewList,
    ProfessionalSupport,
    RecentBrowse
  },
  data() {
    return  {
     
    }
  },
  mounted() {
    
  },
  methods: {
   
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
}
</style>