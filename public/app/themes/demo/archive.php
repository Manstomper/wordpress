<?php get_header(); ?>
<?php get_template_part('templates/app-header'); ?>

<main>
    <?php while (have_posts()) { ?>
        <?php the_post(); ?>
        <?php get_template_part('templates/content', get_post_type()); ?>
    <?php } ?>
</main>

<?php get_template_part('templates/app-footer'); ?>
<?php get_footer(); ?>
