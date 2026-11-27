import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import CVView from '../views/CVView .vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portfolio',
      component: PortfolioView,
      name: 'portfolio'
    },
    {
      path: '/cv',
      name: 'cv',
      component: CVView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ],
})
