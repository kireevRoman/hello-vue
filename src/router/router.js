import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import MainPage from "@/pages/MainPage";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/posts',
        name: 'posts',
        component: PostPage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;