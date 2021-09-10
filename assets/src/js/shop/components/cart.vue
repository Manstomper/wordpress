<template>
  <div class="cart">
    <h3>{{ contents.length }} item(s) in cart</h3>
    <ul>
      <li v-for="item in contents" :key="item.id">
        {{ item.title }}
        <span class="price">{{ item.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      contents: [
        {
          id: 1,
          title: "Sample product 1",
          price: 35.0,
          link: "/product/1",
        },
      ],
    }
  },
}
</script>
