<?php get_header(); ?>

<?php global $wp_query; ?>

<main>

  <h1><?= __('Search', 'rig'); ?></h1>

  <p>
    <?= sprintf(_n('%s result for', '%s results for', $wp_query->found_posts, 'rig'), $wp_query->found_posts); ?>
    &quot;<?= get_search_query(); ?>&quot;.
  </p>

  <?php if (have_posts()) { ?>
    <ul>
      <?php while (have_posts()) { ?>
        <?php the_post(); ?>
        <li>
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </li>
      <?php } ?>
    </ul>
  <?php } ?>

  <?php get_search_form(); ?>

</main>

<?php get_footer(); ?>