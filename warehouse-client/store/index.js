import Vue from 'vue'
import Vuex from 'vuex'
import tabbar from './tabbarStore.js'
import user from './userStore.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules: {
		tabbar,user
	}
})
export default store
