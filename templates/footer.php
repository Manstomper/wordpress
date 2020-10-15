<footer>

  <!--
  Example code. Not to be used as-is in production.
  -->

  <h2>This is the footer</h2>

  <div id="footer">

    <!-- SVG logo from JS variable using Vue -->

    <img v-bind:src="logo" alt="Logo">

    <!-- Random items, to demonstrate how  -->

    <ul>
      <li v-for="item in exampleStaticItems">{{ item }}</li>
    </ul>

    <!-- List WordPress categories -->

    <ul>
      <example-custom-element
        v-for="item in categories"
        v-bind:category="item"
      />
    </ul>

  </div>

  <!-- SVG logo from JS variable using plain Javascript -->

  <div id="logo-2"></div>

  <!-- Image set in main.scss -->

  <div id="image"></div>

  <!-- Fontello icons -->

  <ul>
    <li><a href="#"><span class="icon-facebook"/> Facebook</a></li>
    <li><a href="#"><span class="icon-twitter"/> Twitter</a></li>
  </ul>

  <!--
  End of example code
  -->

</footer>