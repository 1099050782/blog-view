<template>
  <div class="land">
    <div class="land-img">
      <img src="../../assets/img/apple-img.jpg">
      <!--      <i class="iconfont">&#xe621;</i>-->
    </div>
    <div class="lang-action">
      <p>登陆</p>
      <div class="lang-input">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
        >
          <div style="margin: 10px 0px">
            <a-form-item>
            <span style="font-size: 18px">用户名称 : </span>
            <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入您的用户名' }] },
        ]"
              placeholder="请输入"
              style="width: 250px;"
              allowClear
              v-model="loginForm.username"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
            </a-input>
            </a-form-item>
          </div>
          <div style="margin: 10px 0px">
            <a-form-item>
            <span style="font-size: 18px">用户密码 : </span>
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入您的密码' }] },
        ]"
              type="password"
              placeholder="请输入"
              style="width: 250px"
              allowClear
              v-model="loginForm.password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
            </a-input>
            </a-form-item>
          </div>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="lang-button" @click="handleSubmit">
              登陆
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
import {getLogin} from "../../api/login";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
    console.log(localStorage.getItem('Authentication'))
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let userCo = this.loginForm;
          getLogin({userCo}).then(res => {
            if(res.code === 200) {
              this.$message.success("登陆成功")
              this.$store.commit('GET_USER')
              localStorage.setItem("Authentication",res.data.Authentication);
              this.$router.push('/home')
            }else {
              this.$message.error(res.msg)
            }
          })
        }
      });
    },
  },
}
</script>

<style lang="less" scoped>
.land {
  //background-color: #5f8a80;
  border: 1px solid white;
  box-shadow: 0px 0px  20px 2px #7CA384;
  border-radius: 20px;
  width: 800px;
  height: 400px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .land-img {
    img{
      width: 390px;
      height: 400px;
      float: left;
      border-top-left-radius: 20px;
      border-end-start-radius: 20px;

    }
  }
  .lang-action {
    width: 390px;
    height: 400px;
    //background-color: darkgray;
    float: right;

    p {
      text-align: left;
      margin: 0px;
      padding-top: 50px;
      font-size: 30px;
      height: 100px;
    }

    .lang-input {
      width: 390px;
      height: 300px;
      margin: auto;
      padding-top: 30px;

      .lang-button {
        width: 200px;
        height: 40px;
        margin-left: 85px;
        background-color: #7CA384;
      }
    }
  }
}
</style>
<style lang="less">
.ant-form-explain {
  margin-left: 83px;
}
</style>
