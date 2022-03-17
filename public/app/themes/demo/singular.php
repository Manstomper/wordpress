<?php get_header(); ?>
<?php get_template_part('global/templates/app-header'); ?>

<mark><?= $tmpTemplateName ?? 'singular.php'; ?></mark>

<main>
    <?php the_post(); ?>
    <article>
        <h1><?php the_title(); ?></h1>
        <?php the_content(); ?>
        <?php comments_template(); ?>
        <?php comment_form(); ?>
    </article>
    <?php get_sidebar('singular'); ?>
</main>

<?php get_template_part('global/templates/app-footer'); ?>
<?php get_footer(); ?>
