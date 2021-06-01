<template>
  <div v-bind:class="{ layoutItem: true, active: layout.active }">
    <div class="layout" 
      v-on:click="$store.commit('chooseLayout', layout.id)"
      v-bind:style="{ width: width, height: height }"
    >
      <div class="item" v-for="(item, index) in layout.grids" :key="index"
        v-bind:style="{ 
          gridColumn: `${item.x}/span ${item.w}`, 
          gridRow: `${item.y}/span ${item.h}` 
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layout: Object,
    width: String,
    height: String,
  }
}
</script>

<style lang="scss" scoped>
  @import "./vars";

  .layoutItem {
    @include asLayoutCard;

    &.active {
      background-color: #11408f;
      .layout .item {
        background-color: #b8c6dd;
      }
    }

    .layout {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(8, 1fr);
      grid-gap: .25em;
      cursor: pointer;
      &:hover {
        .item {
          background-color: white;
        }
      }

      .item {
        background-color: #f4f4f4;
        border-radius: .125em;
      }
    }
  }
</style>