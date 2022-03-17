<?php get_header(); ?>
<?php get_template_part('templates/app-header'); ?>

<mark>front-page.php</mark>

<main>
    <?php get_sidebar('home'); ?>
    <?php include __DIR__ . '/.vue-examples.php'; ?>
</main>

<?php get_template_part('templates/app-footer'); ?>
<?php get_footer(); ?>
