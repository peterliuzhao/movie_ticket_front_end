<template>
	<div id="app">
		<div class="wrap-body">
			<router-view name="top"></router-view>
			<router-view name="middle"></router-view>
			<router-view name="bottom"></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {},
	}
</script>

<style>
</style>
