<template>
	<div id="home">
		<section id="container">
			<div class="wrap-container zerogrid">
				<div id="main-content" class="col-2-3">
					<div class="wrap-content">
						<!-- 正在热映 -->
						<router-view name="hotPlaying"></router-view>
						<router-view name="hotFilms"></router-view>
					</div>
				</div>
				<div id="sidebar" class="col-1-3">
					<div class="wrap-sidebar">
						<!-- 热门电影 -->
						<router-view name="hotFilmsList"></router-view>
						<!-- 电影标签 -->
						<router-view name="filmTags"></router-view>
						<!-- 今日推荐 -->
						<router-view name="todayFilms"></router-view>
					</div>
				</div>
			</div>
		</section>
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
