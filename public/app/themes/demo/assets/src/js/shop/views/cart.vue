<template>
  <div class="cart">
    <h3>{{ store.state.cartContents.length }} item(s) in cart</h3>
    <ul>
      <li v-for="item in store.state.cartContents" :key="item.id">
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
  methods: {
    removeFromCart(id) {
      this.store.commit('removeFromCart', id);
    },
  },
};
</script>
