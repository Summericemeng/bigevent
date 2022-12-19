<template>
  <div class="login">
    <!-- 头部图标 -->
    <img src="@/assets/images/loginlogo.png" alt="" />
    <!-- 登录表单 -->
    <div class="form">
      <h1>后台管理系统</h1>
      <router-link to="/regist">去注册</router-link>
      <el-form>
        <el-form-item label="用户名" label-width="80px">
          <el-col :span="12">
            <el-input class="input" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-col :span="12">
            <el-input class="input" placeholder="请输入密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width: 420px; height: 48px"
            @click="submitForm('numberValidateForm')"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: 'admin',
      password: 12345
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 1440px;
  height: 1023px;
  background: url(~@/assets/images/loginbg.png);
  img {
    position: absolute;
    top: 30px;
    left: 50px;
  }
  .form {
    position: absolute;
    margin: 280px 450px;
    padding: 28px 30px 30px 30px;
    width: 580px;
    height: 460px;
    background: #ffffff;
    box-shadow: 0px 0px 28px 0px rgba(21, 43, 99, 0.08);
    border-radius: 8px;
    text-align: center;
    a {
      font-weight: 400;
      color: #1e5eff;
      line-height: 24px;
      text-decoration:none;
      display: inline-block;
      margin-bottom: 60px;
    }
    a:hover{
      color: #4F81FF;
    }
    .input {
      width: 420px;
      height: 48px;
      background: #ffffff;
      border-radius: 4px;
      font-size: 16px;
      color: #a1a7c4;
    }
  }
}
</style>
