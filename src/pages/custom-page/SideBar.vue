<template>
  <div class="SideBar">
    <div class="title"><span>控件</span></div>
    <div class="type">
      全部资源类型
    </div>
    <div class="blocks">
      <div class="block" 
        v-for="contentBlock in contentBlocks" 
        :key="contentBlock.id"
        draggable="true"
        @dragstart="dragstart(contentBlock, $event)"
      >
        <div class="img" :style="{ backgroundImage: `url(${contentBlock.img})` }" />
        <div class="name"><span>{{ contentBlock.name }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'layouts',
    'contentBlocks'
  ]),
  methods: {
    
    dragstart (contentBlock, evt) {
      // 将拖拽对象的id存储在
      evt.dataTransfer.setData('contentBlockId', contentBlock.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .SideBar {
    padding: 1em;

    .title {
      margin-top: 12em;
      span { font-size: 1.25em; }
    }

    .type {
      background-color: #f4f4f4;
      border-radius: .25em;
      padding: .5em 1em;
      color: #2d518b;
      line-height: 1em;
      margin-top: 2em;
    }

    .blocks {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 4em;
      grid-gap: .75em;
      margin-top: 1em;

      .block {
        overflow: hidden;
        border: solid 1px #aaa;
        border-radius: .125em;
        position: relative;
        cursor: grab;

        .img {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-size: cover;
        }

        .name {
          position: absolute;
          left: 0; right: 0; bottom: 0; height: 1.5em;
          background: linear-gradient(to right, 
            transparent 0%, #0e4c87 33%, 
          #0e4c87 66%, transparent 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: .8em;
            color: #f7f7f7;
          }
        }
      }
    }
  }
</style>