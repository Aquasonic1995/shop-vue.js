import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '@/components/Catalog.vue'
import ProductItem from "@/components/ProductItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },
    { path: '/product/:id', name: 'ProductView', component: ProductItem }
  ]
})

export default router
