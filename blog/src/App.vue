<template>
  <router-view/>
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
</style>
