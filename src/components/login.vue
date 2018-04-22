<template>
	<div>
		<nav-head title="登陆" :showMenu="false" :showAdd="false"></nav-head>
		<section class="login-box">
			<form class="login-form">
				<input class="login-psd" v-model="accesstoken" type="text" name="password" placeholder="access token"/>
				<a class="login-btn" @click="login" href="javascript: void(0)">登陆</a>
			</form>
		</section>
	</div>
</template>

<script>
	import NavHead from './navHead';
	import $ from 'jquery';
	export default {
		data() {
			return {
				accesstoken: ''
			}
		},
		created() {
			console.log('login is initialed')
		},
		methods: {
			login() {console.log('asdfsadf')
				$.ajax({
					url: '/accesstoken',
					type: 'POST',
					data: {
						accesstoken: this.accesstoken
					}
				}).done(res=> {
					if(res && res.success === true) {
						let loginInfo = {
							"isLogin": true,
							"loginname": "xxShawn",
							"avatar_url": "https://avatars3.githubusercontent.com/u/16178276?v=4&s=120","id":"584f607a3ebad99b336b1ff2"
						}
						localStorage.setItem('loginInfo', JSON.stringify(loginInfo))
						let redirect = this.$route.params.redirect || '/list';
						if(redirect) this.$router.push(redirect)
						console.log('login success')
					}
				}) 
			}
		},
		components: {
			'nav-head': NavHead
		}
	}
</script>
<style type="text/css">
	.login-box {
		padding-top: 50px;

	}
	.login-form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.login-psd {
		width: 90%;
		height: 42px;
		border-radius: 0px;
		border: none;
		border-bottom: 1px solid #4fc08d;
	}
	.login-btn {
		display: block;
		width: 90%;
		height: 42px;
		text-align: center;
		margin-top: 10px;
		line-height: 42px;
		border-radius: 3px;
		color: #fff;
		font-size: 16px;
		background-color: #4fc08d;
	}
</style>