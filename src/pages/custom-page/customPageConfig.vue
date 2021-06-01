<template>
  <div class="content">
    <div class="left">
      <SideBar />
    </div>
    <div class="main">
      <Workbench />
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import Workbench from './Workbench'

export default {
  components: {
    SideBar,
    Workbench,
  }
}
</script>

<style lang="scss" scoped>
  @import "./vars";
  .content {
    width: $INNER-WIDTH;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 14em 1fr;
    .left {
      background-color: #e2e1e4;
    }
  }
</style>