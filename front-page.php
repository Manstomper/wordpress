<?php get_header(); ?>
<?php get_template_part('templates/top-bar'); ?>

<?php the_post(); ?>

<main>

  <h1><?php the_title(); ?></h1>
  <?php the_content(); ?>

  <div class="demo">

    <!-- REST -->

    <div id="load-more-rest">

      <h2>{{ title }}</h2>

      <ul>
        <load-more
          v-for="item in posts"
          v-bind:post="item"
          v-bind:key="item.id"
        ></load-more>
      </ul>

      <button type="button" @click="getPosts" v-bind:disabled="isDisabled">Load another post</button>

    </div>

    <!-- Admin ajax -->

    <div id="get-posts-ajax">

      <h2>{{ title }}</h2>

      <div v-html="posts"></div>

    </div>

    <!-- Images and Fontello -->

    <div class="sample-images">
      <h2>Fontello icon</h2>
      <i class="icon-right-open"></i>

      <h2>CSS background image</h2>
      <div class="sample-background-image"></div>

      <h2>SVG image with Vue</h2>
      <img id="image-with-js" v-bind:src="imageSource" v-bind:alt="alternativeText">

      <h2>SVG image dynamically appended to document</h2>
    </div>

  </div>

</main>

<?php get_template_part('templates/footer'); ?>
<?php get_footer(); ?>