<?php get_header(); ?>
<?php the_post(); ?>

<main>
  <?php get_template_part('templates/content', get_post_type()); ?>
</main>

<?php get_footer(); ?>