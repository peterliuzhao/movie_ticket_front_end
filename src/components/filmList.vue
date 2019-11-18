<template>
  <div id="filmList">
      <div class="selectTypeList zerogrid meals">
          <div v-for="(meal,i) in meals" :key="i" class="rows">
            <div class="tag">{{meal[0]}}:</div>
              <div v-for="(mealItem,j) in meal[1]" :key="j">
                  <div class="item">
                    <span :class="{checked:mealItem[1]}" @click="select(i,j)">{{mealItem[0]}}</span>
                  </div>
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
            ["按类型",[['科幻',true],['历史',false],['穿越',false],['校园',false]]],
            ["按上映时间",[['2015',true],['2016',false],['2017',false],['2018',false],['2019',false]]],
            ["按价格",[['20元以下',true],['20-30',false],['30-40',false],['40元以上',false]]]
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
  methods: {
    select(i,j) {
      for(var a=0;a<this.meals[i][1].length;a++){
        if(this.meals[i][1][a][1]){
           this.$set(this.meals, i, this.meals[i]);
           this.meals[i][1][a][1] = false;
           this.meals[i][1][j][1] = true;
           break;
        }
       
      }
      
      // for (var j = 0; j < this.meals.length; j++) {
      //   this.meals[j][2] = false;
      //   this.$set(this.meals, j, this.meals[j]);
      // }
      // this.meals[index][2] = true;
    }
  }
};
</script>

<style scope>
.selectTypeList div{
    float: left;
}
.meals{
  border: 1px solid white;
}
.rows{
    clear: both;
    background-color:rgba(112, 112, 112, 0.5);
    margin:5px 0 5px 0;
    padding: 3px;
    width: 100%
}
.rows .tag{
  width: 100px;
}
.rows .item{
  width: 80px;
  text-align: center;
  cursor: pointer;
}
.rows .checked{
  background-color: orange;
  padding: 5px;
  border-radius: 10%;
}
</style>
