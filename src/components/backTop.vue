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
				let pageScrollTop = this.getScrollTop();
				if(pageScrollTop > 20) {
					this.show = true
				} else {
					this.show = false
				}
			},
			backTop() {
				let pageScrollTop = this.getScrollTop();
				window.scrollTo(0, 0)
				this.show = false;
			},
			getScrollTop() {
				return document.documentElement.scrollTop || document.body.scrollTop;
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