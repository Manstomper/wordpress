<template>
  <ul class="products">
    <h3>Products</h3>
    <li v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        {{ product.title }}, price: {{ product.price }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["products"],
};
</script>
