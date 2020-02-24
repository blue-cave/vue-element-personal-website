// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuexStore from './store/index.js' // 新增 引入store
import ElementUI from 'element-ui' // 引入element ui样式

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store: vuexStore, // 新增 传入store配置
  components: { App },
  template: '<App/>'
})
