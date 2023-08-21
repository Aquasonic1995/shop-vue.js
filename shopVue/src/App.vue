<template>
  <header>
    <div class="cart-items" @click="router.push({ name: 'Cart' })">
      <p>Items in cart: {{ store.cart.length }}</p>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import router from '@/router'
import { productsStore } from '@/stores/products'
const store = productsStore()
</script>
<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
