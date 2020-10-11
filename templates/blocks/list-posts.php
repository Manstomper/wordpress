<?php
$q = new \WP_Query([
  'post__in' => $attributes['postIds'] ?? [0],
  'post_type' => ['post', 'page', 'rig_post'],
  'orderby' => 'post__in',
  'posts_per_page' => 100,
]);
?>

<?php if ($q->have_posts()) { ?>
  <ul class="block-list-posts">
    <?php while ($q->have_posts()) { ?>
      <?php $q->the_post(); ?>
      <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
    <?php } ?>
    <?php wp_reset_postdata(); ?>
  </ul>
<?php } ?>