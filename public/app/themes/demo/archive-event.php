<?php get_header(); ?>
<?php get_template_part('global/templates/app-header'); ?>

<mark><?= $tmpTemplateName ?? 'archive-event.php'; ?></mark>

<main>
    <?php $terms = get_terms(['taxonomy' => 'event-type']); ?>
    <?php foreach ($terms as $term) { ?>
        <a href="<?= get_term_link($term->term_id, $term->taxonomy); ?>"><?= $term->name; ?></a>
    <?php } ?>

    <?php while (have_posts()) { ?>
        <?php the_post(); ?>
        <article>
            <h2><?php the_title(); ?></h2>
            <time datetime="<?= get_the_date('Y-m-d H:i'); ?>"><?php the_date(); ?></time>
            <p>Event type: <?= implode(', ', wp_list_pluck(get_the_terms(null, 'event-type'), 'name')); ?></p>
            <?php the_excerpt(); ?>
            <a href="<?php the_permalink(); ?>"><?= rig_translate('Read more'); ?></a>
        </article>
    <?php } ?>
    <?php the_posts_pagination(); ?>
</main>

<?php get_template_part('global/templates/app-footer'); ?>
<?php get_footer(); ?>
