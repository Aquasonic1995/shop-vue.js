<template>
  <header>
    <v-row class="cart-items justify-end mt-5 mr-10">
      <v-btn
        v-if="router.currentRoute.value.name !== 'Cart'"
        @click="router.push({ name: 'Cart' })"
        class="ml-5 mr-5 bg-blue-accent-4"
      >
        Go to Cart
      </v-btn>
      <p>Items in cart: {{ store.cart.length }}</p>
    </v-row>
  </header>
  <main>
    <TextInput placeholder="email" hint="hint" label="Enter your email" v-model="parentModel" />
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import router from '@/router'
import { productsStore } from '@/stores/products'
import { ref } from 'vue'
const store = productsStore()
const parentModel = ref('testValue')
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
