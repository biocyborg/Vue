<template>
  <div>
    <el-button @click="test" type="primary">主要按钮</el-button>
    <div>{{'17734537787' | formatMobile}}</div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    };
  },
  created() {
    NProgress.start();
    // NProgress.remove();
    NProgress.done();
  },
  mounted() {

  },
  methods: {
    test () {
      this.$store.commit('test', '123456');
    },
  },
  destroyed() {

  }
};
</script>

<style lang="less">

</style>

<style lang="stylus">
.box
  height: 10000vh
</style>
