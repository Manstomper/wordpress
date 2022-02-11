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
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Axe',
          price: 35,
        },
        {
          id: 2,
          title: 'Dagger',
          price: 8.9,
        },
        {
          id: 3,
          title: 'Staff',
          price: 15,
        },
      ],
    };
  },
};
</script>
