<template>
  <div class="box">
    <!-- <el-button type="primary" icon="el-icon-plus">增加模块</el-button> -->
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :autoSize="true" 
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
      :responsive="true" 
    >
      <grid-item v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i">
          <component :is="item.component" />
      </grid-item>
    </grid-layout>
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
import { GridLayout, GridItem } from 'vue-grid-layout';

export default {
  name: 'test',
  components: {
    GridLayout,
    GridItem,
    FocusNews,
    KanBan,
    MyCatalog,
    TrainRange,
    NewList,
    ProfessionalSupport,
    RecentBrowse
  },
  data(){
    return {
      layout:  [
        {"x": 0, "y": 0, "w": 3.6, "h": 10, "i": 1, "component": 'FocusNews'},
        {"x": 3.6, "y": 0, "w": 5.4, "h": 10, "i": 2, "component": 'KanBan'},
        {"x": 9, "y": 0, "w": 3, "h": 6, "i": 3,  "component": 'TrainRange'},
        {"x": 0, "y": 4, "w": 9, "h": 10, "i": 4, "component": 'MyCatalog'},
        {"x": 9, "y": 4, "w": 3, "h": 9, "i": 5, "component": 'NewList'},
        {"x": 9, "y": 4, "w": 3, "h": 5, "i": 6, "component": 'ProfessionalSupport'},
        {"x": 0, "y": 10, "w": 12, "h": 4, "i": 7, "component": 'RecentBrowse'},  
      ]
    }
  },

}
</script>

<style lang="scss" scoped>
  .box {
    background: #f6f6f6;
    padding: .3rem;
    .vue-grid-item {
      background: #fff;
      border-radius: 5px;
    }
  }
</style>