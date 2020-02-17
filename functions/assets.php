<?php

function rig_enqueue() {
  $path = get_template_directory_uri() . '/assets/dist/';

  wp_enqueue_style('rig-app', $path . 'app.css');

  // This is a temporary solution until I figure out the correct way to handle third-party libraries (same as jQuery?)
  wp_enqueue_script('vue',  get_template_directory_uri() . '/assets/vue.min.js', [], false, true);

  wp_enqueue_script('rig-app',  $path . 'app.js', ['vue'], false, true);
}

add_action('wp_enqueue_scripts', 'rig_enqueue');

/**
 * Remove wp-embed script from footer
 */
add_action('wp_footer', function() {
  wp_deregister_script('wp-embed');
});

/**
 * Remove jQuery from frontend (if necessary, it's included in theme scripts)
 */
add_filter('wp_default_scripts', function(&$scripts) {
  if (!is_admin()) {
    $scripts->remove('jquery');
  }
});

/**
 * Remove support for emojis
 */
add_action('init', function() {
  remove_action('wp_head', 'print_emoji_detection_script', 7);
  remove_action('admin_print_scripts', 'print_emoji_detection_script');
  remove_action('wp_print_styles', 'print_emoji_styles');
  remove_action('admin_print_styles', 'print_emoji_styles');
  remove_filter('the_content_feed', 'wp_staticize_emoji');
  remove_filter('comment_text_rss', 'wp_staticize_emoji');
  remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

  add_filter('tiny_mce_plugins', function($plugins) {

    if (is_array($plugins)) {
      return array_diff($plugins, ['wpemoji']);
    }

    return [];
  });
});
