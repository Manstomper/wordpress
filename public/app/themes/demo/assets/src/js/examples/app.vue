<template>
  <div class="examples">
    <h2>Examples</h2>

    <h3>Image imported in vue</h3>
    <p>Click on it to shake.</p>
    <img alt="Logo" :src="logo" :class="{ shake: isShaking }" @click="demoAnimation" />

    <h3>Image set in CSS</h3>
    <div id="sample-image"></div>

    <h3>Fonts</h3>
    <ul>
      <li>
        <a href="#"><span class="icon-facebook"></span> Facebook</a>
      </li>
      <li>
        <a href="#"><span class="icon-twitter"></span> Twitter</a>
      </li>
    </ul>
  </div>
</template>

<script>
import logo from './logo.png';

export default {
  data() {
    return {
      logo: logo,
      isShaking: false,
    };
  },
  methods: {
    demoAnimation() {
      this.isShaking = true;
      setTimeout(() => {
        this.isShaking = false;
      }, 1500);
    },
  },
};
</script>
