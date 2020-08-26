<template>
  <div class="login">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login_form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" clearable show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getLogin} from '../util/axios'
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //调取登录接口
          getLogin(this.loginForm)
          .then(res=>{
            if(res.code===200){
               //跳转首页
               console.log(res,'登录返回的信息')
              //把登录信息存储本地存储中
              sessionStorage.setItem('userInfo',JSON.stringify(res.list))
             this.$router.push('/index')
            }else{
               this.$message.error(res.msg);
            }
          })

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style  lang="stylus" scoped>
@import '../stylus/index.styl';

.login {
  width: 100vw;
  height: 100vh;
  background: $oneBgColor;

  .login_form {
    position: absolute;
    background: $twoBgColor;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -150px;
    padding: 40px 10px;
    border-radius: 20px;
    width: 430px;
    height: 200px;

    .el-input {
      width: 80%;
    }
  }
}
</style>
