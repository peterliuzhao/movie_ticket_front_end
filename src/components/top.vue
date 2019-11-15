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
                    <p>lijunqi6666@163.com</p>
                  </li>
                  <li class="phone">
                    <p>888 8888 8888</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-1-2">
              <div class="wrap-col f-right">
                <a href="#" v-show="loginBtn" @click.prevent="login()">登录/注册</a>
                <span v-show="!loginBtn">
                  <a href="#">当前用户：</a>
                  <a href="#">{{loginUname}}</a>
                  <a href="#">退出登录</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-header zerogrid">
        <div class="row">
          <div class="col-1-2">
            <div class="wrap-col">
              <div class="logo">
                <a href="#">
                  <img src="/images/logo.png" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-1-2">
            <div class="wrap-col f-right">
              <form method="get" action="/search" id="search">
                <input name="q" type="text" size="40" placeholder="Search..." />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div id="menu">
            <nav>
              <div class="wrap-nav">
                <ul>
                  <li v-for="(meal,i) in meals" :key="i" :class="{active:meal[2]}" @click="select(i)">
                    <router-link :to="meal[1]">{{meal[0]}}</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
      <login id="login" v-show="false" :login-index="loginIndex" @loginMsg="loginMsg" @reg="reg()"></login>
      <reg id="reg" v-show="false" :reg-index="regIndex" @login="login()"></reg>
  </div>
</template>

<script>
import login from "./login.vue";
import reg from "./reg.vue";
export default {
  data() {
    return {
      loginUname:"",//当前登录用户的用户名
      loginBtn:true,//是否显示登录按钮
      meals: [
        ["首页", "/home", true],
        ["选座", "/selectSeat", false],
        ["电影", "/filmList", false],
        ["榜单", "/home", false],
        ["放映点信息", "/home", false],
        ["评论区", "/theaterComment", false],
        ["关于我们", "/home", false]
      ],
      loginIndex:0,
      regIndex:0
    };
  },
  methods: {
    loginMsg(data){
      this.loginUname = data;
      this.loginBtn = false;
    },
    reg() {
      try {
        layer.close(this.loginIndex);
      } catch (error) {}
      var reg = $("#reg");
      this.regIndex = layer.open({
        type: 1,
        title: null,
        anim:-1,//	弹出时动画：无动画
        skin: "layui-layer-demo", //样式类名
        area: ["35%", "45%"], //宽高
        closeBtn: 0, //不显示关闭按钮
        shadeClose: false, //开启遮罩关闭
        content: reg
      });
    },
    login() {
      try {
        layer.close(this.regIndex);
      } catch (error) {}
      var login = $("#login");
      this.loginIndex = layer.open({
        type: 1,
        title: null,
        anim:-1,//	弹出时动画：无动画
        skin: "layui-layer-demo", //样式类名
        area: ["35%", "40%"], //宽高
        closeBtn: 0, //不显示关闭按钮
        shadeClose: false, //开启遮罩关闭
        content: login
      });
    },
    select(index) {
      for (var j = 0; j < this.meals.length; j++) {
        this.meals[j][2] = false;
        this.$set(this.meals, j, this.meals[j]);
      }
      this.meals[index][2] = true;
    }
  },
  components: {
    login,reg
  }
};
</script>

<style scoped="scoped">
#top .wrap-col a {
  color: greenyellow;
}
#top .wrap-col a:hover {
  color: orange;
}

</style>
