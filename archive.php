<?php get_header(); ?>
<?php get_template_part('templates/top-bar'); ?>

<main>
    <?php while (have_posts()) { ?>
        <?php the_post(); ?>
        <article>
            <?php the_title(); ?>
        </article>
    <?php } ?>
</main>

<?php get_template_part('templates/footer'); ?>
<?php get_footer(); ?>