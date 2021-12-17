export default [
    {
        path: '/publications',
        name: 'Publications',
        component: () => import('../views/Publications/Publications'),
        meta: { requiresAuth: true, type: 4 }
    },
    {
        path: '/publications/:id',
        name: 'Publication',
        component: () => import('../views/Publications/Publication'),
        meta: { requiresAuth: true, type: 4 },
    },
]
