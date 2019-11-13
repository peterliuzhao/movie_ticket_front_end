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
                <a href="#" @click.prevent="login()">登录</a>
                注册
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
                  <li
                    v-for="(meal,i) in meals"
                    :key="i"
                    :class="{active:meal[2]}"
                    @click="select(i)"
                  >
                    <router-link :to="meal[1]">{{meal[0]}}</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div id="login" v-show="false">
      <login :login-index="loginIndex"></login>
    </div>
  </div>
</template>

<script>
import login from "./login.vue";
export default {
  data() {
    return {
      meals: [
        ["首页", "/home", true],
        ["选座", "/selectSeat", false],
        ["电影", "/home", false],
        ["榜单", "/home", false],
        ["放映点信息", "/home", false],
        ["评论区", "/theaterComment", false],
        ["关于我们", "/home", false]
      ],
      loginIndex:0
    };
  },
  methods: {
    // closeLogin(){
    //   layer.close(this.loginIndex);
    // },
    login() {
      // if(data.children)
      var login = $("#login");
      this.loginIndex = layer.open({
        type: 1,
        title: null,
        skin: "layui-layer-demo", //样式类名
        area: ["35%", "40%"], //宽高
        closeBtn: 0, //不显示关闭按钮
        anim: 2,
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
    login
  }
};
</script>

<style scoped="scoped">
#top a {
  color: white;
}
</style>
