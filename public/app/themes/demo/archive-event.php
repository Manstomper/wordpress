<?php get_header(); ?>
<?php get_template_part('global/templates/app-header'); ?>

<mark><?= $tmpTemplateName ?? 'archive-event.php'; ?></mark>

<main>
    <h1><?= rig_translate('Events'); ?></h1>

    <?php $terms = get_terms(['taxonomy' => 'event-type']); ?>
    <ul>
        <?php foreach ($terms as $term) { ?>
            <li>
                <a href="<?= get_term_link($term->term_id, $term->taxonomy); ?>"><?= $term->name; ?></a>
            </li>
        <?php } ?>
    </ul>

    <?php while (have_posts()) { ?>
        <?php the_post(); ?>
        <article>
            <header>
                <h2><?php the_title(); ?></h2>
                <time datetime="<?= get_the_date('Y-m-d H:i'); ?>"><?php the_date(); ?></time>
            </header>
            <p>Event type: <?= implode(', ', wp_list_pluck(get_the_terms(null, 'event-type'), 'name')); ?></p>
            <?php the_excerpt(); ?>
            <a href="<?php the_permalink(); ?>"><?= rig_translate('Read more'); ?></a>
        </article>
    <?php } ?>
    <?php the_posts_pagination(); ?>
</main>

<?php get_template_part('global/templates/app-footer'); ?>
<?php get_footer(); ?>
