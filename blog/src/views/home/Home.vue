<template>
  <a-layout class="layout-body">
    <!--右边-->
    <a-layout-sider class="layout-body-sider" v-if="false">
      <div class="introduce">
        <div class="introduce-avatar">
          <div style="text-align: center">
            <a-avatar :size="128" icon="user"/>
          </div>
        </div>
        <div class="introduce-author">
          <div class="author-name">Code Fruit</div>
          <div class="author-evaluate">一个爱鼓捣的程序果</div>
          <div>所有文章</div>
          <div>随笔</div>
          <div class="homepage">
            <a-breadcrumb>
              <a-breadcrumb-item href="">
                <a-icon type="home"/>
                <span>主页</span>
              </a-breadcrumb-item>
              <a-breadcrumb-item href="">
                <a-icon type="user"/>
                <span>关于我</span>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
        </div>
        <div class="contact">
          <div class="author-icon">
            <a-icon type="github" theme="filled" :style="{ fontSize: '32px', color: '#000', margin: '10px'}"/>
            <a-icon type="wechat" :style="{ fontSize: '32px', color: '#fff', margin: '10px'}"/>
            <a-icon type="qq-circle" theme="filled" :style="{ fontSize: '32px', color: '#08c', margin: '10px'}"/>
          </div>
        </div>
      </div>
    </a-layout-sider>
    <a-layout>
      <!--头部-->
      <a-layout-header class="layout-header" v-if="!false">
        <span class="header-blog">Code Fruit Blog</span>
        <span>
            <a-input-search placeholder="请输入文章名称" class="header-input" @search="onSearch"/>
          </span>
      </a-layout-header>
      <a-layout-content class="layout-Content">
        <!--主体-->
        <!--首页-->
        <Content v-if="false"/>
        <!--详情页-->
        <Details v-if="false"/>
        <!--编辑页-->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Content from "../content/Content";
import Details from "../content/Details";

export default {
  name: "Home",
  components: {
    Content,
    Details,
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
  }
}
</script>

<style lang="less" scoped>
.layout-body {
  height: 100%;

  .layout-body-sider {
    border-right: 10px solid #f0f2f5;
    width: 300px !important;
    flex: 0 !important;
    min-width: 300px !important;
    max-width: 300px !important;
    background-color: #7CA384;
    //background-color: #eaeaea;
    position: relative;
    color: #eaeaea;
    //color: #7CA384;
    .introduce {
      width: 300px;
      height: 450px;
      margin: auto;
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;

      .introduce-avatar {
        width: 300px;
        height: 150px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .introduce-author {
        width: 300px;
        height: 250px;
        position: absolute;
        top: 150px;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;

        .author-name {
          font-family: 新宋体;
          font-size: 24px;
          font-weight: bolder;
        }

        .author-evaluate {
          margin: 20px 0 50px;
        }

        .homepage {
          margin: 30px 0 0;
        }
      }

      .contact {
        width: 300px;
        height: 80px;
        position: absolute;
        top: 380px;
        left: 0;
        right: 0;
        bottom: 0;

        .author-icon {
          text-align: center;
        }
      }
    }
  }

  .layout-header {
    border-bottom: 10px solid #f0f2f5;
    border-right: 10px solid #f0f2f5;
    height: 70px;
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
      width: 300px;
      float: right;
      top: 13px;
    }
  }

  .layout-Content {
    //background-color: #7CA384;
    background-color: #f6f4f0;
    border-bottom: 10px solid #f0f2f5;
    border-right: 10px solid #f0f2f5;
  }
}
</style>
<style lang="less">

</style>
