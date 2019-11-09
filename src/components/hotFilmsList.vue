<template>
	<div id="hotFilmsList">
		<div class="widget wid-new-updates">
			<div class="wid-header">
				<h5>热门电影 !</h5>
			</div>
			<div class="wid-content">
				<ul>
					<li v-for='film in films'>
						<a href="#">{{film}}</a>
						<span><img src="images/hot.png" /></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				films:[
					"流浪地球",
					"阿凡达",
					"朱门酒肉臭",
					"路有冻死骨",
					"莫得钱财"
				]
			};
		},
		methods:{}
	}
</script>

<style>
</style>
