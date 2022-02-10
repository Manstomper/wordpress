<?php get_header(); ?>
<?php get_template_part('templates/app-header'); ?>

<?php the_post(); ?>

<main>
    <?php get_template_part('templates/content', get_post_type()); ?>
</main>

<?php get_template_part('templates/app-footer'); ?>
<?php get_footer(); ?>
