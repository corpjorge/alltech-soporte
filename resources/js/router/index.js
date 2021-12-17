import { createRouter, createWebHashHistory } from 'vue-router'
import workplace from "./workplace";
import user from "./user"
import Device from "./device"
import Publications from "./Publications"
import store from '../store';

const routes = [
    {
        path: '/',
        name: 'Home',
        // redirect: { name: Publications},
        component: () => import('../views/Home.vue'),
        meta: { requiresAuth: true }
    },
    ...workplace,
    ...user,
    ...Device,
    ...Publications,
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

router.beforeEach((to) => {

    store.dispatch('Auth/getUser')
    const type = localStorage.getItem("type");

    if (to.meta.type < type ) {
        return {
            name: 'Home'
        }
    }
})

export default router
