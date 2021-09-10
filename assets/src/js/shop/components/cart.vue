<template>
  <div class="cart">
    <h3>{{ $store.state.cartContents.length }} item(s) in cart</h3>
    <ul>
      <li v-for="item in $store.state.cartContents" :key="item.id">
        {{ item.title }}
        <span class="price">{{ item.price }}</span>
      </li>
    </ul>
  </div>
</template>
