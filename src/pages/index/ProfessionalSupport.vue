<template>
  <div class="section section7">
    <div class="sub-title">专业支撑</div>
      <ul class="system-list">
      <li class="system-item">
        <div class="img-box">
          <img class="echart-img" src="../../assets/images/icon-r-jsxl.png" />
        </div>
        <p>信息栏目</p>
      </li>
      <li class="system-item">
        <div class="img-box">
          <img class="echart-img" src="../../assets/images/icon-r-bdxx.png" />
        </div>
        <p>信息发布</p>
      </li>
      <li class="system-item">
        <div class="img-box">
          <img class="echart-img" src="../../assets/images/iocn-r-jsjy.png" />
        </div>
        <p>人工审核</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default { 
  data() {
    return  { 
    
    }
  }
} 
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
.section {
  width: 100%;
  background: #fff;
  border-radius: .06rem;
  padding: .16rem;
  .sub-title {
    height: .5rem;
    line-height: .5rem;
    font-size: .16rem;
    @include font_color($font-color-theme);
  }
}
.section7 {
 /*  width: 100%;
  height: 2rem; */
    .system-list {
    .system-item {
      width: 0.9rem;
      height: 1.1rem;
      float: left;
      margin-right: .2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-box {
        width: .58rem;
        height: .58rem;
        @include bg_color($background-color-theme);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: .4rem;
          height: .4rem;
        }
      }
      p {
        line-height: .32rem;
        font-size: 14px;
      }
    }
  }
}
</style>


