<template>
  <div class="product">
    <h3>Product: {{ product.title }}</h3>
    <p>Price: {{ product.price }}</p>
    <button type="button" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: ["products"],
  computed: {
    product() {
      return this.products
        .filter((product) => {
          return parseInt(product.id) === parseInt(this.$route.params.id);
        })
        .shift();
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
  },
};
</script>
