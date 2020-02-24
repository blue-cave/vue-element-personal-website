import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */

// 直接导出 一个 Store 的实例
export default new Vuex.Store({
	state: {
		name:'Xu',
		count:0
	},
	mutations: {
		updateName : state=>{
			state.name = 'Old Xu'
		},
		addCount : state=> state.count++
	}
})
