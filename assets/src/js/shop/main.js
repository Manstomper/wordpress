import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Products from './components/products.vue'
import Product from './components/product.vue'
import Cart from './components/cart.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Products },
  { path: '/product/:id', component: Product, name: 'product' },
  { path: '/cart', component: Cart },
]

const router = new VueRouter({ routes })

new Vue({
  el: '#shop',
  router,
  render: h => h(App)
})
