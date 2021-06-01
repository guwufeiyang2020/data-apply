<template>
  <div class="preview">
    <div class="paper">
      <div class="item" 
        v-for="(item, index) in currentLayout.grids" :key="index"
        v-bind:style="{ 
          gridColumn: `${item.x}/span ${item.w}`, 
          gridRow: `${item.y}/span ${item.h}` 
        }"
        @dragover="dragover"
        @drop="drop(item, $event)"
      >
        <div class="top" v-if="item.content && !item.content.hideName">
          <div class="title">{{ item.content.name }}</div>
          <div class="icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="img" v-if="item.content" :style="{ backgroundImage: `url(${item.content.img})` }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentLayout () {
      return this.$store.state.layouts.filter(x => !!x.active)[0]
    }
  },
  methods: {
    dragenter (evt) {
      evt.preventDefault()
    },
    dragover (evt) {
      evt.preventDefault()
    },
    drop (item, evt) {
      let contentBlockId = evt.dataTransfer.getData('contentBlockId')
      let contentBlock = this.$store.state.contentBlocks.filter(x => x.id === contentBlockId)[0]
      // console.log({ contentBlock, item })
      item.content = contentBlock
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
  .preview {
    border: solid 1px #1147c6;
    min-height: 3em;
    background-color: #f6f6f6;
    padding: 1em;

    .paper {
      min-height: 5em;
      width: 60em; height: 45em;
      margin: auto;
      position: relative;

      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(8, 1fr);
      grid-gap: 1em;

      .item {
        background-color: white;
        border-radius: .25em;
        display: flex;
        flex-direction: column;
        padding: .75em;

        .top {
          line-height: 1em;
          margin-bottom: 1em;
          display: flex;
          .title { flex: 1 }

          .icon {
            span {
              display: block;
              width: 1.25em; height: .25em; background-color: #5aa88e;
              border-radius: .2em;
            }
            span:nth-child(1) { margin-bottom: .2em; }
            span:nth-child(2) { margin-bottom: .2em; }
            span:nth-child(3) {  }
          }
        }

        .img {
          flex: 1;
          background-size: cover;
        }
      }
    }
  }
</style>