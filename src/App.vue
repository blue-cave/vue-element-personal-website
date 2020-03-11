<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          align="right"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item v-for="(item, index) in getNavHeader" :key="index" :index="item.path">{{ item.name }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main style="background-color: #aaaaaa;">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import navHeader from './data/menu/nav'
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/home-page'
    }
  },
  computed: {
    // 获取菜单的
    getNavHeader () {
      return navHeader
    }
  },
  methods: {
    // 选择的路由
    handleSelect (keyPath) {
      this.$router.push(keyPath)
    },
    changeName () {
      this.$store.commit('updateName')
    }
  },
  mounted: function () {
    // 拿到整个连接 （现在这里做的不好，以后得改）
    const relUrl = window.location.href.split('/#/')[1]
    if (relUrl) {
      this.activeIndex = '/' + relUrl
    }
  },
  watch: {
    // 目前这种获去路由监听事件，监听不到（不知道为什么）
    $route (to, from) {
      console.log('to', to.path)
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
.content{
  background-color: #f5f5f5;
  width: 100%;
  min-height: 980px;
}
.el-header {
  padding: 0px;
}
.el-main {
  padding: 0px;
}
</style>
