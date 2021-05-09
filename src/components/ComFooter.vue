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
    height: 60px;
    background:#011130;
    color:#fff;
    font-size: 14px;
    .copyright{
      line-height: 60px;
      text-align: center;
      .domain{
        color:#FF6600;
      }
    }
  }
</style>