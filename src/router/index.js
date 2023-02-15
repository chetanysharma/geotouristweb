import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "DescriptionPage",
    component: () => import(/* webpackChunkName: "Home" */ '../components/pages/DescriptionPage.vue')
  },
//   {
//     path: "/about",
//     name: "About",
//     component: () => import(/* webpackChunkName: "About" */ '../components/pages/About.vue')
//   },
//   {
//     path: "/users",
//     name: "Users",
//     component: () => import(/* webpackChunkName: "Users" */ '../components/pages/Users.vue')
//   },
//   {
//     path: "/contactus",
//     name: "ContactUs",
//     component: () => import(/* webpackChunkName: "ContactUs" */ '../components/pages/ContactUs.vue')
//   },
//   {
//     path: '/:catchAll(.*)',
//     name: 'pageNotFound',
//     component: () => import(/* webpackChunkName: "pageNotFound" */ '../components/pages/Error.vue')
//   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
