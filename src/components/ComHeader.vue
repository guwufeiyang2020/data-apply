<template>
  <div class="header">
    <div class="container">
      <div class="l-content">
        <h1 class="logo">作战数据应用网站</h1>
          <!-- 递归菜单 -->
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo" 
          mode="horizontal"  
          :background-color="menuBg"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item 
            :index="item.path" 
            v-for="item in noChildren" 
            :key="item.path" 
            @click="clickMenu(item)">
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
          <el-submenu :index="item.label" v-for="(item, index) in hasChildren" :key="index">
            <template slot="title">
              <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item 
                :index="subItem.path" 
                v-for="(subItem, subIndex) in item.children" 
                :key="subIndex" 
                @click="clickMenu(subItem)">
                <span slot="title">{{ subItem.label }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="r-content">
        <i class="el-icon-search" @click="jumpToSearch"></i>
        <el-dropdown trigger="click" v-if="token">
          <span class="el-dropdown-link change-skin">
            <svg-icon icon-class="skin" class="icon-svg" />
          </span> 
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="changeTheme('theme1')">蓝色</el-dropdown-item>
            <el-dropdown-item @click.native="changeTheme('theme2')">绿色</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-badge is-dot class="item" @click.native="jumpToTest">
          <i class="el-icon-bell"></i>
        </el-badge>

        <el-dropdown trigger="click" v-if="token">
          <span class="el-dropdown-link">
            <img :src="userImg" class="user-img"/> {{userName}}</span> 
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>审批信息</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="text" v-if="!token" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default{
    name: 'mHeader',
    data() {
      return {
        asideMenu: [
          {
            id: '01',
            path: '/index',
            name: 'home',
            label: '首页',
          },
          {
            id: '02',
            label: '我的应用',
            children: [{
              id: '02-01',
              path: '/apply/apply1',
              name: 'apply1',
              label: '我的应用1',
            }, {
                id: '02-02',
                path: '/apply/apply2',
                name: 'apply2',
                label: '我的应用2',
              }
            ]
          },
          {
            id: '03',
            path: '/resouce',
            label: '资源池',
          }, {
            id: '04',
            path: '/model',
            label: '模型库',
          }
        ],
        userImg: require('@/assets/images/user.png'),
        searchResouce: '',
        menuBg: sessionStorage.getItem('menuBg') || '#2D518B'
      }
    },
    computed: {
      ...mapState(['token', 'userName', 'theme']),
      noChildren() {
        return this.asideMenu.filter(item => !item.children)
      },
      hasChildren() {
        return this.asideMenu.filter(item => item.children)
      }
    },
    methods: {
      changeTheme(type) {
        sessionStorage.setItem('type', type);
        window.document.documentElement.setAttribute("data-theme", sessionStorage.getItem('type'));
        if(type === 'theme1') {
          this.menuBg = '#2D518B';
        } else {
          this.menuBg = '#3f8e4d';
        }
        sessionStorage.setItem('menuBg', this.menuBg);
      },
      clickMenu(item) {
        this.$router.push({ path: item.path });
      },
      jumpToSearch() {
        this.$router.push({ path: '/search' });
      },
      jumpToTest() {
        this.$router.push({ path: '/test' });
      },
      login() {
        this.$router.push('/login');
      },
      logout() {
         this.$http.post('/user/logout').then((res) => {
            if (res.data.code === 20000) {
              this.$store.commit('clearToken');
							this.$store.commit('clearUserName');
              this.$router.push({ path: '/login' });
            } else {
              this.$message.error(res.data.message);
            }
          }).catch((error) => {
            this.$message.error(error);
          });
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "@/assets/scss/mixin.scss";
  .header {
    width: 100%;
    height: 0.8rem;
    padding: 0 1rem;
    @include bg_color($background-color-theme);
    color: #fff;
    font-size: .14rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
    .l-content {
      display: flex;
      .logo {
        font-weight: bold;
        font-size: .22rem;
        line-height: .8rem;
        margin-right: 1rem;
      }
      .el-menu.el-menu--horizontal {
        border-bottom: none;
      }
      .el-menu--horizontal {
        .el-menu-item,
        .el-submenu {
          height: .8rem;
          line-height: .8rem;
          font-size: .16rem;
          i {
            color: #fff;
          }
          &.is-active {
            i {
              color: #fff;
              font-size: 16px;
            }
          }
        }
        
      }
      /deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: .8rem;
        line-height:.8rem;
        font-size: .16rem;
        i {
          color: #fff;
        }
      } 
      .nav-menu {
        display: flex;
      }
    }
    .r-content {
      display: flex;
      align-items: center;
      .search-resouce {
        margin-right: .3rem;
      }
      .el-icon-search {
        font-size: .22rem;
        margin-right: .2rem;
        cursor: pointer;
      }
      .el-badge {
        cursor: pointer;
        margin-right: .3rem;
        .el-icon-bell {
          font-size: .24rem;
        }
      }
      .change-skin {
        height: .2rem;
        .icon-svg {
          margin-right: .2rem;
        }
      }
      .el-dropdown-link {
        display: flex;
        height: .6rem;
        align-items: center;
        color: #fff;
        cursor: pointer;
        .user-img {
          width: .3rem;
          height: .3rem;
          border-radius: 50%;
          margin-right: .1rem;
        }
      }
    }
  }
</style>