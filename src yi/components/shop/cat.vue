<template>
  <div class="wrap">
    <!-- 头部样式 -->
    <header>
      <i @click="click"></i>
      <p>购物车</p>
      <div class="set">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <!-- 购物车内容 -->
    <div class="shopcar">
      <div class="list-box" v-for="(item,idx) in dataList" :key="item.id">
        <div class="icon">
          <input type="checkbox" name id v-model="item.checked" @change="checkOne" />
        </div>
        <div>
          <img :src="item.img"  />
        </div>
        <div class="tit">
          <p>{{item.p1}}</p>
          <p>{{item.p2}}</p>
          <p>￥{{(item.pic * item.num).toFixed(2)}}</p>
        </div>
        <div>
          <ul class="clearfix">
            <li>
              <a href="#" @click="sub(idx)">-</a>
            </li>
            <li>
              <a href="#">{{item.num}}</a>
            </li>
            <li>
              <a href="#" @click="add(idx)">+</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="settle">
      <div class="icon">
        <input type="checkbox" @change="checkAll" v-model="allCheck" />

        <span>全选</span>
      </div>
      <div class="tit">
        <p>
          总计：
          <b>${{picArr}}</b>
        </p>
        <p>不含运费，已优惠￥0.00</p>
      </div>
      <div class="tit2">
        <p>
          <a href="#" @click='order'>去结算(2件)</a>
        </p>
      </div>
    </div>
    <!-- 结算内容结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCheck: false,
      dataList: [
        {
          id: "1",
          img: require("../../assets/images/shoping_car_images/shop.jpg"),
          p1: "欧莱雅面霜",
          p2: "规格：50g",
          pic: "123.00",
          num: 1,
          checked: false,
        },
        {
          id: "2",
          img: require("../../assets/images/shoping_car_images/shop.jpg"),
          p1: "欧莱雅面霜",
          p2: "规格：50g",
          pic: "123.00",
          num: 1,
          checked: false,
        },
        {
          id: "3",
          img: require("../../assets/images/shoping_car_images/shop.jpg"),
          p1: "欧莱雅面霜",
          p2: "规格：50g",
          pic: "123.00",
          num: 1,
          checked: false,
        },
      ],
    };
  },
  methods: {
    //跳转到order
    order(){
      this.$router.push('/order')
    },
    // 封装加法
    add(i) {
      this.dataList[i].num++;
    },
    // 封装减法
    sub(i) {
      if (this.dataList[i].num == 1) {
        return;
      }
      this.dataList[i].num--;
    },
    // 封装一个全选事件
    checkAll() {
      this.dataList.map((item) => {
        item.checked = this.allCheck;
      });
    },
    checkOne() {
      //利用every  要求条件都是真的时候 就返回真否则有一个假就假
      // this.allCheck = this.goodsList.every((item,i)=>{
      //     console.log(item.checked,'111')
      //     return item.checked
      // })
      this.allCheck = this.dataList.every((item) => item.checked);
    },
    // 点击返回
    click() {
      this.$router.push("../index");
    },
  },
  computed: {
    // 计算总价
    picArr() {
      let sum = 0;
      this.dataList.map((item) => {
        if (item.checked) {
          sum += item.pic * item.num;
        }
      });
      return sum.toFixed(2);
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/shoping_car.css";
[v-cloak] {
  display: none;
}
input {
  -webkit-appearance: none;
  outline: none;
  position: relative;
  width: 0.34rem;
  height: 0.32rem;
  border-radius: 50%;
  border: 0.01rem solid #b1271a;
  background: #fff;
  display: inline-block;
  vertical-align: middle;
}
input:checked {
  background: url("../../assets/images/shoping_car_images/select.jpg") no-repeat
    center;
  background-size: 100% auto;
}
</style>