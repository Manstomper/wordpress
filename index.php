<?php get_header(); ?>

<main>

  <h1><?= __('Welcome', 'rig'); ?></h1>

  <ul>
    <?php while (have_posts()) { ?>
      <?php the_post(); ?>
      <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
    <?php } ?>
  </ul>

  <hr>

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