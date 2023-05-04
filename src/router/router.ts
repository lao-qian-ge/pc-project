import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home/Index.vue'),
    },
    {
        path: '/luohu',
        name: 'luohu',
        component: () => import('@/pages/luohu/Index.vue'),
    },
    {
        path: '/zice',
        name: 'zice',
        component: () => import('@/pages/zice/Index.vue'),
    },
    {
        path: '/juzhuanhu',
        name: 'juzhuanhu',
        component: () => import('@/pages/juzhuanhu/Index.vue'),
    },
    {
        path: '/liuxuesheng',
        name: 'liuxuesheng',
        component: () => import('@/pages/liuxuesheng/Index.vue'),
    },
    {
        path: '/rencai',
        name: 'rencai',
        component: () => import('@/pages/rencai/Index.vue'),
    },
    {
        path: '/yingjiesheng',
        name: 'yingjiesheng',
        component: () => import('@/pages/yingjiesheng/Index.vue'),
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('@/pages/news/Index.vue'),
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
    history: createWebHistory(),
    routes,
})

export default router

