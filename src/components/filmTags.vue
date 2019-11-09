<template>
	<div id="filmTags">
		<div class="widget wid-tag">
			<div class="wid-header">
				<h5>标签</h5>
			</div>
			<div class="wid-content">
				<ul>
					<li v-for='tag in filmTags'>
						<a href="#">{{tag}}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				filmTags: [
					"动作",
					"爱情",
					"惊悚",
					"灵异",
					"科幻",
					"历史",
					"校园"
				]
			};
		},
		methods: {}
	}
</script>

<style>
</style>
