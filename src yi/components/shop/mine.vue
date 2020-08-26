<template>
  <div class="wrap">
        <!-- 头部样式开始 -->
        <header>
            <i @click="click"></i>
            <p>我的订单</p>
            <div class="set">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
         <!-- 头像样式开始 -->
        <div class="head">
            <div>
                <img src="../../assets/images/mine_images/head.jpg" alt="">
                <div class="item">
                    <p>悠溯</p>
                    <span>V1</span>
                </div>
            </div>
            <div class="item2">
                <p>每日签到</p>
            </div>
        </div>
        <!-- 全部订单开始 -->
        <div class="list">
            <div>
                <i class="icon1"></i>
                <p>全部订单</p>
            </div>
            <div>
                <i class="icon2"></i>
                <p>代付款</p>
            </div>
            <div>
                <i class="icon3"></i>
                <p>待收货</p>
            </div>
        </div>
         <!-- 主体内容开始 -->
        <div class="content">
            <div class="list-box">
                <div>
                    <p class="icon"></p>
                    <span>地址管理</span>
                </div>
                <div>
                    <i></i>
                </div>
            </div>
            <div class="list-box">
                <div>
                    <p class="icon2"></p>
                    <span>我的钱包</span>
                </div>
                <div class="col">
                    <p></p>
                    <i></i>
                </div>
            </div>
            <div class="list-box">
                <div>
                    <p class="icon3"></p>
                    <span>我的优惠券</span>
                </div>
                <div>
                    <i></i>
                </div>
            </div>
            <div class="list-box">
                <div>
                    <p class="icon4"></p>
                    <span>我的二维码</span>
                </div>
                <div>
                    <i></i>
                </div>
            </div>
            <div class="list-box">
                <div>
                    <p class="icon5"></p>
                    <span>我的小伙伴</span>
                </div>
                <div>
                    <i></i>
                </div>
            </div>
        </div>
  </div>
</template>
<script>

export default {
  data(){
      return{

      }
  },
  methods:{
      click(){
          this.$router.push('../index')
      }
  }
}
</script>
<style scoped>
@import '../../assets/css/my_order';
</style>