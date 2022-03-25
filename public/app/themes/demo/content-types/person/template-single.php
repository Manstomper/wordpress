<?php get_header(); ?>
<?php get_template_part('global/templates/app-header'); ?>

<mark><?= $tmpTemplateName ?? 'content-types/person/template-single.php'; ?></mark>

<main>
    <?php the_post(); ?>
    <article>
        <?php the_content(); ?>
    </article>
</main>

<?php get_template_part('global/templates/app-footer'); ?>
<?php get_footer(); ?>
