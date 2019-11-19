<template>
  <div>
    <el-form ref="regForm" class="login-box" :model="form" :rules="rules" label-width="80px" >
      <el-row>
         <el-col :span="24" style="background-color:#409EFF">
           <div class="grid-content bg-purple-dark">
           <h2 class="login-title">欢迎注册</h2>
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
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" placeholder="请再次输入密码" v-model="form.checkPassword"/>
        </el-form-item>
        <div style="color:black;">
          已经有账号？<a href="#" @click.prevent="login()">去登录</a>
        </div>
        <el-form-item >
          <el-button id="reg" type="primary" @click="onSubmit('regForm')">注册</el-button>
          <el-button @click="closeReg()">取消</el-button>
        </el-form-item>
      </div>
    </el-form>

  </div>
</template>

<script>
  export default{
    props:[
      "regIndex"
    ],
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else{
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        }else{
          callback();
        }
      };
      return {
        form: {
          username: '',
          password: '',
          checkPassword: '',
          tid:1,
          tname:"万达影视"
        },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, validator: validatePass, trigger: 'blur'}
          ],
          checkPassword: [
            {required: true, validator: validatePass2, trigger: 'blur'}
          ]
        },
        
      }
    },
    methods: {
      login(){
        this.$emit('login');
      },
      closeReg(){
        // 关闭注册框
        layer.close(this.regIndex);
      },
      onSubmit(formName) {
        var form = this.form;
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          // 如果验证通过
          if (valid) {
            // 关闭注册框
            axios.get("users/save",{
              params:{
                uname:form.username,
                upwd:form.password,
                tid:form.tid
              }
            }).then((data)=>{
              this.$emit('login');
              layer.msg("注册成功！");
            }).catch((error)=>{
              layer.msg("该账号已存在！");
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