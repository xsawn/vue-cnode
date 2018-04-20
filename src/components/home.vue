<template>
	<div>
		<nav-head></nav-head>
		<topic-list :listData="listData"></topic-list>
		<back-top></back-top>
	</div>
</template>

<script>
	import NavHead from './navHead';
	import TopicList from './list';
	import backTop from './backTop';

	import $ from 'jquery';

	export default {
		data() {
			return {
				listData: []
			}
		},
		created() {
			console.log('home is initialed')
		},
		mounted() {
			$.ajax({
				url: '/topics',

			}).done(res=>{
				if(res.success) {
					this.listData = res.data
				}
			})
		},
		components: {
			'nav-head': NavHead,
			'topic-list': TopicList,
			'back-top': backTop
		}
	}
</script>