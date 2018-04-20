<template>
	<div>
	<ul>
		<li v-for="item in listData" :key="item.id">
			<h3>{{item.title}}</h3>
		</li>
	</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['listData']
	}
</script>