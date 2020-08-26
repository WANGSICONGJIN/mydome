<template>
  <div>
    <i @click="click"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods:{
    click(){
      this.$router.push('../shop/home.vue');
    }
  }
}
</script>

<style lang="" scoped>
</style>
