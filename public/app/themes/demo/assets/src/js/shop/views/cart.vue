<template>
  <div class="cart">
    <h3>{{ $store.state.cartContents.length }} item(s) in cart</h3>
    <ul>
      <li v-for="item in $store.state.cartContents" :key="item.id">
        {{ item.title }}, price: {{ item.price }}
        <button type="button" @click="removeFromCart(item.id)">
          Remove from cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    removeFromCart(id) {
      this.$store.commit("removeFromCart", id);
    },
  },
};
</script>
