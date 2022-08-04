<template>
  <h2>Examples</h2>

  <p>Image imported in Vue template. Click on it to shake.</p>
  <img
    alt="Logo"
    :src="logo"
    :class="{ shake: isShaking }"
    @click="demoAnimation"
  />

  <p>Image set in CSS</p>
  <div id="sample-image"></div>

  <p>Fontello</p>
  <ul>
    <li>
      <a href="#"><span class="icon-facebook"></span> Facebook</a>
    </li>
    <li>
      <a href="#"><span class="icon-twitter"></span> Twitter</a>
    </li>
  </ul>
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
