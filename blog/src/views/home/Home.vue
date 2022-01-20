<template>
    <a-layout class="layout-body">
      <a-layout-sider class="layout-body-sider">Sider</a-layout-sider>
      <a-layout>
        <a-layout-header class="layout-header">Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="less" scoped>
.layout-body {
  height: 1000px;
  background-color: #5f8a80;
  .layout-body-sider {
    width: 600px;
    background-color: #9a6e3a;
  }
  .layout-header{
    height: 100px;
  }
}
</style>
<style lang="less">

</style>
