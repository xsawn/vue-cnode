import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './router'
import '../src/style/common.css'

console.log('starts..sd.')

Vue.use(VueRouter)
window.onload = function() {
	localStorage.setItem('loginInfo', '')
}
const router = new VueRouter({
	model: 'history',
	routes
})

new Vue({
	router

}).$mount('#app')
