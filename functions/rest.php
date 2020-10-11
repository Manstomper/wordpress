<?php

/**
 * Custom REST API endpoint for querying multiple post types
 */
function rig_rest_posts($data) {
  $args = [
    'post_type' => ['page', 'post', 'rig_post'],
    'post_status' => 'publish',
    'posts_per_page' => 30,
    'ignore_sticky_posts' => true,
  ];

  if (isset($data['include'])) {
    $args['post__in'] = $data['include'];
    $args['orderby'] = 'post__in';
  }

  if (isset($data['search'])) {
    if (strpos($data['search'], get_site_url()) === 0) {
      // Search string is a post URL, determine ID
      $args['post__in'] = [url_to_postid($data['search'])];
      $args['posts_per_page'] = 1;
    }
    else {
      $args['s'] = $data['search'];
    }
  }

  $q = new \WP_Query($args);

  $results = [];

  while ($q->have_posts()) {
    $q->the_post();

    $results[] = [
      'id' => get_the_ID(),
      'title' => [
        'rendered' => get_the_title(),
      ],
      'content' => [
        'rendered' => get_the_content(),
      ],
      'link' => get_the_permalink(),
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
      'include' => [
        'description' => '',
        'type' => 'array',
        'items' => [
          'type' => 'integer',
        ],
      ],
    ],
    'callback' => 'rig_rest_posts',
  ]);
});
