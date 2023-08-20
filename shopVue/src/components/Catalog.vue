<template>
  <h1>Catalog</h1>
  <div class="product-list">
    <div
      class="product"
      v-for="product in store.products"
      :key="product.id"
      @click="goToItemPage(product.id)"
    >
      <img :src="product.thumbnail" alt="" />
      <h2>Brand:{{ product.brand }}</h2>
      <p>Description:{{ product.description }}</p>
      <p>Price:{{ product.price }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Catalog'
})
</script>
<script setup lang="ts">
import { onMounted } from 'vue'

import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = productsStore()
onMounted(() => {
  store.fetchProductsFromDB()
})
const goToItemPage = (id: number) => {
  router.push({ name: 'ProductView', params: { id: id } })
}
</script>
<style scoped>
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product {
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0 0 14px 1px black;
  & img {
    width: 70%;
  }
}
</style>
