<?php get_header(); ?>
<?php get_template_part('global/templates/app-header'); ?>

<main>
    <?php the_post(); ?>
    <article>
        <h1><?php the_title(); ?></h1>
        <h2>This is a custom template for an event</h2>
        <?php the_content(); ?>
        <?php comments_template(); ?>
        <?php comment_form(); ?>
    </article>
    <?php require __DIR__ . '/sidebar-footer.php'; ?>
</main>

<?php get_template_part('global/templates/app-footer'); ?>
<?php get_footer(); ?>
