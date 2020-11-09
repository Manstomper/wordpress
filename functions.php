<?php

require_once __DIR__ . '/functions/theme-settings.php';
require_once __DIR__ . '/functions/helpers.php';
require_once __DIR__ . '/functions/post-types-and-taxonomies.php';
require_once __DIR__ . '/functions/rest.php';
require_once __DIR__ . '/functions/ajax.php';
require_once __DIR__ . '/functions/block-editor.php';
require_once __DIR__ . '/functions/meta.php';
require_once __DIR__ . '/functions/assets.php';
require_once __DIR__ . '/widgets/example.php';

// Everything below this is sample code. It should either be moved to the correct file in /functions or removed if not needed.

/**
 * Main query modifications
 */
function rig_pre_get_posts($q) {
  if (is_admin() || !$q->is_main_query()) {
    return;
  }

  // Show only 2 posts on search page to demonstrate pagination
  if ($q->is_search()) {
    $q->set('posts_per_page', 2);
  }
}

add_action('pre_get_posts', 'rig_pre_get_posts');

/**
 * Remove id attribute to prevent duplicates when the same menu is printed twice
 */
function rig_menu_items($items) {
  $items = preg_replace('/ id="menu-item-[0-9]+"/', '', $items);

  return $items;
}

add_filter('wp_nav_menu_items', 'rig_menu_items');

/**
 * Remove all but the default image sizes
 */
function rig_image_sizes() {
  foreach (get_intermediate_image_sizes() as $size) {
    if (!in_array($size, ['thumbnail', 'medium', 'large'])) {
      remove_image_size($size);
    }
  }
}

add_filter('init', 'rig_image_sizes');

/**
 * Remove unused image size "medium_large"
 */
function rig_intermediate_image_sizes($sizes) {
  $key = array_search('medium_large', $sizes);

  if ($key !== false) {
    unset($sizes[$key]);
  }

  return $sizes;
}

add_filter('intermediate_image_sizes', 'rig_intermediate_image_sizes');

/**
 * Add iframe to list of allowed tags
 */
function rig_allowed_html($tags) {
  $tags['iframe'] = [
    'src' => true,
    'width' => true,
    'height' => true,
    'style' => true,
    'frameborder' => true,
  ];

  return $tags;
}

add_filter('wp_kses_allowed_html', 'rig_allowed_html', 10, 2);

/**
 * Widget for the admin dashboard
 */
add_action('wp_dashboard_setup', function() {
  wp_add_dashboard_widget('rig_dashboard', __('Hello', 'rig'), function() {
    ob_start();
    ?>
    <p>I'm a dashboard widget.</p>
    <?php
    echo ob_get_clean();
  });
});

/**
 * Use a different template for some content
 */
function rig_single_template($template) {
  global $post;

  if (has_category('foo', $post->ID)) {
    $template = get_template_directory() . '/foo.php';
  }

  return $template;
}

add_filter('single_template', 'rig_single_template');

/**
 * Add SVG to allowed file types in plupload (a client-side check is done before any server requests are sent)
 */
add_filter('plupload_default_settings', function($defaults) {
  if (isset($defaults['filters']['mime_types'][0]['extensions'])) {
    $defaults['filters']['mime_types'][0]['extensions'] .= ',svg';
  }

  return $defaults;
});

/**
 * Add autocomplete="off" to comment form to avoid vulnerability issue
 * @TODO consider something less hacky
 */
add_filter('comment_form_field_author', function($field) {
  if (strpos($field, 'autocomplete') === false) {
    $insertAt = strpos($field, '<input ') + 7;
    $field = substr_replace($field, 'autocomplete="off" ', $insertAt, 0);
  }

  return $field;
}, 10, 1);
