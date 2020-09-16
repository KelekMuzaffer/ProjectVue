import ArticleApi from '../api/articles'

const FETCHING_ARTICLES = "FETCHING_ARTICLES",
    FETCHING_ARTICLES_SUCCESS = "FETCHING_ARTICLES_SUCCESS",
    FETCHING_ARTICLES_ERROR = "FETCHING_ARTICLES_ERROR";

export default {
    namespaced: true,
    state: {
        articlesApi: []
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        hasError(state) {
            return state.error !== null;
        },
        error(state) {
            return state.error;
        },
        hasArticles(state) {
            return state.articlesApi.length > 0;
        },
        articles(state) {
            return state.articlesApi;
        }
    },
    mutations: {
        [FETCHING_ARTICLES](state) {
            state.isLoading = true;
            state.error = null;
            state.articlesApi = [];
        },
        [FETCHING_ARTICLES_SUCCESS](state, articlesinfo) {
            state.isLoading = false;
            state.error = null;
            state.articlesApi = articlesinfo;
        },
        [FETCHING_ARTICLES_ERROR](state, error) {
            state.isLoading = false;
            state.error = error;
            state.articlesApi = [];
        }
    },
    actions: {
        async findAll({ commit }) {
            commit(FETCHING_ARTICLES);
            try {
                let response = await ArticleApi.findAll();
                commit(FETCHING_ARTICLES_SUCCESS, response);
                return response;
            } catch (error) {
                commit(FETCHING_ARTICLES_ERROR, error);
                return null;
            }
        }
    }
};