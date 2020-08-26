<template >

  <div>
    <!-- 二级路由出口 -->
     <router-view></router-view>
     <div class="footer">
      <!-- 路由导航切换 -->
      <router-link to="/home" active-class="select" tag="span">
        <div>
          <i class="img1"></i>
        </div>
      </router-link>
      <router-link to="/cat" active-class="select" tag="span">
        <div>
          <i class="img2"></i>
        </div>
      </router-link>
      <router-link to="/mine" active-class="select" tag="span">
        <div>
          <i class="img3"></i>
        </div>
      </router-link>
    </div>
  </div>
 
</template>

<script>
export default {
   
}


</script>
<style scoped>

</style>
