<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cart'
})
</script>

<template>
  <v-btn @click="backToCatalog" class="bg-blue-accent-4 mb-10"> Back to catalog </v-btn>
  <h1 v-if="store.cart.length === 0">Cart is Empty</h1>
  <v-row class="item-details" v-else v-for="cartItem in store.cart" :key="cartItem.id">
    <img :src="cartItem.thumbnail" alt="" />
    <h2 class="font-weight-regular">Brand:{{ cartItem.brand }}</h2>
    <p class="">Price:{{ cartItem.price }}</p>
    <v-btn @click="removeFromCart(cartItem.id)" class="bg-red-accent-2 mb-0">Remove</v-btn>
  </v-row>
</template>
<script setup lang="ts">
import router from '@/router'
import '@/components/Cart.vue'
import { productsStore } from '@/stores/products'
const store = productsStore()

const backToCatalog = () => {
  router.push({ name: 'Catalog' })
}
const removeFromCart = (id: number) => {
  store.removeFromCart(id)
}
</script>

<style scoped>
.item-details {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  & img {
    width: 20%;
  }
  & p {
    font-size: 24px;
  }
}
</style>
