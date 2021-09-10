<template>
  <div class="product">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <div class="price">{{ product.price }}</div>
    <button type="button">Add to cart</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      product: {
          id: 1,
          title: "Sample product 1",
          description: "Lorem ipsum.",
          price: 35.0,
      },
    }
  },
}
</script>
