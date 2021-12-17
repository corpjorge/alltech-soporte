
export default [
    {
        path: '/device/:id',
        name: 'Device',
        component: () => import('../views/User/user'),
        meta: { requiresAuth: true, type: 2 },
        children: [
            {
                path: '/device/:id/users',
                name: 'Devices-users',
                component: () => import('../views/User/Devices'),
                meta: { requiresAuth: true, type: 2 },
            },
            {
                path: '/device/:id/services',
                name: 'Device-Services',
                component: () => import('../views/User/Services'),
                meta: { requiresAuth: true, type: 2 },
            },
        ]
    },
]
