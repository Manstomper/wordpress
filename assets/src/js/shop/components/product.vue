<template>
  <div class="product">
    <h3>Product: {{ product.title }}</h3>
    <div class="price">Price: {{ product.price }}</div>
    <button type="button" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart");
    },
  },
  mounted() {
    const products = [
      {
        id: 1,
        title: "Axe",
        price: 35,
      },
      {
        id: 2,
        title: "Dagger",
        price: 8.9,
      },
      {
        id: 3,
        title: "Staff",
        price: 15,
      },
    ];
    this.product = products
      .filter((product) => {
        return parseInt(product.id) === parseInt(this.$route.params.id);
      })
      .shift();
  },
};
</script>
