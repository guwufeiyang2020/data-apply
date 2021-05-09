<template>
  <div class="header">
    <div class="width1000">
      <div class="container">
        <div class="l-content">
          <h1 class="logo">数据应用网站</h1>
          <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            @select="handleSelect"  
            background-color="#011130"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">资源服务</template>
              <el-menu-item index="2-1">资源服务1</el-menu-item>
              <el-menu-item index="2-2">资源服务2</el-menu-item>
              <el-menu-item index="2-3">资源服务3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">数据目录</template>
              <el-menu-item index="3-1">数据目录1</el-menu-item>
              <el-menu-item index="3-2">数据目录2</el-menu-item>
              <el-menu-item index="3-3">数据目录3</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">综合查询</el-menu-item>
          </el-menu>
        </div>
        <div class="r-content">
          <el-dropdown trigger="click" v-if="token">
            <span class="el-dropdown-link">
              {{userName}}<img :src="userImg" class="user-img"/></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="text" v-if="!token" @click="login">登录</el-button>
        </div>
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
        activeIndex: '1',
        userImg: require('@/assets/images/user.png'),
      }
    },
    computed: {
      ...mapState(['token', 'userName'])
    },
    mounted() {
      
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
  .header{
    width: 100%;
    height: 60px;
    background: #011130;
    color: #fff;
    font-size: 14px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    .l-content {
      display: flex;
      .logo {
        font-weight: bold;
        font-size: 18px;
        line-height: 60px;
        margin-right: 30px;
      }
    }
    .r-content {
      display: flex;
      align-items: center;
      .el-dropdown-link {
        display: flex;
        height: 60px;
        align-items: center;
        color: #fff;
        .user-img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-left: 10px;
        }
      }
    }
    
  }
</style>