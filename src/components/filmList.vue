<template>
  <div id="filmList">
      <div class="selectTypeList zerogrid">
          <div v-for="(meal,i) in meals" :key="i" class="rows">
              <div v-for="(mealItem,j) in meal" :key="j">
                  {{mealItem}},
              </div>
          </div>
      </div>
    <div class="zerogrid">
      <div id="main-content" class="col-3-3">
        <div class="movie">
          <div class="row">
            <div class="col-1-5" v-for="(film,i) in films" :key="i">
              <div class="wrap-col">
                <div class="post">
                  <div class="view effect">
                    <!-- 1到20都是电影 -->
                    <img class="thumb" :src="film.filmImg" />
                    <div class="mask">
                      <router-link title="电影详情" class="info" to="/film">
                        <img src="images/play_button_64.png" />
                      </router-link>
                    </div>
                  </div>
                  <div class="clear"></div>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        meals:[
            {"按类型":['科幻','历史','穿越','校园']},
            {"按上映时间":['2015','2016','2017','2018','2019']},
            {"按价格":['20元以下','20-30','30-40','40元以上']}
        ],
      films: [
        {
          filmName: "四号武器",
          filmInfo: "影片简介",
          filmImg: "images/1.jpg"
        },
        {
          filmName: "四号武器",
          filmInfo: "影片简介",
          filmImg: "images/2.jpg"
        },
        {
          filmName: "四号武器",
          filmInfo: "影片简介",
          filmImg: "images/3.jpg"
        },
        {
          filmName: "四号武器",
          filmInfo: "影片简介",
          filmImg: "images/4.jpg"
        },
        {
          filmName: "四号武器",
          filmInfo: "影片简介",
          filmImg: "images/5.jpg"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scope>
.selectTypeList div{
    float: left;
}
.rows{
    clear: both;
}
</style>
