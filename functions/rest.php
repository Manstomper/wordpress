<?php

/**
 * Custom REST API endpoint for querying multiple post types
 */
function rig_rest_posts($data) {
  $args = [
    'post_type' => ['page', 'post', 'sample_post_type'],
    'post_status' => 'publish',
    'posts_per_page' => 30,
    'ignore_sticky_posts' => true,
  ];

  if (isset($data['search'])) {
    $args['s'] = $data['search'];
  }

  $q = new \WP_Query($args);

  $results = [];

  while ($q->have_posts()) {
    $q->the_post();

    $results[] = [
      'id' => get_the_ID(),
      'title' => get_the_title(),
      'content' => get_the_content(),
      'permalink' => get_the_permalink(),
    ];
  }

  wp_reset_postdata();

  return rest_ensure_response($results);
}

add_action('rest_api_init', function() {
  register_rest_route('rig', '/posts', [
    'methods' => 'GET',
    'args' => [
      'search' => [
        'description' => '',
        'type' => 'string',
      ],
    ],
    'callback' => 'rig_rest_posts',
  ]);
});

/**
 * AJAX example
 */
function rig_ajax_example() {
  $q = new \WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 1,
    'ignore_sticky_posts' => true,
    'post_status' => current_user_can('edit_posts') ? ['publish', 'private'] : 'publish',
  ]);

  ob_start();

  if ($q->have_posts()) {

    while ($q->have_posts()) {
      $q->the_post();

      include locate_template('templates/content.php');
    }
  }

  $html = ob_get_clean();

  wp_send_json([
    'html' => $html,
  ]);

  die();
}

add_action('wp_ajax_loadexample', 'rig_ajax_example');
add_action('wp_ajax_nopriv_loadexample', 'rig_ajax_example');
