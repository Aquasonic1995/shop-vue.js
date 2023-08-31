<template>
  <h1>Catalog</h1>
  <div class="product-list">
    <v-row>
      <v-col v-for="product in store.products" :key="product.id" cols="12" sm="4">
        <v-card class="product">
          <v-card-title>{{ product.brand }}</v-card-title>
          <v-card-subtitle>$ {{ product.price }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-img :src="product.thumbnail" height="200px" />
          <v-btn @click="goToItemPage(product.id)" class="ml-5"> See details </v-btn>
        </v-card>
        <v-sheet class="ma-2 pa-2"> One of three columns </v-sheet>
      </v-col>
    </v-row>
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

onMounted(() => {
  store.fetchProductsFromDB()
})
const store = productsStore()
const router = useRouter()
const goToItemPage = (id: number) => {
  router.push({ name: 'ProductView', params: { id: id } })
}
</script>
<style scoped></style>
