<template>
  <h2>Shop</h2>
  <nav>
    <router-link to="/">All products</router-link>
    <router-link to="/cart">
      View cart ({{ $store.state.cartContents.length }})
    </router-link>
  </nav>
  <router-view />
</template>
