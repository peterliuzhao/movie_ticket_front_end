<template>
	<div id="selectSeat">
		<div class="box">
			<div id="room">
				<div class="row" style="margin-left:25%;">
					<div style="margin-left: 20px;">
						<div class="sit bg-sit"></div>
						<div>可选座位</div>
					</div>
					<div style="margin-left: 20px;">
						<div class="sit bg-sited"></div>
						<div>已售座位</div>
					</div>
					<div style="margin-left: 20px;">
						<div class="sit bg-temp"></div>
						<div>已选座位</div>
					</div>
				</div>
				<div class="row" style="width: 100%;text-align: center;">
					<span>
						银幕中央
					</span>
					<hr style="width: 90%;">
				</div>
				<div v-for="(item,i) in list" class="row" style="margin-left: 15%;">
					<div class="sit bg-nosit" style="margin-right:50px">{{i+1}}</div>
					<div @click="selectSeat(item1,i,j)" :class="['sit',{'bg-temp':item1==3},{'bg-sited':item1==2},{'bg-sit':item1==1},{'bg-nosit':item1==0}]"
					 v-for="(item1,j) in item">
					</div>
				</div>
			</div>
			<div class="win-right">
				<div class="row">
					<div>
						<img class="film-img" :src="filmSession.filmImg" alt="">
					</div>
					<div>
						<div class="row film-title">{{filmSession.filmName}}</div>
						<div class="row">类型：{{filmSession.filmType}}</div>
						<div class="row">时长：120分钟</div>
					</div>
				</div>
				<div class="row">
					<span>影院：</span>
					<span>{{filmSession.svname}}</span>
				</div>
				<div class="row">
					<span>影厅：</span>
					<span>{{filmSession.svaddress}}</span>
				</div>
				<div class="row">
					<span>场次：</span>
					<span>{{filmSession.fstartTime|time}}</span>
				</div>
				<div class="row">
					<span>票价：</span>
					<span>￥{{filmSession.filmPrice|price}}</span>
				</div>
				<div class="row">
					<div>座位：</div>
					<div>
						<div v-for="sit in msg">
							<span class="select-sit">{{sit|f3}}</span>
						</div>
					</div>
				</div>
				<div class="row">
					<span>总价：</span>
					<span style="font-size: 25px;color: gold;font-weight: 900;">￥{{filmSession.filmPrice*msg.length|price}}</span>
				</div>
				<div class="row" style="margin:5% 20%;">
					<button type="button" class="btn" @click="sub">确认选座</button>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default ({
		data() {
			return {
				// 场次信息
				filmSession: {
					//放映点名称
					svname: "花语影院",
					//放映点地址
					svaddress: "5号放映厅",
					//开始时间
					fstartTime: new Date(),
					filmName: "社会",
					filmType: "黑道",
					filmImg: "images/2.jpg",
					filmPrice: 33.50
				},
				list: [
					[1, 1, 2, 2, 1, 0, 1, 2, 1, 1],
					[1, 1, 2, 2, 1, 2, 1, 2, 1, 0],
					[1, 1, 2, 2, 1, 0, 1, 2, 1, 1],
					[1, 1, 2, 0, 1, 0, 1, 2, 1, 1],
					[0, 1, 2, 2, 1, 0, 1, 2, 1, 2],
					[0, 1, 2, 2, 1, 0, 1, 2, 1, 0],
					[0, 1, 2, 2, 1, 2, 1, 2, 1, 1],
					[1, 1, 2, 2, 1, 2, 1, 2, 1, 0],
					[1, 1, 2, 2, 1, 1, 1, 2, 1, 0],
					[1, 1, 2, 2, 1, 1, 1, 2, 1, 0]
				],
				styleObj1: {
					'background-color': 'red'
				},
				msgCount: 0,
				msg: []
			}
		},
		methods: {
			selectSeat(data, x, y) {
				if (data == 1 && this.msgCount <= 3) {
					this.$set(this.msg, this.msgCount++, [x, y]);
					this.list[x][y] = 3;
				} else if (data == 3) {
					// 用于记录要删除的座位下标
					var temp = null;
					for (var i = 0; i < this.msg.length; i++) {
						if (this.msg[i][0] == x && this.msg[i][1] == y) {
							temp = i;
							break;
						}
					}
					this.msgCount--;
					this.$delete(this.msg, temp);
					this.list[x][y] = 1;
				} else {
					if (this.msgCount == 4) {
						layer.msg("最多只能订4张票！");
					}
				}
			},
			sub() {
				var x, y;
				for (var i = 0; i < this.msg.length; i++) {
					x = this.msg[i][0];
					y = this.msg[i][1];
					this.$set(this.list, 'x,y', 2);
					this.list[x][y] = 2;
				}
			}
		},
		filters: {
			f3(data) {
				return (data[0] + 1) + "排 | " + (data[1] + 1) + "座";
			},
			time(data) {
				var date = new Date(data);
				var month = date.getMonth() + 1;
				var day = date.getDate();
				var hours = date.getHours() > 9 ? date.getHours() : ("0" + date.getHours());
				var minutes = date.getMinutes() > 9 ? date.getMinutes() : ("0" + date.getMinutes());
				return month + "月" + day + "日  " + hours + ":" + minutes;
			},
			price(data) {
				var price = parseFloat(data);
				return price.toFixed(2);
			}
		}
	});
</script>

<style scoped="scoped">
	html,
	body {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	#selectSeat div {
		/* border: 1px solid black; */
		float: left;
	}

	#room {
		/* width: 300px; */
		width: 60%;
		border: 1px solid black;
		padding: 20px 20px 20px 20px;
		background-color: rgba(112, 112, 112, 0.8);
		/* background-color: white; */
	}

	.sit {
		height: 35px;
		width: 35px;
		min-height: 10px;
		min-width: 10px;
		margin: 4px 4px 4px 4px;
		background-size: cover;
		/* border: 1px solid black; */
	}

	.bg-sit {
		background-image: url('/images/bg-sit.png');
	}

	.bg-sit:hover {
		cursor: pointer;
	}

	.bg-sited {
		background-image: url('/images/bg-sited.png');
	}

	.bg-nosit {
		/* border: 1px solid white; */
	}

	.bg-temp {
		cursor: pointer;
		background-image: url('/images/bg-temp.png');
	}

	.select-sit {
		border: 2px orange solid;
		border-radius: 10px;
		margin: 0 4px 4px 0;
		padding: 4px 8px 4px 8px;
		background-color: rgba(255, 0, 0, 0.2);
	}

	.row {
		clear: both;
	}

	.btn {
		border-radius: 10px;
		width: 200px;
		height: 50px;
		/* padding: 4px 10px 4px 10px; */
		background-color: rgba(255, 0, 0, 0.8);
		font-size: 25px;
		color: white;
		font-family: "微软雅黑";
		border: none;
		cursor: pointer;
	}

	.btn:hover {
		background-color: mediumseagreen;
	}

	.win-right {
		padding-left: 2%;
		padding-top: 2%;
		width: 27%;
		background-color: rgba(112, 112, 112, 0.4);
		height: 100%;
	}

	.box {
		width: 90%;
		margin-left: 8%;
		height: 64%;
	}

	.film-img {
		width: 80%;
	}

	.film-title {
		font-family: "微软雅黑";
		font-weight: 900;
		font-size: 25px;
	}

	#app {
		height: 100%;
	}

	.price {}
</style>
