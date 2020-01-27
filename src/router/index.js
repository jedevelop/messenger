import Vue from 'vue'
import VueRouter from 'vue-router'
import Friends from "../components/Friends";
import News from "../components/News";
import Messages from "../components/Messages";
import Login from "../components/Login";
import Register from "../components/Messages";
import Users from "../components/Users";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/login"
    },
    {
        path: '/news',
        name: 'news',
        component: News
    },
    {
        path: '/users',
        name: 'users',
        component: Users
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
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
