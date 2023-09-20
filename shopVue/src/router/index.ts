import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '@/components/Catalog.vue'
import ProductItem from '@/components/ProductItem.vue'
import Cart from '@/components/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/shop-vue.js',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductItem
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})

export default router
