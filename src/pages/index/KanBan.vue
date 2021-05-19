<template>
  <div class="section section2">
    <div class="sub-title">我的看板</div>
    <ul class="kan-ban">
      <li>
        <p class="label">数据</p>
        <p class="value">16</p>
      </li>
      <li>
        <p class="label">产品</p>
        <p class="value">10</p>
      </li>
      <li>
        <p class="label">法规制度</p>
        <p class="value">10</p>
      </li>
      <li>
        <p class="label">模型</p>
        <p class="value">29</p>
      </li>
      <li>
        <p class="label">应用</p>
        <p class="value">8</p>
      </li>
    </ul>
    <div class="echart-box">
      <img class="echart-img" src="../../assets/images/img-center-tjt.png" />
    </div>
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
.section2 {
  /* width: 7.3rem;
  height: 4.33rem; */
  .kan-ban {
    display: flex;
    justify-content: space-between;
    li {
      flex: 1;
      text-align: center;
      .label {
        line-height: .3rem;
        font-size: 14px;
        color: #8C8888;
      }
      .value {
        font-size: 22px;
        line-height: .3rem;
        font-weight: bold;
        color: #1C1A1A;
      }
    }
  }
  .echart-box {
    margin-top: .1rem;
    padding: .2rem;
    .echart-img {
      width: 100%;
      max-height: 2.4rem;
    }
  }
}
</style>


