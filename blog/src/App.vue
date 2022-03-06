<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from "./views/login/Login";
export default {
  name: 'App',
  components: {
    Login,
  }
}
</script>

<style>
@import "assets/css/base.css";

#app {
  height: 100%;
  overflow: auto;
}
</style>
