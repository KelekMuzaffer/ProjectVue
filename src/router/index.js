import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageArticles from "../views/PageArticles";
import UsersView from "@/views/UsersView";

// Instancie vueRouter et on definit les differentes routes à utiliser avec le component en parametre sa represente la views a utiliser

Vue.use(VueRouter)

const router = new VueRouter(   {
    mode: 'history',
    routes: [
      {path: '/home', name: 'Home', component: Home},
      {path: '/articles', name: 'Articles', component: PageArticles},
      {path: '/users', name: 'Users', component: UsersView},
      {path: '*', redirect: '/home'},
    ]
});

export default router
