<template>
    <!-- 外部盒子 -->
    <div class="wrap">
      <!-- 头部样式开始 -->
      <header>
        <i @click="$router.go(-1)"></i>
        <p>商品详情</p>
        <div class="set">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <!-- 商品图片 -->
      <div class="item">
        <img src=".././assets/images/detail_images/pic_8.png" alt />
      </div>
      <!-- 商品详情 -->
      <div class="tit">
        <p>娅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</p>
        <p>
          ￥123.00
          <span>(此价格不与套装优惠同时享受)</span>
        </p>
      </div>
      <div class="item2">
        <div>
          <p>
            促销 :
            <span>满减</span>
            <b>满2件9折 ；3件8折</b>
          </p>
        </div>
        <div>
          <i></i>
        </div>
      </div>
      <div class="item3">
        <div>
          <p>购买数量</p>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">-</a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">+</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item4">
        <div class="list">
          <p>商品属性</p>
          <i></i>
        </div>
        <div class="list2">
          <p>规格</p>
          <span>30g</span>
          <span>50g</span>
        </div>
      </div>
      <!-- 商品详情开始 -->
      <div class="item5">
        <div class="list">
          <p>商品详情</p>
        </div>
        <!-- 图片盒子开始 -->
        <div class="img-box">
          <img src=".././assets/images/detail_images/pic_3.jpg" alt />
          <img src=".././assets/images/detail_images/pic_4.jpg" alt />
          <img src=".././assets/images/detail_images/pic_5.jpg" alt />
        </div>
      </div>
      <!-- 商品评价开始 -->
      <div class="item6">
        <div class="list">
          <div class="tit">
            <p>商品评价</p>
          </div>
          <div class="tit2">
            <p>1235668fg</p>
            <p>效果很好，物流到位，下次继续来!</p>
          </div>
          <div class="img-box">
            <img src=".././assets/images/detail_images/pic_8.png" alt />
            <img src=".././assets/images/detail_images/pic_9.jpg" alt />
            <img src=".././assets/images/detail_images/pic_10.jpg" alt />
            <p>2020-01-13</p>
          </div>
        </div>
      </div>
      <div class="item7">
        <p>共1000+条评论</p>
        <p>查看更多 &gt;</p>
      </div>
      <!-- 底部样式开始 -->
      <div class="foot">
        <div class="shop">
          <img src=".././assets/images/public/icon_7.jpg" alt />
          <p>购物车</p>
          <span>2</span>
        </div>
        <div class="shop2">
          <p>加入购物车</p>
          <p>立即购买</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import '../assets/css/detail.css';
</style>
