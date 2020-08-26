<template>
  <div id="app">
  <!-- router-link  在dom中被解析a标签 -->
  <!-- to='' 要和path地址一致  -->
  <!-- tag   -->
  <!-- <router-link to='/home' active-class="select">首页</router-link>
  <router-link to='/cat' active-class="select">购物车</router-link> -->
  <!-- 定义路由出口  视图渲染 只用写一次 -->


  <!-- 定义一级路由出口 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
 
