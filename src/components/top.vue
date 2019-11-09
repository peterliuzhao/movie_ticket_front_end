<template>
	<div id="top">
		<header>
			<div class="top-bar">
				<div class="wrap-top zerogrid">
					<div class="row">
						<div class="col-1-2">
							<div class="wrap-col">
								<ul>
									<li class="mail">
										<p>ContacUst@Gmail.com</p>
									</li>
									<li class="phone">
										<p>80 88888 7</p>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-1-2">
							<div class="wrap-col f-right">
								登录 注册
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wrap-header zerogrid">
				<div class="row">
					<div class="col-1-2">
						<div class="wrap-col">
							<div class="logo"><a href="#"><img src="/images/logo.png" /></a></div>
						</div>
					</div>
					<div class="col-1-2">
						<div class="wrap-col f-right">
							<form method="get" action="/search" id="search">
								<input name="q" type="text" size="40" placeholder="Search..." />
								<input type="submit" value="Submit">
							</form>
						</div>
					</div>
				</div>
				<div class="row">
					<div id="menu">
						<nav>
							<div class="wrap-nav">
								<ul>
									<li v-for='(meal,i) in meals' :class="{active:meal[2]}" @click="select(i)">
										<router-link :to="meal[1]">{{meal[0]}}</router-link>
									</li>
									<!-- <li :class="{active:ischecked[1]}"><router-link to="/selectSeat">选座</router-link></li> -->
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				meals:[
					["首页","/home",true],
					["选座","/selectSeat",false],
					["电影","/home",false],
					["榜单","/home",false],
					["放映点信息","/home",false],
					["评论区","/home",false],
					["关于我们","/home",false]
				],
			};
		},
		methods: {
			select(index){
				for(var j=0;j<this.meals.length;j++){
					this.meals[j][2] = false;
					this.$set(this.meals,j,this.meals[j]);
				}
				this.meals[index][2] = true;
			}
		}
	}
</script>

<style scoped="scoped">
</style>
