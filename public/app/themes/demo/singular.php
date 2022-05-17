<?php get_header(); ?>
<?php get_template_part('templates/app-header'); ?>

<main>
    <?php the_post(); ?>
    <article>
        <h1><?php the_title(); ?></h1>
        <?php if (post_password_required()) { ?>
            <?= get_the_password_form(); ?>
        <?php } else { ?>
            <?php the_content(); ?>
            <?php comments_template(); ?>
            <?php comment_form(); ?>
        <?php } ?>
    </article>
</main>

<?php get_template_part('templates/app-footer'); ?>
<?php get_footer(); ?>
