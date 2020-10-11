<?php get_header(); ?>
<?php the_post(); ?>

<main>
  <article>
    <?php get_template_part('templates/content', get_post_type()); ?>
  </article>
</main>

<?php get_footer(); ?>