import { createWebHistory, createRouter } from 'vue-router';
import Products from './views/products.vue';
import Product from './views/product.vue';
import Cart from './views/cart.vue';

const routes = [
  { path: '/', component: Products, props: true },
  { path: '/product/:id', component: Product, name: 'product' },
  { path: '/cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
