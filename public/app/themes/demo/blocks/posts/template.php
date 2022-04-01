<?php
$postIds = get_field('posts');

if (!$postIds) {
    return;
}

$q = new \WP_Query([
    'post_type' => 'any',
    'ignore_sticky_posts' => true,
    'post__in' => $postIds,
    'orderby' => 'post__in',
]);
?>

<section class="block-posts">
    <h2><?= get_field('title'); ?></h2>
    <div class="container">
        <?php while ($q->have_posts()) { ?>
            <?php $q->the_post(); ?>
            <a class="post" href="<?php the_permalink(); ?>">
                <article>
                    <div class="image">
                        <?= wp_get_attachment_image(get_post_thumbnail_id(), 'large'); ?>
                    </div>
                    <?php the_title(); ?>
                </article>
            </a>
        <?php } ?>
        <?php wp_reset_postdata(); ?>
    </div>
</section>
