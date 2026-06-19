import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Define your routes with the RouteRecordRaw type
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../page/Home.vue'),
        meta: {
            layout: 'MasterLayout'
        }
    },
    // {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: () => import('../views/DashboardView.vue'),
    //     meta: {
    //         layout: 'MasterLayout'
    //     }
    // },
    // {
    //     // Catch-all route for 404 Not Found pages
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: () => import('../views/NotFoundView.vue'),
    //     meta: {
    //         layout: 'ErrorLayout'
    //     }
    // }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;