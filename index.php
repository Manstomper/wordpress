<?php get_header(); ?>

<main>

  <h1><?= __('Welcome', 'rig'); ?></h1>

  <ul>
    <?php while (have_posts()) { ?>
      <?php the_post(); ?>
      <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
    <?php } ?>
  </ul>

  <hr>

  <h1>Example REST query result</h1>
  <div data-wp-rest></div>

  <hr>

  <h1>Example custom REST results for search &quot;quick fox&quot;</h1>
  <div data-wp-rest-custom></div>

  <hr>

  <h1>Example admin-ajax query result</h1>
  <div data-wp-ajax></div>

</main>

<?php get_footer(); ?>