<template>
		<div class="topic-lists">
			<ul>
				<li class="topic-item" v-for="item in listData" :key="item.id">
					<router-link :to="'/topic/' + item.id">
						<h3 :class="item.tab" :title="item.tab">{{item.title}}</h3>
						<div class="topic-desc">
							<img class="avatar" :src="item.author.avatar_url">
							<span v-text="item.author.loginname"></span>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
</template>

<script type="text/javascript">
	export default {
		props: ['listData']
	}
</script>

<style type="text/css">
	.topic-lists {
		padding-top: 44px;
	}
	.topic-item {
    	padding: 10px 15px;
    	border-bottom: 1px solid #d5dbdb;
	}
	.topic-item h3{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.topic-item h3:before {
		content: attr(title);
		/*display: block;*/
		font-size: 10px;
		padding: 5px 6px;
		text-align: center;
		vertical-align: middle;
		color: #fff;
		margin-right: 8px;
		margin-top: -4px;
		border-radius: 2px;
	}
	h3.top:before {
		background: #e74c3c;
	}
	h3.share:before {
		background: #1abc9c;
	}
	h3.ask:before {
		background: #3498db;
	}
	h3.good:before {
		background: #e67e22;
	}
	.topic-desc {
		display: flex;
		align-items: center;
		padding-top: 10px;
	}
	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 8px;
	}
</style>