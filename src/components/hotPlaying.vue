<template>
	<div id="hotPlaying">
		<div class="movie">
			<div class="row type">
				<div class="title">
					<h2>&nbsp;&nbsp;正在热映</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-1-4" v-for='film in films'>
					<div class="wrap-col">
						<div class="post">
							<div class="view effect">
								<!-- 1到20都是电影 -->
								<img class="thumb" :src="film.filmImg" />
								<div class="mask">
									<router-link title="电影详情" class="info" to="/film">
										<img src="images/play_button_64.png" />
									</router-link>
								</div>
							</div>
							<div class="clear"></div>
							<a href="single.html">
								<h3>{{film.filmName}}</h3>
							</a>
							<span>{{film.filmInfo}}</span>
						</div>
					</div>
				</div>
			</div>
			<center>
				<div class="pagination">
					<a href="#" class="page gradient">首页</a>
					<a href="#" class="page gradient">2</a>
					<a href="#" class="page gradient">3</a>
					<span class="page active">4</span>
					<a href="#" class="page gradient">5</a>
					<a href="#" class="page gradient">6</a>
					<a href="#" class="page gradient">尾页</a>
				</div>
			</center>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				films: [{
						"filmName": "四号武器",
						"filmInfo": "影片简介",
						"filmImg": "images/1.jpg"
					},
					{
						"filmName": "四号武器",
						"filmInfo": "影片简介",
						"filmImg": "images/2.jpg"
					},
					{
						"filmName": "四号武器",
						"filmInfo": "影片简介",
						"filmImg": "images/3.jpg"
					},
					{
						"filmName": "四号武器",
						"filmInfo": "影片简介",
						"filmImg": "images/4.jpg"
					},
					{
						"filmName": "四号武器",
						"filmInfo": "影片简介",
						"filmImg": "images/5.jpg"
					}
				]
			};
		},
		methods: {

		}
	}
</script>

<style>
</style>
