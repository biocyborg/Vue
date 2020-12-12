<template>
  <el-container style="height: 100%;">
    <el-aside width="200px">
      <el-menu router :unique-opened=true class="submenu" :default-active="pathname" background-color="#000C29" text-color="#fff" active-text-color="#009789" @select="handleSelect">
        <h1>DSERS</h1>
         <el-submenu v-for="(item, index) in navigationData" :index="item.path" :key="index" v-router:[item.name]>
          <template slot="title"><i class="el-icon-message"></i>{{item.meta.title}}</template>
          <el-menu-item v-for="(element, index) in item.children" :key="index" :index="element.path" v-router:[element.name] >{{element.meta.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>

  </el-container>

  </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      pathname: window.location.pathname,
      navigationData: this.navigation[0].children,
    };
  },
  created () {
    console.log(this.navigation);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
@import './index.less';
</style>
