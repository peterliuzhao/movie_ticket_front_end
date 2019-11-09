<template>
	<div id="todayFilms">
		<div class="widget wid-post">
			<div class="wid-header">
				<h5>今日推荐</h5>
			</div>
			<div v-for="film in films" class="wid-content">
				<div class="post">
					<a href="#"><img :src="film.filmImg" /></a>
					<div class="wrapper">
						<a href="#">
							<h6>{{film.filmName}}</h6>
						</a>
						<p>{{film.filmTime|time}}</p>
						<a href="#"><img src="images/star.png" /></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				films:[
					{
						"filmName":"蓝色黎明",
						"filmImg":"images/1.jpg",
						"filmTime":new Date()
					},
					{
						"filmName":"血色黄昏",
						"filmImg":"images/2.jpg",
						"filmTime":new Date()
					},
					{
						"filmName":"绿色星球",
						"filmImg":"images/3.jpg",
						"filmTime":new Date()
					}
				]
			};
		},
		methods:{
			
		},
		filters:{
			time(data){
				var date = new Date(data);
				return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
			}
		}
	}
</script>

<style>
</style>
