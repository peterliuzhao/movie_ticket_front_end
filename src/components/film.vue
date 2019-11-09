<template>
	<div id="film">
		<section id="container">
			<div class="wrap-container zerogrid">
				<div id="main-content" class="col-2-3">
					<div class="wrap-content">
						<article>
							<div class="art-header">
								<div class="col-1-3">
									<div class="wrap-col">
										<img src="images/boy7.png" />
									</div>
								</div>
								<div class="col-2-3">
									<div class="wrap-col">
										<ul>
											<li><p>Tags: <a href="#">Action</a></p></li>
											<li><p>Production: <a href="#">Action</a></p></li>
											<li><p>Actor: <a href="#">Action</a></p></li>
											<li><p>Director: <a href="#">Action</a></p></li>
											<li><p>Nation: <a href="#">Action</a></p></li>
											<li><p>Tags: <a href="#">Action</a></p></li>
											<li><p>Upload: <a href="#">Action</a></p></li>
											<li><a class="button bt1" href="#">Play</a><a class="button bt1" href="#">Trailer</a></li>
											<li class="star"><a href="#"><img src="images/star.png" /></a></li>
										</ul>
									</div>
								</div>
								<div class="clear"></div>
							</div>
							<div class="art-content">
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, 
								sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
								sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
								<img src="images/0.jpg" />
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, 
								sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
								sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
								<blockquote><p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet vultatup duista.</p></blockquote>
								<img src="images/17.jpg" />
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, 
								sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,aaszx asqr amet vultatup duista.justo duo dolores et ea rebum</p>
								<div class="note">
								  <ol>
									<li>Lorem ipsum</li>
									<li>Sit amet vultatup nonumy</li>
									<li>Duista sed diam</li>
								  </ol>
								  <div class="clear"></div>
								</div>
								<img src="images/16.jpg" />
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, 
								sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
								sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, 
								sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
								sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
								<div class="clear"></div>
							</div>
						</article>
					</div>
				</div>
				<div id="sidebar" class="col-1-3">
					<div class="wrap-sidebar">
						<!---- Start Widget ---->
						<router-view name="hotFilmsList"></router-view>
						<!---- Start Widget ---->
						<router-view name="filmTags"></router-view>
						<!---- Start Widget ---->
						<router-view name="todayFilms"></router-view>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{}
	}
</script>

<style>
</style>
