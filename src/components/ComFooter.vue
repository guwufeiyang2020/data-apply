<template>
  <div class="footer">           
    <div class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</div>
  </div>
</template>
<script>
  export default{
    name: 'nav-footer'
  }
</script>
<style lang="scss" scoped>
  .footer{
    height: .6rem;
    background: $theme-color;
    color:#fff;
    font-size: .14rem;
    .copyright{
      line-height: .6rem;
      text-align: center;
      .domain{
        color:#FF6600;
      }
    }
  }
</style>