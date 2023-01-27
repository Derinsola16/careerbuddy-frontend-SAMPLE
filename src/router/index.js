import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/landingLayout',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "layout" */ '../layouts/Landing.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "jobseekers" */ '../views/landing/Home.vue'),
      },
      {
        path: '/jobseekers',
        name: 'Jobseekers',
        component: () => import(/* webpackChunkName: "jobseekers" */ '../views/landing/Jobseekers.vue'),
      },
      {
        path: '/companies',
        name: 'Companies',
        component: () => import(/* webpackChunkName: "companies" */ '../views/landing/Companies.vue'),
      },
      {
        path: '/careers',
        name: 'Careers',
        component: () => import(/* webpackChunkName: "careers" */ '../views/landing/Careers.vue'),
      },
      {
        path: '/jobdetails',
        name: 'Jobdetails',
        component: () => import(/* webpackChunkName: "careers" */ '../views/landing/Jobdetails.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
