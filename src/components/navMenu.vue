<template>
	<div>
		<div v-if="showMenu" class="page-cover" @click="hideMenu"></div>
		<div :class="getMenuClass" @click="hideMenu">
			<div class="menu-t">
				<div class="person-info" v-if="loginInfo.isLogin">
					<img class="user-avatar" :src="loginInfo.avatar_url" />
					<span class="user-name" v-text="loginInfo.loginname"></span>
				</div>
				<a v-else href="javascript: void(0)" class="login" @click="goLogin"><span>登陆</span>
				</a>
			</div>
			<div class="menu-m">
				<ul>
					<li class="menu-item" v-for="(item, index) in menus" :key="index">
					<router-link class="menu-link" :to="item.to">{{item.title}}</router-link>
					</li>
				</ul>
			</div>
<!-- 			<div class="menu-b">
				<ul>
					<li v-for="(item, index) in others" :key="index">
					<router-link to="item.to">{{item.title}}</router-link>
					</li>
				</ul>
			</div> -->
		</div>
	</div>

</template>

<script type="text/javascript">

	export default {
		data() {
			return {
				loginInfo: {

				},
				menus:[
					{
						title: '全部', 
						to:'/list?tab=all',
					},
					{
						title: '精华',
						to:'/list?tab=good'
					},
					{
						title: '分享',
						to:'/list?tab=share'
					},
					{
						title: '消息',
						to: '/message'
					},
					{
						title: '关于',
						to: '/about'
					}

				]
			}
		},
		created() {
			let loginInfo = window.localStorage.getItem('loginInfo')
			if(loginInfo) {
				this.loginInfo = JSON.parse(loginInfo)
			}
		},
		methods: {
			goLogin(){
				this.$router.push({
					path: '/login', 
					query: {
						redirect: encodeURIComponent(this.$route.path)
					}
				})
			},
			hideMenu() {
				this.$emit('hideMenu')
			}
		},
		computed: {
			getMenuClass() {
				return {
					"nav-menus": true,
					"show-menu": this.showMenu
				}
			}
		},

		props: ['showMenu']

	}
</script>

<style type="text/css">
	.nav-menus {
		position: fixed;
		width: 200px;
		height: 100%;
		left: -200px;
		z-index: 2;
		background: white;
		transition: all .3s ease;
	}
	.show-menu {
		transform: translateX(200px);
	}
	.page-cover {
	    position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    background: rgba(0,0,0,.4);
	    z-index: 1;
	}
	/*登陆*/
	.menu-t {
		height: 70px;
		display: flex;
		align-items: stretch;
		justify-content: center;
		overflow: hidden;
	}
	.login {
		display: block;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 24px;
		border-bottom: 1px solid #d4d4d4;

	}
	.menu-m {
		margin-top: 18px;
		padding: 0 24px;
	}
	.menu-m  .menu-item{
		display: flex;
		justify-content: center;
		align-items: stretch;

		font-size: 14px;
		height: 42px;
		text-align: center;
	}
	.menu-link {
		flex-grow: 1;
		line-height: 42px;
	}
	.person-info {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #d4d4d4;
	}
	.user-avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.user-name {
		margin-left: 10px;
	}
</style>