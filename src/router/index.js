import Vue from 'vue'
import VueRouter from 'vue-router'
import Friends from "../components/Friends";
import News from "../components/News";
import Messages from "../components/Messages";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/friends"
    },
    {
        path: '/news',
        name: 'news',
        component: News
    },
    {
        path: '/friends',
        name: 'friends',
        component: Friends
    },
    {
        path: '/messages',
        name: 'messages',
        component: Messages
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
