<template>
	<div class="back-top" v-show="show" @click="backTop">top</div>
</template>

<script>
	export default {
		data(){
			return {
				show: false,
			}
		},
		created() {
			window.addEventListener('scroll', this.scroll)
		},

		methods: {
			scroll(){
				let pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(pageScrollTop > 20) {
					this.show = true
				} else {
					this.show = false
				}
			},
			backTop() {
				let pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				document.documentElement.scrollTop = 0;
				document.body.scrollTop = 0;
				this.show = false;
			}
		}
	}
</script>

<style>
	.back-top {
		position: fixed;
		width: 40px;
		height: 40px;
		border: 2px solid #3cbaff;
		border-radius: 50%;
		right: 10px;
		bottom: 20px;
		color: #3cbaff;
		font-size: 22px;
		text-align: center;
		line-height: 40px;

	}
</style>