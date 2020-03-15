import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */

// 直接导出 一个 Store 的实例
export default new Vuex.Store({
  //存放变量
	state: {
		name:'Xu',
		count:0
	},
  //state的计算属性
  getters: {

  },
  //同步方法
	mutations: {
		updateName : state=>{
			state.name = 'Old Xu'
		},
		addCount : state=> state.count++
	},
  //异步方法
  actions: {

  },
  modules: {

  }
})
