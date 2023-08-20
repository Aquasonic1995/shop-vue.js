<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductItem'
})
</script>
<template>
  <div class="product-image">
    <button @click="router.push({ name: 'Catalog' })">Back to catalog</button>
    <img :src="product.thumbnail" alt="" />
    <div class="product-details">
      <p>Brand:{{ product.brand }}</p>
      <p>Description:{{ product.description }}</p>
      <p>Price:{{ product.price }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { productsStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'
const hi = () => {
  console.log(product)
}
const store = productsStore()
const route = useRoute()
const router = useRouter()
const product = computed(() => {
  return store.products.find((item: any) => item.id === Number(route.params.id))
})
</script>

<style scoped></style>
