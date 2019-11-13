import $ from 'jquery';
import Vue from 'vue';
import layer from 'layui-layer';
import axios from 'axios';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router.js';
import '../css/style.css';
import '../css/responsive.css';
import '../css/zerogrid.css';

axios.defaults.baseURL = "http://localhost:8888";
window.axios = axios;
// 固定写法
Vue.use(VueRouter);
Vue.use(ElementUI) //使用elementUI


var app = new Vue({
	el:"#app",
	render:c => c(App),
	router
});








