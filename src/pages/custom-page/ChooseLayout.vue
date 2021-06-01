<template>
  <div class="ChooseLayout">
    <div class="layout-box" v-for="layout in layouts" :key="layout.id">
      <LayoutThumbnail 
        v-bind:layout="layout" 
        width="10em" 
        height="7.5em" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LayoutThumbnail from './LayoutThumbnail'

export default {
  computed: mapState([
    'layouts'
  ]),
  components: {
    LayoutThumbnail
  }
}
</script>

<style lang="scss" scoped>
  .ChooseLayout {
    display: flex;
    margin-bottom: 3.5em;

    .layout-box {
      margin-right: 2.5em;
    }
  }
</style>