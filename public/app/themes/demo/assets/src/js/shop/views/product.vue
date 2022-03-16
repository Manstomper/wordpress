<template>
  <div class="product">
    <h3>Product: {{ product.title }}</h3>
    <p>Price: {{ product.price }}</p>
    <button type="button" :disabled="inCart" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inCart: false,
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
      this.$store.commit('addToCart', this.product);
      this.inCart = true;
    },
  },
};
</script>
