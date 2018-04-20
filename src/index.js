import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './router'

console.log('starts..sd.')

Vue.use(VueRouter)

const router = new VueRouter({
	model: 'history',
	routes
})

new Vue({
	router

}).$mount('#app')
