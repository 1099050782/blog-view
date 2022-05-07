import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import Home from "../views/home/Home"
import Details from "../views/content/Details";
import Edit from "../views/content/Edit";
import NewEdit from "../views/content/NewEdit";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
    },
    {
      path: '/newedit',
      name: 'newedit',
      component: NewEdit,
    }
  ],
  mode: 'history'
});
//导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authentication');
    console.log(token)
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router;
