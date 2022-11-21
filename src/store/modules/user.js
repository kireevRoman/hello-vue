import {HTTP} from "@/api/http-config";

export const user = {
    state: () => ({
        isLoading: false,
        user: null,
        errors: null
    }),

    getters: {},

    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setLoading(state, bool) {
            state.isLoading = bool
        },
        setErrors(state, errors) {
            state.errors = errors
        },
    },

    actions: {
        async fetchUser({state, commit}) {
            commit('setLoading', true)
            try {
                const response = await HTTP.get('users/99');
                commit('setUser', response.data)
            } catch (e) {
                commit('setErrors', e)
            } finally {
                commit('setLoading', false)
            }
        },
    },

    namespaced: true
}