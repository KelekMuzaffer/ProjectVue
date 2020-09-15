import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageArticles from "../views/PageArticles";

Vue.use(VueRouter)

const router = new VueRouter(   {
    mode: 'history',
    routes: [
      {path: '/home', name: 'Home', component: Home},
      {path: '/articles', name: 'Articles', component: PageArticles},
      {path: '*', redirect: '/home'},
    ]
});

export default router
