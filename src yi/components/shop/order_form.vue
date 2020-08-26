<template>
  <!-- 外部盒子 -->
  <div class="wrap">
    <!-- 头部样式开始 -->
    <header>
      <i  @click="$router.go(-1)"></i>
      <p>确认订单</p>
      <div class="set">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <!-- 收货人开始 -->
    <div class="receiver">
      <div class="item clearfix">
        <div class="clearfix">
          <span>收货人 ：YouSu</span>
          <span>10000000000</span>
        </div>
        <p>
          收货地址 :
          <b>
            北京市海淀区隐泉路清林苑6号楼中公优就
            <br />业总部3层
          </b>
        </p>
        <img src="../../assets/images/public/right.jpg" alt />
      </div>
    </div>
    <!-- 购买清单开始 -->
    <div class="Purchase">
      <div class="clearfix">
        <div class="fl">
          <img src="../../assets/images/order/shop.jpg" alt />
        </div>
        <div class="fl">
          <p>雅诗兰黛护肤霜</p>
          <p>规格：50g</p>
        </div>
        <div class="fr">
          <p>
            <span>￥</span>120.00
          </p>
        </div>
      </div>
      <div class="list">
        <p>购买数量：</p>
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
      <div class="list2">
        <p>配送方式</p>
        <p>XX快递</p>
      </div>
    </div>
    <div class="preferentia">
      <div class="list3">
        <p>优惠券</p>
        <p>无可用</p>
      </div>
      <div class="list4">
        <p>使用积分</p>
        <div class="tet">
          <input type="text" placeholder="输入积分" />
          <button>使用</button>
          <p class="p2">
            可用
            <span>50</span>积分
          </p>
        </div>
      </div>
      <div class="list5">
        <div class="item set">
          <p>商品金额</p>
          <p class="col">￥68.00</p>
        </div>
        <div class="item">
          <p>运费</p>
          <p class="col">+￥0.00</p>
        </div>
        <div class="item">
          <p>优惠券</p>
          <p class="col">-￥0.00</p>
        </div>
        <div class="item">
          <p>会员优惠</p>
          <p class="col">-￥0.00</p>
        </div>
        <div class="item">
          <p>积分折扣</p>
          <p class="col">-￥0.00</p>
        </div>
      </div>
      <div class="list6">
        <div class="item clearfix">
          <p>
            实付金额：
            <span>￥68.00</span>
          </p>
        </div>
        <button>提交订单</button>
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

<style lang="" scoped>
@import "../../assets/css/order_form.css";
</style>
