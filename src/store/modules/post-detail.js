import {HTTP} from "@/api/http-config";

export const postsDetail = {
    state: () => ({
        isLoadingPost: false,
        post: null,
        errors: null
    }),

    getters: {},

    mutations: {
        setPost(state, post) {
            state.post = post
        },
        setLoadingPost(state, bool) {
            state.isLoadingPost = bool
        },
        setErrors(state, errors) {
            state.errors = errors
        },
    },

    actions: {
        async fetchPost({state, commit}, postId) {
            commit('setLoadingPost', true)
            try {
                const response = await HTTP.get(`posts/${postId}`);
                commit('setPost', response.data)
            } catch (e) {
                commit('setErrors', e)
            } finally {
                commit('setLoadingPost', false)
            }
        },
    },

    namespaced: true
}