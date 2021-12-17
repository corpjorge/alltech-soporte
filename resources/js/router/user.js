
export default [
    {
        path: '/user/:id',
        name: 'User',
        component: () => import('../views/User/user'),
        meta: { requiresAuth: true, type: 2 },
        children: [
            {
                path: '/user/:id/devices',
                name: 'User-Devices',
                component: () => import('../views/User/Devices'),
                meta: { requiresAuth: true, type: 2 },
            },
            {
                path: '/user/:id/services',
                name: 'User-Services',
                component: () => import('../views/User/Services'),
                meta: { requiresAuth: true, type: 2 },
            },
        ]
    },
]
