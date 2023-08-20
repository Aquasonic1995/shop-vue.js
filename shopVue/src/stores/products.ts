import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: (): { products: Array<any> | never[] } => ({
    products: []
  }),
  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => (this.products = json.products))
    }
  }
})
