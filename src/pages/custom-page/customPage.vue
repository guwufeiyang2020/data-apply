<template>
  <div class="custom-page">
    <div class="content">
      <div class="choose">
        <div class="title"><span>定制工作台</span></div>
        <div class="sub-title">请选择模板</div>
        <div class="layouts">
          <div class="layout-box" v-for="layout in layouts" :key="layout.id">
            <LayoutThumbnail v-bind:layout="layout" width="15em" height="11.25em" />
            <div class="info">
              <div class="name">{{ layout.name }}</div>
              <div>
                <input type="radio" 
                  v-bind:checked="layout.active" 
                  v-on:click="$store.commit('chooseLayout', layout.id)"
                /> {{ layout.active ? '已选择' : '选择' }}
              </div>
            </div>
          </div>
          <router-link class="layout-box" to="/customPageCongig">
            <div class="add">
              <div class="inner"></div>
            </div>
          </router-link>
        </div>
      </div>
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
  @import "./vars";
  .custom-page {
    display: grid;
    grid-template-rows: 5em 1fr;
    min-height: 100%;
    .content {
      width: $INNER-WIDTH;
      margin: 0 auto;
      background-color: $CONTENT-COLOR;
      .choose {
        padding: 3.5em 4em;
        .title {
          span { font-size: 1.5em; }
        }
        .sub-title {
          margin-top: 2em;
          margin-bottom: 1.5em;
        }
        .layouts {
          display: flex;
          .layout-box {
            margin-right: 4em;
            .info {
              .name { margin-top: .75em; margin-bottom: 1em; }
            }
          }
          .layout-box {
            .add {
              .inner {
                width: 15em; height: 11.25em;
                @include asLayoutCard;
                position: relative;
                &:hover {
                  opacity: 0.8;
                  cursor: pointer;
                }
                &:before {
                  content: "";
                  width: .5em; height: 5em;
                  position: absolute;
                  top: 0; left: 0; right: 0; bottom: 0;
                  margin: auto;
                  background-color: white;
                  border-radius: .25em;
                }
                &:after {
                  content: "";
                  width: 5em; height: .5em;
                  position: absolute;
                  top: 0; left: 0; right: 0; bottom: 0;
                  margin: auto;
                  background-color: white;
                  border-radius: .25em;
                }
              }
            }
          }
        }
      }
    }
  }
</style>