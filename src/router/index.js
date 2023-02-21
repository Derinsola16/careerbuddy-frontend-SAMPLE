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
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '../views/landing/MainJobseek.vue'),
      },
      {
        path: '/company',
        name: 'Company',
        component: () => import(/* webpackChunkName:  "company" */ '../views/landing/Company.vue'),
      },
      {
        path: '/jobdetails',
        name: 'Jobdetails',
        component: () => import(/* webpackChunkName: "careers" */ '../views/landing/Jobdetails.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
