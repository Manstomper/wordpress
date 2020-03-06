<?php

remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');

add_action('after_setup_theme', function() {
  load_theme_textdomain('rig', get_template_directory() . '/languages');

  add_theme_support('post-thumbnails');
  add_theme_support('align-wide');

  register_nav_menus([
    'main' => __('Main menu', 'rig'),
  ]);
});