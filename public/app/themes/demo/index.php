<?php get_header(); ?>
<?php get_template_part('global/templates/app-header'); ?>

<main>
    <?php while (have_posts()) { ?>
        <?php the_post(); ?>
        <article>
            <h2><?php the_title(); ?></h2>
            <?php the_excerpt(); ?>
            <p><a href="<?php the_permalink(); ?>">Read more</a></p>
        </article>

    <?php } ?>
</main>

<?php get_template_part('global/templates/app-footer'); ?>
<?php get_footer(); ?>
