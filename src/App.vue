<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{getName}}  <el-button @click='changeName'>Rename</el-button></p>
<!--    一个测试加减的-->
    <router-link to="test1">go to test1</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    getName () {
      return this.$store.state.name
    }
  },
  methods: {
    changeName () {
      this.$store.commit('updateName')
    }
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
  margin-top: 60px;
}
.content{
  background-color: #f5f5f5;
  width: 100%;
  min-height: 400px;
}
</style>
