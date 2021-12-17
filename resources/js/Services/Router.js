import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./Home.vue'),
    },

    {
        path: '/find',
        name: 'Service-find',
        component: () => import('./ServiceFind')
    },
    {
        path: '/show/:id',
        name: 'Service-show',
        component: () => import('./ServiceShow')
    },
    {
        path: '/user',
        name: 'Service-user',
        component: () => import('./Users')
    },

]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
