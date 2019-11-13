<template>
	<div id="theaterComment">
		<!-- 评论区 -->
		<div class="comments-container">
			<ul id="comments-list" class="comments-list">
				<li v-for='comment in comments' :key='comment'>
					<!-- 一级评论 -->
					<div class="comment-main-level">
						<!-- 一级评论作者头像 -->
						<div class="comment-avatar"><img :src="comment.autorPhoto" alt="">
						</div>
						<!-- 一级评论框 -->
						<div class="comment-box">
							<div class="comment-head">
								<!-- 一级评论作者 -->
								<h6 class="comment-name"><a href="#">{{comment.autorName}}</a></h6>
								<!-- 一级评论时间 -->
								<span>{{comment.messageTime|time}}</span>
								<i class="fa fa-reply"></i>
								<i class="fa fa-heart"></i>
								<div class="right"><a href="#" @click.prevent="reply(comment)">回复</a></div>
							</div>
							<!-- 一级评论内容 -->
							<div class="comment-content">
								{{comment.message}}
							</div>
						</div>
					</div>
					<ul class="comments-list reply-list">
						<li v-for="childComment in comment.children" :key="childComment">
							<!-- 二级评论头像 -->
							<div class="comment-avatar"><img :src="childComment.autorPhoto" alt="">
							</div>
							<!-- 二级评论框 -->
							<div class="comment-box">
								<div class="comment-head">
									<!-- 二级评论作者 -->
									<h6 class="comment-name"><a href="#">{{childComment.autorName}}</a></h6>
									<!-- 二级评论时间 -->
									<span>{{childComment.messageTime|time}}</span>
									<i class="fa fa-reply"></i>
									<i class="fa fa-heart"></i>
									<div class="right"><a href="#" @click.prevent="reply(childComment)">回复</a></div>
								</div>
								<!-- 二级评论内容 -->
								<div class="comment-content">
									{{childComment.message}}
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div style="width:60%;margin:auto;">
			<div id="comment" class="editor">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				comments: [{
					"autorName": "张无忌",
					"autorPhoto": "/images/0.jpg",
					"message": "这家影院不错，改天和敏敏来看电影！",
					"messageTime": "Mon Feb 1 2019 13:34:14",
					children:[
						{
							"autorName": "赵敏",
							"autorPhoto": "/images/1.jpg",
							"message": "我请客，你掏钱！",
							"messageTime": "Mon Nov 1 2019 13:34:14"
						},
						{
							"autorName": "周芷若",
							"autorPhoto": "/images/3.jpg",
							"message": "我也要去！",
							"messageTime": "Mon March 11 2019 13:34:14"
						}
					]
				},
				{
					"autorName": "段誉",
					"autorPhoto": "/images/2.jpg",
					"message": "辣鸡影院，再也不来了！",
					"messageTime": "Mon Nov 11 2019 13:34:14",
					children:[
						{
							"autorName": "乔峰",
							"autorPhoto": "/images/4.jpg",
							"message": "+1",
							"messageTime": "Mon Nov 11 2019 17:34:14"
						},
						{
							"autorName": "虚竹",
							"autorPhoto": "/images/5.jpg",
							"message": "+1",
							"messageTime": "Mon Nov 11 2019 17:39:14"
						},
						{
							"autorName": "段誉",
							"autorPhoto": "/images/2.jpg",
							"message": "大哥，二哥QAQ",
							"messageTime": "Mon Nov 11 2019 17:34:14"
						}
					]
				}]
			};
		},
		methods: {
			reply(data){
				// if(data.children)
				var comment = $("#comment");
				layer.open({
				  type: 1,
				  title:"回复"+data.autorName,
				  skin: 'layui-layer-demo', //样式类名
				  area: ['45%', '45%'], //宽高
				  closeBtn: 0, //不显示关闭按钮
				  anim: 2,
				  shadeClose: true, //开启遮罩关闭
				  content: comment
				});
			}
		},
		filters:{
			time(data){
				var date = new Date(data);
				var year = date.getFullYear();
				var month = date.getMonth();
				var day = date.getDate();
				var hour = date.getHours();
				var min = date.getMinutes();
				var second = date.getSeconds();
				// 与当前时间间隔的分钟数
				var timeDiff = parseInt((new Date()-date)/60000);
				if(timeDiff<1){
					return "刚刚";
				}else if(timeDiff<60){
					return timeDiff+"分钟前";
				}else if(timeDiff<(60*24)){
					return parseInt(timeDiff/60)+"小时前";
				}else if(timeDiff<(60*24*30)){
					return parseInt(timeDiff/60/24)+"天前";
				}else if(timeDiff<(60*24*30*365)){
					return parseInt(timeDiff/60/24/30)+"个月前";
				}else{
					return (date.getMonth()+1)+"-"+date.getDate();
				}
				// return new Date()-date;
				// return (date.getMonth()+1)+"-"+date.getDate();
			}
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	a {
		color: #03658c;
		text-decoration: none;
	}

	ul {
		list-style-type: none;
	}

	body {
		font-family: 'Roboto', Arial, Helvetica, Sans-serif, Verdana;
		background: #dee1e3;
		/** ====================
	 * Lista de Comentarios
	 =======================*/
	}
	.right{
		float: right;
		margin-right: 2%;
	}
	.right a{
		color: greenyellow;
	}
	.right a:hover{
		color: orange;
	}
	.comments-container {
		margin: 60px auto 15px;
		width: 768px;
	}

	.comments-container h1 {
		font-size: 36px;
		color: #283035;
		font-weight: 400;
	}

	.comments-container h1 a {
		font-size: 18px;
		font-weight: 700;
	}

	.comments-list {
		margin-top: 30px;
		position: relative;
		/**
	 * Lineas / Detalles
	 -----------------------*/
	}

	.comments-list:before {
		content: '';
		width: 2px;
		height: 100%;
		background: #c7cacb;
		position: absolute;
		left: 32px;
		top: 0;
	}

	.comments-list:after {
		content: '';
		position: absolute;
		background: #c7cacb;
		bottom: 0;
		left: 27px;
		width: 7px;
		height: 7px;
		border: 3px solid #dee1e3;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
	}

	.reply-list:before,
	.reply-list:after {
		display: none;
	}

	.reply-list li:before {
		content: '';
		width: 60px;
		height: 2px;
		background: #c7cacb;
		position: absolute;
		top: 25px;
		left: -55px;
	}

	.comments-list li {
		margin-bottom: 15px;
		display: block;
		position: relative;
	}

	.comments-list li:after {
		content: '';
		display: block;
		clear: both;
		height: 0;
		width: 0;
	}

	.reply-list {
		padding-left: 88px;
		clear: both;
		margin-top: 15px;
		/**
	 * Avatar
	 ---------------------------*/
	}

	.comments-list .comment-avatar {
		width: 65px;
		height: 65px;
		position: relative;
		z-index: 99;
		float: left;
		border: 3px solid #fff;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
		-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
		overflow: hidden;
	}

	.comments-list .comment-avatar img {
		width: 100%;
		height: 100%;
	}

	.reply-list .comment-avatar {
		width: 50px;
		height: 50px;
	}

	.comment-main-level:after {
		content: '';
		width: 0;
		height: 0;
		display: block;
		clear: both;
		/**
	 * Caja del Comentario
	 ---------------------------*/
	}

	.comments-list .comment-box {
		width: 680px;
		float: right;
		position: relative;
		-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
	}

	.comments-list .comment-box:before,
	.comments-list .comment-box:after {
		content: '';
		height: 0;
		width: 0;
		position: absolute;
		display: block;
		border-width: 10px 12px 10px 0;
		border-style: solid;
		border-color: transparent #fcfcfc;
		top: 8px;
		left: -11px;
	}

	.comments-list .comment-box:before {
		border-width: 11px 13px 11px 0;
		border-color: transparent rgba(0, 0, 0, 0.05);
		left: -12px;
	}

	.reply-list .comment-box {
		width: 610px;
	}

	.comment-box .comment-head {
		background: rgba(112, 112, 112, 0.8);
		/* background: #fcfcfc; */
		padding: 10px 12px;
		border-bottom: 1px solid #e5e5e5;
		overflow: hidden;
		-webkit-border-radius: 4px 4px 0 0;
		-moz-border-radius: 4px 4px 0 0;
		border-radius: 4px 4px 0 0;
	}

	.comment-box .comment-head i {
		float: right;
		margin-left: 14px;
		position: relative;
		top: 2px;
		color: #a6a6a6;
		cursor: pointer;
		-webkit-transition: color 0.3s ease;
		-o-transition: color 0.3s ease;
		transition: color 0.3s ease;
	}

	.comment-box .comment-head i:hover {
		color: #03658c;
	}

	.comment-box .comment-name {
		color: #283035;
		font-size: 14px;
		font-weight: 700;
		float: left;
		margin-right: 10px;
	}

	.comment-box .comment-name a {
		color: yellow;
	}

	.comment-box .comment-head span {

		float: left;
		color: white;
		font-size: 13px;
		position: relative;
		top: 1px;
	}

	.comment-box .comment-content {
		background: rgba(112, 112, 112, 0.6);
		padding: 12px;
		font-size: 15px;
		color: blanchedalmond;
		-webkit-border-radius: 0 0 4px 4px;
		-moz-border-radius: 0 0 4px 4px;
		border-radius: 0 0 4px 4px;
	}


	@media only screen and (max-width: 766px) {
		.comments-container {
			width: 480px;
		}

		.comments-list .comment-box {
			width: 390px;
		}

		.reply-list .comment-box {
			width: 320px;
		}
	}
</style>
