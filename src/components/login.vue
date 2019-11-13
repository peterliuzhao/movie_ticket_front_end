<template>
  <div>
    <el-form ref="loginForm" class="login-box" :model="form" :rules="rules" label-width="80px" >
      <el-row>
         <el-col :span="24" style="background-color:#409EFF">
           <div class="grid-content bg-purple-dark">
           <h2 class="login-title">欢迎登录</h2>
           </div>
          </el-col>
      </el-row>
      <div style="width:80%;margin:2% 5%;text-align:center;">
        <el-form-item label="账号" prop="username" >
          <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
        </el-form-item>
        <div style="color:black;">
          还没有账号？<a href="#" @click.prevent="reg()">注册一个</a>
        </div>
        <el-form-item >
          <el-button id="login" type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
          <el-button @click="closeLogin()">取消</el-button>
        </el-form-item>
      </div>
    </el-form>

  </div>
</template>

<script>
  export default{
    // 父组件传过来的属性
    props:[
      "loginIndex"
    ],
    data() {
      return {
        form: {
          username: '',
          password: '',
          tid:1
        },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      reg(){
        this.$emit('reg');
      },
      closeLogin(){
        // 关闭登录框
        layer.close(this.loginIndex);
      },
      onSubmit(formName) {
        var app = this;
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          // 如果验证通过
          if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            // this.$router.push("/home");
            axios.get("users/login",{
              params:{
                uname:app.form.username,
                upwd:app.form.password,
                tid:app.form.tid
              }
            }).then((response)=>{
              if(response.data.status==200){
                 // 关闭登录框
                layer.close(app.loginIndex);
                layer.msg("登录成功！"+response.data.username+",欢迎您！");
                app.$emit('loginMsg',response.data.username)
                // app.loginUname = response.data.username;
              }else{
                layer.close(app.loginIndex);
                 layer.msg("登录失败，账号或密码错误！");
              }
              
            }).catch((error)=>{
               layer.close(app.loginIndex);
              layer.msg("出错了");
            });
          } else {
            layer.msg("账号和密码不能为空！");
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-box a{
    color: blue;
  }

  .login-title {
    text-align: center;
    margin: 3% auto 3% auto;
    color: #303133;
  }
</style>