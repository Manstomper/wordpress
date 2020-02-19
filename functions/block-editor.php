<?php

/**
 * Remove block library CSS
 */
add_action('wp_print_styles', function() {
  wp_dequeue_style('wp-block-library');
}, 100);

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
    'list-posts',
    'sample',
  ];

  foreach ($blocks as $block) {
    register_block_type('rig/' . $block, [
      'editor_script' => 'rig-editor-js',
      'render_callback' => function($attributes, $content) use ($block) {
        ob_start();
        include get_template_directory() . '/templates/blocks/' . $block . '.php';
        return ob_get_clean();
      },
    ]);
  }
}

add_action('init', 'rig_blocks_init');

/**
 * Set a custom render callbacks (php template) for core blocks
 * Not currently used, it only serves as an example
 */
function rig_core_block_templates() {
  $blocks = [];

  foreach ($blocks as $block) {
    register_block_type('core/' . $block, [
      'render_callback' => function($attributes, $content) use ($block) {
        ob_start();
        include get_template_directory() . '/templates/blocks/core-' . $block . '.php';
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
 * Disable custom font sizes, then reduce number of available sizes
 */
function rig_font_sizes() {
  add_theme_support('disable-custom-font-sizes');
  add_theme_support('editor-font-sizes', [
    [
      'name' => __('Normal', 'rig'),
      'size' => null,
      'slug' => ''
    ],
    [
      'name' => __('Small', 'rig'),
      'size' => 12,
      'slug' => 'small'
    ],
    [
      'name' => __('Large', 'rig'),
      'size' => 36,
      'slug' => 'large'
    ],
  ]);
}

add_action('after_setup_theme', 'rig_font_sizes');

/**
 * Disable custom colors, then add theme colors to picker
 */
function rig_color_palette() {
  add_theme_support('disable-custom-colors');
  add_theme_support('editor-color-palette', [
    [
      'name' => __('White', 'rig'),
      'slug' => 'white',
      'color' => '#fff',
    ],
    [
      'name' => __('Black', 'rig'),
      'slug' => 'black',
      'color' => '#000',
    ],
    [
      'name' => __('Primary', 'rig'),
      'slug' => 'primary',
      'color' => '#ff8552',
    ],
    [
      'name' => __('Secondary', 'rig'),
      'slug' => 'secondary',
      'color' => '#297373',
    ],
  ]);
}

add_action('after_setup_theme', 'rig_color_palette');