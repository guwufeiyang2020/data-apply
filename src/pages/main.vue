<template>
  <div>
    <com-header></com-header>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <com-footer></com-footer>
  </div>
</template>
<script>
  import ComHeader from './../components/ComHeader'
  import ComFooter from './../components/ComFooter'
  export default{
    components:{
      ComHeader,
      ComFooter
    }
  }
</script>

<style lang="scss" scoped>
  .main-content {
    min-height: calc(100vh - 120px);
  }
</style>