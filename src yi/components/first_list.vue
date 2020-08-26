<template >
  <div class="wrap">
    <!-- 头部盒子开始 -->
    <header>
      <i @click="$router.go(-1)"></i>
      <p>商品分类</p>
      <div class="set">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <!-- 主体内容开始 -->
    <div class="content clearfix">
      <!-- 左侧导航 -->
      <div class="fl dorpdown">
        <ul>
          <li v-for="item in firstList" :key='item.id'>
            <a href="#">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <!-- 右侧内容 -->
      <div class="content-box">
        <div class="list">
          <p>洗发类</p>
          <p>更多&gt;</p>
        </div>
        <div class="img-box clearfix">
          <div @click='first_list' v-for="item in seencdList" :key='item.id'>
            <img :src=item.src alt />
            <p>{{item.title}}</p>
          </div>
        </div>
        <div class="list">
          <p>染发类</p>
          <p>更多&gt;</p>
        </div>
        <div class="img-box clearfix">
          <div @click='first_list' v-for="ite in therrList" :key='ite.id'>
            <img :src=ite.src alt />
            <p>{{ite.title}}</p>
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
      firstList:[
        {
          id:1,
          title:"施华寇"
        },
        {
          id:2,
          title:"施华寇"
        },
        {
          id:3,
          title:"施华寇"
        },
        {
          id:4,
          title:"施华寇"
        },
        {
          id:5,
          title:"施华寇"
        },
        {
          id:6,
          title:"施华寇"
        },
        {
          id:7,
          title:"施华寇"
        },
        {
          id:8,
          title:"施华寇"
        }
      ],
      seencdList:[
        {
          id:1,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        },
        {
          id:2,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        },
        {
          id:3,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        },
        {
          id:4,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        },
        {
          id:5,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        },
        {
          id:6,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        },
      ],
      therrList:[
        {
          id:1,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        },
        {
          id:2,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        },
        {
          id:3,
          src:require('../assets/images/list_images/pic.jpg'),
          title:'护亮泽洗发水'
        }
      ]
    };
  },
  methods:{
    first_list(){
      this.$router.push('/deta')
    }
  }
};
</script>
<style scoped>
@import '../assets/css/first_list.css';
</style>
