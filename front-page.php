<?php get_header(); ?>
<?php get_template_part('templates/top-bar'); ?>

<?php the_post(); ?>

<main>

  <div class="demo-block-container">
    <?php the_content(); ?>
  </div>

  <div id="app"/>

</main>

<?php get_template_part('templates/footer'); ?>
<?php get_footer(); ?>