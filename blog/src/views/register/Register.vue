<template>
  <div class="land">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
    >
      <div class="register-input">
        <a-form-item>
          <span>用户名: </span>
          <a-input
            v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入您的用户名' }] },
        ]"
            placeholder="请输入"
            allowClear
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <span>密&nbsp;&nbsp;&nbsp;&nbsp;码: </span>
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入您的密码' }] },
        ]"
            type="password"
            placeholder="请输入"
            allowClear
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <span>作&nbsp;&nbsp;&nbsp;&nbsp;者: </span>
          <a-input
            v-decorator="[
          'author',
          { rules: [{ required: true, message: '请输入作者' }] },
        ]"
            placeholder="请输入"
            allowClear
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <span>微&nbsp;&nbsp;&nbsp;&nbsp;信: </span>
          <a-input
            v-decorator="[
          'weChat',
          { rules: [{ required: true, message: '请输入您的微信' }] },
        ]"
            placeholder="请输入"
            allowClear
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <span>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q: </span>
          <a-input
            v-decorator="[
          'QQ',
          { rules: [{ required: true, message: '请输入您的QQ' }] },
        ]"
            placeholder="请输入"
            allowClear
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <span>Git&nbsp;Hub: </span>
          <a-input
            v-decorator="[
          'GitHub',
          { rules: [{ required: true, message: '请输入您的GitHub' }] },
        ]"
            placeholder="请输入"
            allowClear
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="lang-button" @submit="handleSubmit">
            下一步
          </a-button>
        </a-form-item>
      </div>
    </a-form>
  </div>

</template>
<script>
export default {
  name: "Register",
  data() {
    return {}
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});

  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
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
  box-shadow: 0px 0px 20px 2px #7CA384;
  border-radius: 20px;
  width: 400px;
  height: 500px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px 30px;
.register-input {
  margin: 15px 5px;
  span {
    font-size: 16px;
  }
  .ant-input-affix-wrapper {
    margin: 0px 5px;
    width: 250px;
  }
}
  .lang-button {
    width: 200px;
    height: 40px;
    margin-left: 65px;
    background-color: #7CA384;
  }
}
</style>
<style lang="less">
.ant-form-explain {
  margin-left: 68px;
}
</style>
