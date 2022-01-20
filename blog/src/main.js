import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import store from "./store/index";

Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
