import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import store from "./store/index";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
