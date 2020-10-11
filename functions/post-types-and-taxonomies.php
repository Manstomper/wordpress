<?php

/**
 * Register custom post types and taxonomies
 */
function rig_add_post_type() {
  // Custom post type
  register_post_type('rig_post', [
    //'label' => '',
    'labels' => [
      'name' => __('Example post type', 'rig'),
      'singular_name' => __('Example post type', 'rig'),
    ],
    'public' => true,
    'menu_position' => 4,
    'show_in_rest' => true,
    'supports' => ['editor', 'title', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions'],
  ]);

  // Custom taxonomy
  register_taxonomy('rig_taxonomy', 'rig_post', [
    'labels' => [
      'name' => __('Example categories', 'rig'),
      'singular_name' => __('Example category', 'rig'),
    ],
    'hierarchical' => true,
    'show_in_rest' => true,
  ]);

  // Register taxonomy for post type
  register_taxonomy_for_object_type('rig_taxonomy', 'rig_post');
};

add_action('init', 'rig_add_post_type');
