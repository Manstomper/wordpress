<template>
  <ul class="products">
    <li v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="price">{{ product.price }}</div>
        <button type="button">Add to cart</button>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      products: [
        {
          id: 1,
          title: "Axe",
          description: "Lorem ipsum.",
          price: 35.0,
        },
        {
          id: 2,
          title: "Dagger",
          description: "The quick brown fox jumps over a lazy dog.",
          price: 8.9,
        },
        {
          id: 3,
          title: "Staff",
          description: "Dolor sit amet.",
          price: 15,
        },
      ],
    }
  },
}
</script>
