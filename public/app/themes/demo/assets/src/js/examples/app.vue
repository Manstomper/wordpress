<template>
  <div class="examples">
    <h2>Examples</h2>

    <h3>Image imported in vue</h3>
    <img :src="logo" alt="Logo" />

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
    };
  },
};
</script>
