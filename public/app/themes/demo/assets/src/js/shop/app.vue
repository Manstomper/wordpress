<template>
  <div class="shop">
    <h2>Shop</h2>
    <nav>
      <router-link to="/">All products</router-link>
      <router-link to="/cart">
        View cart ({{ $store.state.cartContents.length }})
      </router-link>
    </nav>
    <router-view v-model="products"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
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
      ],
    };
  },
};
</script>
