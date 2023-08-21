import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: (): { products: Array<any> | never[]; cart: Array<any> | never[] } => ({
    products: [],
    cart: []
  }),
  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => (this.products = json.products))
    },
    addToCart(product: any) {
      //@ts-ignore
      this.cart.push(product)
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
