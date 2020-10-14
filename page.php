<?php get_header(); ?>
<?php get_template_part('templates/top-bar'); ?>

<?php the_post(); ?>

<main>
  <?php get_template_part('templates/hero'); ?>
  <article>
    <?php get_template_part('templates/content', get_post_type()); ?>
  </article>
</main>

<?php get_template_part('templates/footer'); ?>
<?php get_footer(); ?>