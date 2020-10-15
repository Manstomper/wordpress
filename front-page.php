<?php get_header(); ?>
<?php get_template_part('templates/top-bar'); ?>

<?php the_post(); ?>

<main>
  <div id="app"/>
</main>

<?php get_template_part('templates/footer'); ?>
<?php get_footer(); ?>