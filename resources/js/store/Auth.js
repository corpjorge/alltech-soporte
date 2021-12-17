import axios from "axios";

export default {
    namespaced: true,
    state: {
        user: {},
        auth: false,
        type: localStorage.getItem('type') || null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.auth = Boolean(user);
        },
    },
    actions: {
        getUser({commit } ) {
            axios.get('/me').then(res =>{
                commit('SET_USER', res.data);
                localStorage.setItem('type', res.data.type);
            }).catch(()=>{
                // console.clear()
                localStorage.clear()
                commit('SET_USER', null);
            })
        }
    },
    getters: {
         loggedIn(state) {
           return state.user !== null
        },
    }
}
