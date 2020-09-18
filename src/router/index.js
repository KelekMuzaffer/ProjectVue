import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageArticles from "../views/PageArticles";
import UsersView from "@/views/UsersView";
import AllUsers from "@/components/AllUsers";
import CreateUser from "@/components/CreateUser";
import Login from "@/components/Login";

// Instancie vueRouter et on definit les differentes routes à utiliser avec le component en parametre sa represente la views a utiliser

Vue.use(VueRouter)

const router = new VueRouter(   {
    mode: 'history',
    routes: [
      {path: '/home', name: 'Home', component: Home},
      {path: '/articles', name: 'Articles', component: PageArticles},
      {
          path: '/users',
          name: 'Users',
          component: UsersView,
          children: [
              {
                  path: 'AllUsers',
                  name: 'UsersView.AllUsers',
                  component: AllUsers

              }, {
                  path: 'CreateUser',
                  name: 'UsersView.CreateUser',
                  component: CreateUser

              }, {
                  path: 'AllUsers',
                  name: 'UsersView.Login',
                  component: Login

              }
            ]
      },
      {path: '*', redirect: '/home'},
    ]
});

export default router
