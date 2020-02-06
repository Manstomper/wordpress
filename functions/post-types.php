<?php

/**
 * Register custom post types and taxonomies
 */
function rig_add_post_type() {
  register_post_type('sample_post_type', [
    'labels' => [
      'name' => __('Example post type', 'rig'),
      'singular_name' => __('Example post type', 'rig'),
    ],
    'public' => true,
    'menu_position' => 4,
    'show_in_rest' => true,
    'supports' => ['editor', 'title', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'],
  ]);

  register_taxonomy('sample_custom_category', 'sample_post_type', [
    'labels' => [
      'name' => __('Example categories', 'rig'),
      'singular_name' => __('Example category', 'rig'),
    ],
    'hierarchical' => true,
    'show_in_rest' => true,
  ]);

  register_taxonomy_for_object_type('sample_post_type', 'sample_post_type');
};

add_action('init', 'rig_add_post_type');
