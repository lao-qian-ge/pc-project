import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home/Index.vue'),
    },

    {
        path: '/zice',
        name: 'zice',
        component: () => import('@/pages/zice/Index.vue'),
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('@/pages/news/Index.vue'),
    },
    {
        path: '/infolist/:id',
        name: 'infolist',
        component: () => import('@/pages/infolist/Index.vue'),
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/pages/detail/Index.vue'),
    },
    {
        path: '/jifen',
        name: 'jifen',
        component: () => import('@/pages/jifen/Index.vue'),
    },
    {
        path: '/pingce',
        name: 'pingce',
        component: () => import('@/pages/pingce/Index.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router

