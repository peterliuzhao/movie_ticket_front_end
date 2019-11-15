import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import top from './components/top.vue';
import middle from './components/middle.vue';
import bottom from './components/bottom.vue';
import home from './components/home.vue';//主页
import selectSeat from './components/selectSeat.vue';//选座
import film from './components/film.vue';//电影单页面
import hotFilmsList from './components/hotFilmsList.vue';//热门电影列表
import filmTags from './components/filmTags.vue';//电影标签
import todayFilms from './components/todayFilms.vue';//今日推荐
import hotPlaying from './components/hotPlaying.vue';//热映电影组件
import hotFilms from './components/hotFilms.vue';//热播电影组件
import theaterComment from './components/theaterComment.vue';//评论区组件
import editor from './components/editor.vue';//留言编辑器
import filmList from './components/filmList.vue';//电影分类查询列表

var router = new VueRouter({
	routes: [
		{path: '/',redirect: '/home',component: home},
		{path: "/*",components: {
				"top": top,
				"middle": middle,
				"bottom": bottom
		}, children: [
				{path:"/home",component:home,children:[
					{path:"/home",components:{
						"hotFilmsList":hotFilmsList,
						"filmTags":filmTags,
						"todayFilms":todayFilms,
						"hotPlaying":hotPlaying,
						"hotFilms":hotFilms
					}}
				]},
				{ path: "/selectSeat", component: selectSeat },
				{path:"/filmList",component:filmList},
				{path:"/film",component:film,children:[
					{path:"/film",components:{
						"hotFilmsList":hotFilmsList,
						"filmTags":filmTags,
						"todayFilms":todayFilms
					}}
				]},
				{path:"/theaterComment",component:theaterComment,children:[
					{path:"/theaterComment",component:editor}
				]},
			]
		}
	]
});
export default router;
