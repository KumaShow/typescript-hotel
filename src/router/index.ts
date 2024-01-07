import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginIndex.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupIndex.vue'),
    },
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeIndex.vue'),
        },
        {
          path: 'rooms',
          name: 'rooms',
          component: () => import('@/views/RoomsIndex.vue'),
        },
        // {
        //   path: '',
        //   name: '',
        //   component: () => import('@/views/Index.vue'),
        // },
      ],
    },
  ],
});

export default router;
