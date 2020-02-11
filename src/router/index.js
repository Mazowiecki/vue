import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bookItemDetails from '../components/bookItemDetails.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    component: Home,
    redirect: '/'
  },
  {
    name: "item",
    path: "/item/:slug?",
    props: true,
    component: bookItemDetails
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
