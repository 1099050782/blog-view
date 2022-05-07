<template>
  <a-layout class="layout-body">
    <!--右边-->
    <a-layout-sider class="layout-body-sider" v-if="!false">
      <div class="introduce">
        <div class="introduce-avatar">
          <div style="text-align: center">
            <a-avatar :size="128" src="https://img1.baidu.com/it/u=3161656755,1396392948&fm=253&fmt=auto&app=138&f=JPEG?w=863&h=498"/>
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
      <a-layout-header class="layout-header">
        <span style="color: #7CA384; font-size: 30px; font-weight: bolder;">
          Code Fruit Blog
        </span>
        <a-icon type="like" :style="{ float: 'right', fontSize: '32px', color: '#7CA384', margin: '10px 30px 0 0'}" />

      </a-layout-header>
      <a-layout-content class="layout-Content">
        <!--详情页-->
          <div>
            <mavon-editor
              class="details-show"
              :value="webDataString"
              :subfield="false"
              :defaultOpen="'preview'"
              :toolbarsFlag="false"
              :editable="false"
              :ishljs="true"
            />
          </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "Details",
  data() {
    return{
      webDataString: '### **Spring整合Mybatis**-Maven\n' +
        '\n' +
        '------\n' +
        '\n' +
        '### 一、导入依赖以及一些配置\n' +
        '\n' +
        '* 注意Spring整合Mybatis需要引入Mybatis-Spring的依赖\n' +
        '\n' +
        '```xml\n' +
        '<!-- 统一JDK版本 -->\n' +
        '<properties>\n' +
        '  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n' +
        '  <maven.compiler.source>11</maven.compiler.source>\n' +
        '  <maven.compiler.target>11</maven.compiler.target>\n' +
        '</properties>\n' +
        '\n' +
        '<dependencies>\n' +
        '  <!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->\n' +
        '  <!-- spring MVC-->\n' +
        '  <dependency>\n' +
        '    <groupId>org.springframework</groupId>\n' +
        '    <artifactId>spring-webmvc</artifactId>\n' +
        '    <version>5.3.7</version>\n' +
        '  </dependency>\n' +
        '  <!--    junit 单元测试-->\n' +
        '  <dependency>\n' +
        '    <groupId>org.junit.jupiter</groupId>\n' +
        '    <artifactId>junit-jupiter-api</artifactId>\n' +
        '    <version>5.7.0</version>\n' +
        '    <scope>test</scope>\n' +
        '  </dependency>\n' +
        '\n'

    }
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
    background-color: #f6f4f0;
  }

  .layout-Content {
    //background-color: #7CA384;
    //background-color: #f6f4f0;
    border-bottom: 10px solid #f0f2f5;
    border-right: 10px solid #f0f2f5;
    overflow-y: scroll !important;
  }
}
//.details {
//  padding: 0 20px;
//  background-color: #f6f4f0;
//}
.details-show {
  height: 100% !important;
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
</style>
