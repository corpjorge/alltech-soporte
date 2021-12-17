export default [
    {
        path: '/workplace/',
        name: 'Workplace',
        component: () => import('../views/Workplace/Workplace'),
        meta: { requiresAuth: true, type: 2 },
    },
    {
        path: '/workplace/:id',
        name: 'Entity',
        component: () => import('../views/Workplace/Entity'),
        meta: { requiresAuth: true, type: 2 },
        children: [
            {
                path: '/workplace/:id/users',
                name: 'Users',
                component: () => import('../views/Workplace/Users'),
                meta: { requiresAuth: true, type: 2 },
            },
            {
                path: '/workplace/:id/devices',
                name: 'Devices',
                component: () => import('../views/Workplace/Devices'),
                meta: { requiresAuth: true, type: 2 },
            },
            {
                path: '/workplace/:id/products',
                name: 'Products',
                component: () => import('../views/Workplace/Products'),
                meta: { requiresAuth: true, type: 2 },
            },
            {
                path: '/workplace/:id/create/device',
                name: 'Add-Device',
                component: () => import('../views/Workplace/Add/Device'),
                meta: { requiresAuth: true, type: 2 },
            },
        ]
    },
]
