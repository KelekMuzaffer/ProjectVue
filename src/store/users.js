import UsersApi from '../api/users'

const FETCHING_USERS_SUCCESS = "FETCHING_USERS_SUCCESS";


export default {
    namespaced: true,
    state: {
        usersApi: []
    },
    getters: {
        users(state) {
            return state.usersApi
        }
    },
    mutations: {
        [FETCHING_USERS_SUCCESS](state, findAllUsers)
        {
            state.usersApi = findAllUsers;
        }
    },
    actions: {
      async findAllUsers({ commit }) {
            let response = await UsersApi.findAllUsers();
            commit(FETCHING_USERS_SUCCESS, response)
            return response
        }
        // ,
        // async findAll({ commit }) {
        //     let response = await UsersApi.findAllUsers();
        //     commit(ALL_USERS, response);
        //     return response
        // }

    }
}