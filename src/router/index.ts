import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';


import HomePage from '../views/HomePage.vue';
import WebProject from '../views/WebProject.vue';
import DesainProject from '../views/DesainProject.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/web-projects',
    name: 'WebProjects',
    component: WebProject
  },
  {
    path: '/design-projects',
    name: 'DesignProjects',
    component: DesainProject
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;