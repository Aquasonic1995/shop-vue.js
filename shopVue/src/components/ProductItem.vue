<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductItem'
})
</script>
<template>
  <v-btn class="ml-5 bg-blue-accent-4" @click="router.push({ name: 'Catalog' })"
    >Back to catalog
  </v-btn>
  <v-card class="product">
    <v-img :src="product.thumbnail" />
    <v-card-title class="pl-0">{{ product.brand }}</v-card-title>
    <v-card-subtitle class="pl-0">$ {{ product.price }}</v-card-subtitle>
    <v-card-text class="pl-0">{{ product.description }}</v-card-text>
    <v-btn variant="elevated" @click="addToCart" class="bg-purple-darken-1"> Add to Cart </v-btn>
  </v-card>
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
  & v-img {
    height: 200px;
  }
  & button {
    margin-bottom: 15px;
  }
}
v-img {
  height: 300px;
}
</style>
