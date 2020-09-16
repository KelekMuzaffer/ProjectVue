import Vue from "vue";
import Vuex from "vuex";
import ArticleModule from "./articles";

// on initialise le store ici (q'un seul store est apeller car pour l'instant il en existe q'un seul) et il est apeller dans src/main.js

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        articles: ArticleModule
    }
});