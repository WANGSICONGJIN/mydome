<template>
  <div>
    <h1>登录页面</h1>
    <el-form :model="from" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model="from.name" class="input"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="from.pass" class="input"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: {
        name: "",
        pass: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12个字符", trigger: "blur" },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.from.name == "admin" && this.from.pass == "123") {
            this.$message("登陆成功");
            this.$router.push("/index");
          }
        } else {
          if (this.from.name == "" || this.from.pass == "") {
            alert("请输入账号或者密码");
          }
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="" scoped>
h1 {
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-bottom: 0.2rem;
}
.el-form {
  width:8rem;
  height: 4rem;
  margin: 0 auto;
}
.input{
  width: 4rem !important; 
  height: 0.6rem !important; 
}
</style>
