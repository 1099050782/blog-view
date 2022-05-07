<template>
  <a-layout class="layout-body">
    <!--头部-->
    <a-layout-header class="layout-header">
      <div>
        <span @click="onRevert">
        <a-icon type="left" style="color: #ffffff; font-size: 20px"/>
        <span style="font-size: 20px; color: #ffffff;">返回</span>
      </span>
        <span>
        <a-input-search placeholder="请输入文章名称" size="large" class="header-input" @search="onSearch"/>
      </span>
        <a-button type="primary" shape="round" style="background-color: #ffffff; color: #7CA384">发布文章</a-button>
      </div>
      <div>
        <span style="font-size: 15px; color: #ffffff; margin: 0 25px 0 0;">文章描述 :</span>
        <a-textarea style="width: 80%; height: 40px" placeholder="请输入文章描述..." :rows="2"/>
        <a-button type="primary" shape="round" style="background-color: #ffffff; color: #7CA384; margin: 0 0 0 30px;">清空描述</a-button>
      </div>
    </a-layout-header>
    <!--右边-->
    <a-layout>
      <!--      <a-layout-sider class="sider-edit">-->
      <!--        -->
      <!--      </a-layout-sider>-->
      <!--左边-->
      <a-layout-content class="content-edit">
        <mavon-editor v-model="value" style="height: 100%"/>
      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>
export default {
  name: "Edit",
  methods: {
    onSearch(value) {
      console.log(value);
    },
    onRevert() {
      this.$router.push({path: '../home'})
    }
  }
}

</script>

<style lang="less" scoped>
.layout-body {
  height: 100%;

  .layout-header {
    border-bottom: 10px solid #f0f2f5;
    //border-right: 10px solid #f0f2f5;
    height: 120px;
    //background-color: #f6f4f0;
    background-color: #7CA384;

    .header-blog {
      font-size: 30px;
      font-family: "Yu Gothic";
      font-weight: bolder;
      //color: #7CA384;
      color: #ffffff;
    }

    .header-input {
      width: 80%;
      margin: 0 30px;
    }
  }
}

//滑动条
.sider-edit {
  width: 50% !important;
  flex: 0 !important;
  min-width: 50% !important;
  max-width: 50% !important;
  background-color: #f5f5f5;
  overflow-y: scroll !important;
}

.content-edit {
  overflow-y: scroll !important;
  margin: 0 0 0 10px;
  background-color: #ffffff;
}

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #F5F5F5;
}

/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #F5F5F5;
}

/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  background-color: #bbbbbb;
}
.ant-layout-header {
  line-height: 50px;
}
</style>
