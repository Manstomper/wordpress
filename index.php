<?php get_header(); ?>

<main>

  <h1><?= __('Welcome', 'rig'); ?></h1>

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

  <h2>Example admin-ajax query result</h2>

  <div data-ajax></div>

</main>

<?php get_footer(); ?>