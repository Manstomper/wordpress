<?php get_header(); ?>

<?php get_sidebar(); ?>

<main class="demo">

  <div id="load-more-example">

    <h2>{{ title }}</h2>

    <ul>
      <load-more
        v-for="item in posts"
        v-bind:post="item"
        v-bind:key="item.id"
      ></load-more>
    </ul>

    <button type="button" @click="getPosts">Load another post</button>

  </div>

  <!-- REST -->

  <div id="rest-example">

    <h2>{{ title }}</h2>

    <ul>
      <rest-example
        v-for="item in posts"
        v-bind:post="item"
        v-bind:key="item.id"
      ></rest-example>
    </ul>

    <button type="button" @click="searchPosts">Search &quot;quick fox&quot; in multiple post types</button>

  </div>

  <!-- Admin ajax -->

  <div data-ajax>
    <h2>Example admin-ajax query result</h2>
  </div>

  <!-- Images and Fontello -->

  <div class="sample-images">
    <i class="icon-right-open"></i>
    <div class="sample-background-image"></div>
  </div>

</main>

<?php get_footer(); ?>