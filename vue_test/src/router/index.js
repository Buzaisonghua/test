import Router from 'vue-router'
import Vue from 'vue'
import Home from '@/components/home'

Vue.use(Router)
const constantRoutes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/list1',
        component: () => import('@/components/list/list1'),
        name: 'List1'
    },
    {
        path: '/list2',
        component: () => import('@/components/list/list2'),
        name: 'List2'
    },
    {
        path: '/list3',
        component: () => import('@/components/list/list3'),
        name: 'List3'
    }
]

const router = new Router({
    routes: constantRoutes
})

export default router