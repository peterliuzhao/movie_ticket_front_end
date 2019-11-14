import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var store = new Vuex.Store({
    // 共享属性
    state: {
        // 当前登录的用户
        loginUser: {
            uname: null,
            tid: null
        }
    },
    // 共享方法
    mutations: {
        login(user) {
            this.state.loginUser.uname = user.uname;
            this.state.loginUser.tid = user.tid;
        }
    }
});
export default store;