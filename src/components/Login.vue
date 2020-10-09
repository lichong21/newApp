<template>
  <div class="login-container">
    <h1>我是登录页面</h1>
    <div class="login-box">
      <img src="../assets/logo.png" alt="" class="login-logo" />
      <el-form
        :model="loginForm"
        label-width="50px"
        class="login-form"
        :rules="rules"
        ref="loginRef"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入账号"
            prefix-icon="el-icon-user-solid"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-s-goods"
            clearable>
          </el-input>
        </el-form-item>
        <!-- <router-link to="helloworld"><el-button type="primary" @click="loginSubmit">登录</el-button> </router-link> -->
        <el-button type="primary" @click="loginSubmit">登录</el-button> 
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3到10字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在6到12哥字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    loginSubmit() {
      let _this = this;
      this.$refs.loginRef.validate(function (valid) {
        if (valid) {
          // alert("验证通过,可以提交");
          alert("通过验证");
           _this.$router.push({ path:'/home'  })
        } else {
          alert("报错,为通过验证");
        }
      });
    },
    resetForm() {
      this.loginForm.username = ''
      this.loginForm.password = ''
    },
  },
};
</script>

<style scoped >
.login-container {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: blanchedalmond;
}
.login-box {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
  border: 1px solid burlywood;
  background: whitesmoke;
}
.login-logo {
  width: 120px;
  width: 120px;
  position: relative;
  transform: translate(0, -50%);
  border: 1px solid bisque;
  border-radius: 50%;
  padding: 10px;
  box-sizing: border-box;
  background: blanchedalmond;
}
.login-form {
  width: 350px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
}
</style>