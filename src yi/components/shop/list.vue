<template>
  <div>
    <!-- 外部盒子 -->
    <div class="wrap">
      <!-- 头部样式开始 -->
      <header>
        <i @click="$router.go(-1)"></i>
        <img src="../../assets/images/list_images/logo.jpg" alt />
        <div class="set">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <!-- 搜索框 -->
      <div class="search">
        <input type="search" placeholder="搜索商品" />
        <i></i>
      </div>
      <div class="content">
        <div class="list-box" v-for="item in list" :key="item.id">
          <div>
            <img :src=item.img alt />
          </div>
          <div>
            <p>
              {{item.title}}
            </p>
            <p>{{item.pice}}</p>
            <p>{{item.ping}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {
          id:1,
          img:require('../../assets/images/list_images/pic.jpg'),
          title:"阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶 旗舰店正品焕新升级款",
          pice:"￥123.00",
          ping:"3625条评论"
        },
         {
          id:2,
          img:require('../../assets/images/list_images/pic.jpg'),
          title:"阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶 旗舰店正品焕新升级款",
          pice:"￥123.00",
          ping:"3625条评论"
        },
         {
          id:3,
          img:require('../../assets/images/list_images/pic.jpg'),
          title:"阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶 旗舰店正品焕新升级款",
          pice:"￥123.00",
          ping:"3625条评论"
        },
         {
          id:4,
          img:require('../../assets/images/list_images/pic.jpg'),
          title:"阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶 旗舰店正品焕新升级款",
          pice:"￥123.00",
          ping:"3625条评论"
        },
      ]
    };
  },
  methods: {
 
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/list.css";
</style>
