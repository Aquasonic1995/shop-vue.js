<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductItem'
})
</script>
<template>
  <div class="product">
    <button @click="router.push({ name: 'Catalog' })">Back to catalog</button>
    <div class="product-image">
      <img :src="product.thumbnail" alt="" />
    </div>
    <div class="product-details">
      <p>Brand:{{ product.brand }}</p>
      <p>Description:{{ product.description }}</p>
      <p>Price:{{ product.price }}</p>
    </div>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { productsStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'

const store = productsStore()
const route = useRoute()
const router = useRouter()
const product = computed(() => {
  return store.products.find((item: any) => item.id === Number(route.params.id))
})
const addToCart = () => {
  store.addToCart(product.value)
  router.push({ name: 'Cart' })
}
</script>

<style scoped>
.product {
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0 0 14px 1px black;
  & img {
    width: 70%;
  }
  & button {
    margin-bottom: 15px;
  }
}
</style>
