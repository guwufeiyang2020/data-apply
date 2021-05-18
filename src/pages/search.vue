<template>
  <div class="search-wrapper">
    <div class="search-box">
      <div class="sub-title">我的目录</div>
      <div class="content-box">
        <div class="tree-box">
          <el-tree 
            :data="treeData" 
            :props="defaultProps" 
            node-key="id"
            :default-expanded-keys="[1, 3, 5]"
            @node-click="handleNodeClick">
          </el-tree>
        </div>
        <div class="right-content">
           <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append">搜索</el-button>
          </el-input>
          <ul class="search-list">
            <li class="search-item" v-for="item in searchList" :key="item.id" @click="jumpToDetail(item.id)">
              <div class="item-left">
                <div class="img-box">
                  <img class="echart-img" :src="computedIcon(item.type)" />
                </div>
                <div class="content-box">
                  <p>
                    <span class="type" :style="{ background: backgroundComputed(item.type) }"> {{item.type}} </span> 
                    <span class="title"> {{item.title}} </span> 
                  </p>
                  <p class="content"> {{item.content}} </p>
                </div>
              </div>
              <div class="item-right">
                <p>{{item.date}}</p>
                <p>提供方：{{item.provider}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: 'query',
  components:{
   
  },
  data(){
    return {
      treeData: [{
          id: 1,
          label: '资源目录',
          children: [{
            id: 3,
            label: '目录1',
            children: [{
              id: 8,
              label: '目录11'
            }, {
              id: 9,
              label: '目录12'
            }]
          }, {
            id: 4,
            label: '目录2',
            children: [{
              id: 10,
              label: '目录21'
            }, {
              id: 11,
              label: '目录22'
            }]
          }]
        }, {
          id: 2,
          label: '我的目录',
          children: [{
            id: 5,
            label: '海军',
            children: [{
              id: 12,
              label: '装备管理'
            }, {
              id: 13,
              label: '信息化规章'
            }, {
              id: 14,
              label: '党政建设'
            }]
          }, {
            id: 6,
            label: '陆军'
          }, {
            id: 7,
            label: '空军'
          }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      search: '',
      searchList: [{
        id: '01',
        type: '定制应用',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        id: '02',
        type: '法规标准',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        id: '03',
        type: '模型资源',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        id: '04',
        type: '数据产品',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        id: '05',
        type: '数据资源',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        id: '06',
        type: '模型资源',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        id: '07',
        type: '数据产品',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }, {
        id: '08',
        type: '数据资源',
        title: '2020年人口流动数据',
        content: '百度地图城市省份流入流出数据',
        date: '2022/3/20 16:22:30',
        provider: '王力阳'
      }],
    }
  },
  computed: {
   computedIcon() {
     return (type) => {
       if(type === '定制应用') {
         return require('../assets/images/icon-c-dzyy.png')
       } else if (type === '法规标准') {
        return require('../assets/images/icon-c-fgbz.png')
       } else if (type === '模型资源') {
        return require('../assets/images/icon-c-dzyy.png')
       } else if (type === '数据产品') {
        return require('../assets/images/icon-c-cpsj.png')
       } else if (type === '数据资源') {
        return require('../assets/images/icon-c-sjzy.png')
       } else {
         return require('../assets/images/icon-c-dzyy.png')
       }
     }
    },
    backgroundComputed() {
      return (type) => {
        if(type === '定制应用') {
          return '#00AE65'; 
        } else if (type === '法规标准') {
          return '#c0144e'; 
        } else if (type === '模型资源') {
          return '#d28a11'; 
        } else if (type === '数据产品') {
          return '#1481c0'; 
        } else if (type === '数据资源') {
          return '#00AE65'; 
        } else {
          return '#00AE65'; 
        }
      }
    }
  },
  mounted() {
    console.log('资源服务1');
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    jumpToDetail(id) {
      this.$router.push({ path: `/detail/${id}` });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/mixin.scss';
  .search-wrapper {
    width: 100%;
    min-height: calc(100vh - 1.4rem);
    padding: .32rem 1rem;
    background: #f6f6f6;
  }
  .search-box {
    background: #fff;
    border-radius: .06rem;
    padding: .16rem;
    .sub-title {
      height: .5rem;
      line-height: .5rem;
      font-size: .16rem;
      // color: $theme-color;
      @include font_color($font-color-theme);
    }
    .content-box {
      display: flex;
       .tree-box {
        width: 4.6rem;
        padding: 0 .2rem;
        border-right: 1px solid #d3d3d3;
      } 
      .right-content {
        flex: 1;
        padding: 0 .3rem;
        /deep/ .el-button {
          @include bg_color($background-color-theme);
          @include border_color($font-color-theme);
          color: #fff;
          border-radius: 0 4px 4px 0;
        }
        .search-list {
          margin-top: .1rem;
          .search-item {
            height: .88rem;
            font-size: 14px;
            color: #867f7f;
            cursor: pointer;
            display: flex;
            border-bottom: 1px solid #ecf1f8;
            justify-content: space-between;
          }
          .item-left {
            height: .88rem;
            display: flex;
            align-items: center;
          }
          .img-box {
            width: .6rem;
            height: .6rem;
            padding: .1rem;
            border-radius: .1rem;
            margin-right: .1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            @include bg_color($background-color-theme);
            img {
              width: .28rem;
              height: .28rem;
            }
          }
          .content-box {
            display: block;
            p {
              height: .3rem;
              line-height: .3rem;
            }
            .type {
              padding: 4px 5px;
              background: #49c014;
              color: #fff;
              border-radius: 3px;
              margin-right: .1rem;
            }
            .title {
              color: #383636;
            }
            .content {
              color: #867f7f;
            }
          }
          .item-right {
            height: .88rem;
            text-align: right;
            padding-top: .16rem;
            p {
              height: .3rem;
              line-height: .3rem;
            }
          }
        } 
      }
    }
    
  }
</style>