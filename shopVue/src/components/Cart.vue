<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cart'
})
</script>

<template>
  <button @click="backToCatalog">Back to catalog</button>
  <div v-if="store.cart.length === 0">
    <h1>Cart is Empty</h1>
  </div>
  <div v-else>
    <div v-for="cartItem in store.cart" :key="cartItem.id">
      <div class="item-details">
        <img :src="cartItem.thumbnail" alt="" />
        <h2>Brand:{{ cartItem.brand }}</h2>
        <p>Description:{{ cartItem.description }}</p>
        <p>Price:{{ cartItem.price }}</p>
        <button @click="removeFromCart(cartItem.id)">Remove</button>
      </div>
    </div>
  </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  & img {
    width: 20%;
  }
}
</style>
