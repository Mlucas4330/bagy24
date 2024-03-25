import { createRouter, createWebHistory } from 'vue-router'
import SellersView from '../views/SellersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sellers',
      component: SellersView
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('../views/SalesView.vue')
    },
    {
      path: '/sellers/:id/sales/create',
      name: 'sales_create',
      component: () => import('../views/SalesCreate.vue')
    },
    {
      path: '/sellers/create',
      name: 'sellers_create',
      component: () => import('../views/SellersCreateView.vue')
    },
    {
      path: '/sellers/:id/update',
      name: 'sellers_update',
      component: () => import('../views/SellersUpdateView.vue')
    },
    {
      path: '/sellers/:id/sales',
      name: 'sellers_sales',
      component: () => import('../views/SellersSalesView.vue')
    }
  ]
})

export default router
