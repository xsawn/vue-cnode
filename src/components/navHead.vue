<template>
	<div>
		<header class="nav-head">
			<a v-if="showMenu" class="nav-head-btn" @click="toggleMenu" href="javascript: void(0)"><span>菜单</span></a>
			<div class="nav-head-title">{{title}}</div>
			<router-link v-if="showAdd" to="/addtopic" class="add-topic" href="">
				<span>新建</span>
			</router-link>
		</header>
		<nav-menu :showMenu="showLeftMenu" @hideMenu="toggleMenu"></nav-menu>	
	</div>
</template>

<script type="text/javascript">
	import NavMenu from './navMenu';

	export default {
		props: {
			title: String,
			showAdd: {
				type: Boolean,
				default: true
			},
			showMenu: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				showLeftMenu: false
			}
		},
		methods: {
			toggleMenu() {
				this.showLeftMenu = !this.showLeftMenu;
				return false;
			},
		},
		components: {
			'nav-menu': NavMenu
		}
	}
</script>

<style type="text/css">
	.nav-head {
		position: fixed;
		display: flex;
		align-items: center;
		width: 100%;
		height: 44px;
	    background-color: rgba(255, 255, 255, 0.95);
	    top: 0;
	    left: 0;
	    box-shadow: 0 0 4px rgba(0,0,0,.25);
	    z-index: 1;
	}
	.nav-head-btn, .add-topic {

		width: 49px;
		text-align: center;
	}
	.nav-head-title {
		flex-grow: 1;
		font-size: 16px;
		text-align: center;
	}
	.add-topic {

	}
</style>