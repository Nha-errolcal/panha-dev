import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../page/Home.vue'),
        meta: {
            layout: 'MasterLayout'
        }
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        // @ts-ignore: Allow importing the Vue SFC without a declaration file
        component: () => import('../../app/page/NotFound.vue'),
        meta: {
            layout: 'EmptyLayout'
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;