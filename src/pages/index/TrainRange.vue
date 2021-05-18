<template>
  <div class="section section5">
    <div class="sub-title">训练靶场</div>
    <ul class="system-list">
      <li class="system-item">
        <div class="img-box">
          <img class="echart-img" src="../../assets/images/icon-r-jsxl.png" />
        </div>
        <p>军事训练系统</p>
      </li>
      <li class="system-item">
          <div class="img-box">
            <img class="echart-img" src="../../assets/images/icon-r-bdxx.png" />
          </div>
        <p>部队信息管理系统</p>
      </li>
      <li class="system-item">
          <div class="img-box">
            <img class="echart-img" src="../../assets/images/iocn-r-jsjy.png" />
          </div>
        <p>军事教育信息系统</p>
      </li>
      <li class="system-item">
          <div class="img-box">
            <img class="echart-img" src="../../assets/images/icon-r-zygb.png" />
          </div>
        <p>专业干部教育</p>
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
  background: #fff;
  border-radius: .06rem;
  margin: 0 .14rem .14rem 0;
  padding: .16rem;
  float: left;
  .sub-title {
    height: .5rem;
    line-height: .5rem;
    font-size: .16rem;
    @include font_color($font-color-theme);
  }
}
.section5 {
    /* width: 100%;
    height: 2.8rem; */
    margin-bottom: .1rem;
    .system-list {
      .system-item {
        width: 1.6rem;
        height: 0.9rem;
        float: left;
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
          font-size: 12px;
        }
      }
    }
  }
</style>


