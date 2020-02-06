<?php

/**
 * Enqueue block editor JS and CSS
 */
function rig_block_editor_assets() {
  wp_enqueue_style('rig-editor-css', get_stylesheet_directory_uri() . '/assets/dist/blocks.css');
  wp_enqueue_script('rig-editor-js', get_stylesheet_directory_uri() . '/assets/dist/blocks.js', ['wp-editor', 'wp-blocks', 'wp-rich-text', 'wp-dom-ready', 'wp-edit-post']);

  wp_set_script_translations('rig-editor-js', 'rig', realpath(get_template_directory() . '/languages'));
}

add_action('enqueue_block_editor_assets', 'rig_block_editor_assets');

/**
 * Register custom blocks
 */
function rig_blocks_init() {
  $blocks = [
    'boxes',
    'box',
  ];

  foreach ($blocks as $block) {
    register_block_type('rig/' . $block, [
      'editor_script' => 'rig-editor-js',
      'render_callback' => function($attributes, $content) use ($block) {
        ob_start();
        include get_template_directory() . '/assets/src/blocks/' . $block . '/template.php';
        return ob_get_clean();
      },
    ]);
  }
}

add_action('init', 'rig_blocks_init');

/**
 * Set a custom render callbacks (php template) for core blocks
 */
function rig_core_block_templates() {
  $blocks = [
    'column',
  ];

  foreach ($blocks as $block) {
    register_block_type('core/' . $block, [
      'render_callback' => function($attributes, $content) use ($block) {
        ob_start();
        include get_template_directory() . '/assets/src/blocks/core-' . $block . '/template.php';
        return ob_get_clean();
      },
    ]);
  }
}

add_action('init', 'rig_core_block_templates');

/**
 * Add custom block categories (code example, not used)
 */
function rig_block_categories($categories, $post) {
  $new = [
    [
      'slug' => 'example-category',
      'title' => __('Example category', 'rig'),
    ],
  ];

  return array_merge($categories, $new);
}

add_filter('block_categories', 'rig_block_categories', 10, 2);

/**
 * Remove block library CSS
 */
add_action('wp_print_styles', function() {
  wp_dequeue_style('wp-block-library');
}, 100);
