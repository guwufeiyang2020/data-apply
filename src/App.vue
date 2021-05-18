<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
    
  },
  created(){
    /**  
    *  判断 sessionStorage 中的 type 是否为空，如果为空的话，就给默认的颜色（页面初始化的颜色），如
    *  果不为空的话就将对应获取到的值给到 data-theme
    **/
    if(sessionStorage.getItem('type') != null){
      window.document.documentElement.setAttribute("data-theme", sessionStorage.getItem('type'));
    }else{
      window.document.documentElement.setAttribute("data-theme", 'blue');
    }
  },
}
</script>


