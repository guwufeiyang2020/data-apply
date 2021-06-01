<template>
  <div class="Workbench">
    <div class="Top">
      <div class="title">定制工作台</div>
      <div class="btn">
        <button>保存</button>
      </div>
    </div>
    <div class="Choose">
      <div class="title"><span>选择布局</span></div>
      <ChooseLayout />
    </div>
    <div class="Custom">
      <div class="title"><span>定制页面</span></div>
      <PagePreview />
    </div>
  </div>
</template>

<script>
import ChooseLayout from './ChooseLayout'
import PagePreview from './PagePreview'

export default {
  components: {
    ChooseLayout,
    PagePreview
  }
}
</script>

<style lang="scss" scoped>
  .Workbench {
    padding: 1.5em 2em;
    background-color: #fefefe;
  }
  .Top {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 2.5em;
    .title {
      font-size: 1.5em;
    }
    .btn {
      button {
        padding: 1em 4em;
        border: 0 none;
        background-color: #11408f;
        outline: none;
        border-radius: .25em;
        color: #f7f7f7;
        &:hover {
          opacity: .8;
          cursor: pointer;
        }
      }
    }
  }
  .Choose {
    .title {
      margin-bottom: 1.5em;
      span { font-size: 1.25em; }
    }
  }
  .Custom {
    .title {
      margin-bottom: 1.5em;
      span { font-size: 1.25em; }
    }
  }
</style>