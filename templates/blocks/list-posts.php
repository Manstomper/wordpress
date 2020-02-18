<?php
$q = new \WP_Query([
  'post__in' => !empty($attributes['postIds']) ? $attributes['postIds'] : [0],
  'post_type' => ['post', 'page', 'sample_post_type'],
  'orderby' => 'post__in',
  'posts_per_page' => 100,
]);
?>

<?php if ($q->have_posts()) { ?>
  <div class="block-list-posts">
    <ul>
      <?php while ($q->have_posts()) { ?>
        <?php $q->the_post(); ?>
        <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
      <?php } ?>
      <?php wp_reset_postdata(); ?>
    </ul>
  </div>
<?php } ?>