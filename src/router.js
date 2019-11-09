import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import top from './components/top.vue';
import middle from './components/middle.vue';
import bottom from './components/bottom.vue';
import home from './components/home.vue';
import selectSeat from './components/selectSeat.vue';
import film from './components/film.vue';
import hotFilmsList from './components/hotFilmsList.vue';todayFilms
import filmTags from './components/filmTags.vue';
import todayFilms from './components/todayFilms.vue';hotFilms
import hotPlaying from './components/hotPlaying.vue';
import hotFilms from './components/hotFilms.vue';

var router = new VueRouter({
	routes: [{
			path: "/*",
			components: {
				"top": top,
				"middle": middle,
				"bottom": bottom
			},children:[
				{path:"/home",component:home,children:[
					{path:"/home",components:{
						"hotFilmsList":hotFilmsList,
						"filmTags":filmTags,
						"todayFilms":todayFilms,
						"hotPlaying":hotPlaying,
						"hotFilms":hotFilms
					}}
				]},
				{path:"/selectSeat",component:selectSeat},
				{path:"/film",component:film,children:[
					{path:"/film",components:{
						"hotFilmsList":hotFilmsList,
						"filmTags":filmTags,
						"todayFilms":todayFilms
					}}
				]}
			]
		}
	]
});
export default router;
