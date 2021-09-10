<template>
  <div id="shop">
    <h2>Shop</h2>
    <nav>
      <router-link to="/">All products</router-link>
      <router-link to="/cart">View cart</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  }
}
</script>