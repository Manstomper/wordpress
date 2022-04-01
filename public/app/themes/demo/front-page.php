<?php get_header(); ?>
<?php get_template_part('global/templates/app-header'); ?>

<main>
    <?php //get_sidebar('home'); ?>
    <?php //include __DIR__ . '/.vue-examples.php'; ?>
    <?php $foo = rig_get_field_object('field_6246a45120bea', 13); echo "\n\n<pre foo>" . print_r($foo, true) . "</pre>\n\n"; ?>
    <?php //include __DIR__ . '/.style-guide.php'; ?>
</main>

<?php get_template_part('global/templates/app-footer'); ?>
<?php get_footer(); ?>
