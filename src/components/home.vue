<template>
	<div>
		<nav-head title="全部"></nav-head>
		<topic-list :listData="listData"></topic-list>
		<back-top></back-top>
	</div>
</template>

<script>
	import NavHead from './navHead';
	import TopicList from './list';
	import backTop from './backTop';

	import $ from 'jquery';
	import _ from 'lodash';
	let count = 0;
	export default {
		data() {
			return {
				pageList: {
					page: 1,
					tab: 'all', 
					limit: 20,
					mdrender: false
				},
				listData: []
			}
		},
		created() {
			let tab = this.$route.query.tab
			this.pageList.tab = tab || 'all'
		},
		methods: {
			getQuerystring(page) {
				let {page: _page, tab, limit, mdrender} = this.pageList;
				return `page=${page || _page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`
			},
			scrollLoad(e) {console.count('scroll', count++);console.log('事件对象', e)
				if(this.isLoadingData) return;
				let el = document.documentElement || document.body;
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop + el.clientHeight + 20 >= el.scrollHeight) {
					this.isLoadingData = true;
					this.pageList.page++;
					this.loadData(this.pageList.page)
				}
			},
			loadData(page, isNewTab) {
				let querystring = this.getQuerystring(page)
				$.ajax({
					url: '/topics?' + querystring,
				}).done(res=>{
					this.isLoadingData = false;
					if(res.success) {
						this.listData = isNewTab?res.data:this.listData.concat(res.data)
					}
				})			
			}
		},
		mounted() {
			this.loadData(undefined, true);
			window.addEventListener('scroll', _.throttle(this.scrollLoad, 200))
			// window.addEventListener('scroll', this.scrollLoad)
			// 
		},
		watch: {
			'$route': function(from, to) {
				if(from.path === '/list') {
					this.pageList.tab = from.query.tab;
					this.loadData(1, true)

				}
			}
		},
		components: {
			'nav-head': NavHead,
			'topic-list': TopicList,
			'back-top': backTop
		}
	}
</script>