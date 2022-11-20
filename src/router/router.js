import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import MainPage from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";

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
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;