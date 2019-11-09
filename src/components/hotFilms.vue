<template>
	<div id="hotFilms">
		<div class="serie">
			<div class="row type">
				<div class="title">
					<h2>&nbsp;&nbsp;热播电影</h2>
				</div>
				<ul>
					<li>
						<select>
							<option value="audi" selected>爱情</option>
							<option value="volvo">喜剧</option>
							<option value="saab">恐怖</option>
							<option value="volvo">动作</option>
							<option value="volvo">动画</option>
						</select>
					</li>
					<li><a class="button " href="#">Search</a></li>
				</ul>
			</div>
			<div class="row">
				<div class="col-1-4" v-for='film in films'>
					<div class="wrap-col">
						<div class="post">
							<div class="view effect">
								<img class="thumb" :src="film.filmImg" />
								<div class="mask">
									<a href="single.html" class="info" title="Full Image"><img src="images/play_button_64.png" /></a>
								</div>
							</div>
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
	export default{
		data(){
			return{
				films:[
					{
						"filmName":"血色黄昏",
						"filmInfo":"电影简介",
						"filmImg":"images/9.jpg"
					},
					{
						"filmName":"血色黄昏",
						"filmInfo":"电影简介",
						"filmImg":"images/10.jpg"
					},
					{
						"filmName":"血色黄昏",
						"filmInfo":"电影简介",
						"filmImg":"images/11.jpg"
					},
					{
						"filmName":"血色黄昏",
						"filmInfo":"电影简介",
						"filmImg":"images/12.jpg"
					},
					{
						"filmName":"血色黄昏",
						"filmInfo":"电影简介",
						"filmImg":"images/13.jpg"
					},
					{
						"filmName":"血色黄昏",
						"filmInfo":"电影简介",
						"filmImg":"images/14.jpg"
					}
				]
			};
		},methods:{
			
		}
	}
</script>

<style>
</style>
