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

<section class="<?= rig_get_block_classes($attributes); ?>">
    <h2><?= get_field('title'); ?></h2>
    <div id="<?= $attributes['id']; ?>" class="swiper">
        <div class="swiper-wrapper">
            <?php while ($q->have_posts()) { ?>
                <?php $q->the_post(); ?>
                <a class="swiper-slide" href="<?php the_permalink(); ?>">
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
    </div>
</section>
