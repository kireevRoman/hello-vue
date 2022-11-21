import {HTTP} from "@/api/http-config";

const LIMIT = 30;

export const posts = {
    state: () => ({
        isLoadingPosts: false,
        isLoadingLoadMorePosts: false,
        search: '',
        posts: [],
        totalPosts: 0,
        paramsQuery: {
            limit: LIMIT,
            skip: 0
        }
    }),

    getters: {
        getPosts(state) {
            return state.posts.filter(post => post.title.toLowerCase().includes(state.search.toLowerCase()))
        }
    },

    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setLoadingPosts(state, bool) {
            state.isLoadingPosts = bool
        },
        setLoadingLoadMorePosts(state, bool) {
            state.isLoadingLoadMorePosts = bool
        },
        setTotalPosts(state, total) {
            state.totalPosts = total
        },
        setSearch(state, search) {
            state.search = search
        },
        setParamsQuery(state, params) {
            state.paramsQuery = params
        },
    },

    actions: {
        async fetchPosts({state, commit}) {
            commit('setLoadingPosts', true)
            try {
                const response = await HTTP.get('posts', {params: state.paramsQuery});
                commit('setPosts', [...state.posts, ...response.data.posts])
                commit('setTotalPosts', response.data.total)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoadingPosts', false)
            }
        },
        async loadMorePosts({state, commit}) {
            commit('setParamsQuery', {...state.paramsQuery, skip: state.paramsQuery.skip + LIMIT})
            commit('setLoadingLoadMorePosts', true)
            try {
                const response = await HTTP.get('posts', {params: state.paramsQuery});
                commit('setPosts', [...state.posts, ...response.data.posts])
                commit('setTotalPosts', response.data.total)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoadingLoadMorePosts', false)
            }
        },
        createPost({state, commit}, newPost) {
            commit('setPosts', [newPost, ...state.posts])
        },
        removePost({state, commit}, postId) {
            const posts = state.posts.filter(post => post.id !== postId)
            commit('setPosts', posts)
        }
    },

    namespaced: true
}