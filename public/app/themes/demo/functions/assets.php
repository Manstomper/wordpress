<?php

/**
 * Enqueue scripts and styles
 */
add_action('wp_enqueue_scripts', function () {
    if (!defined('WP_ENV') || WP_ENV == "production") {
        $path = get_stylesheet_directory_uri() . '/assets/dist';
    } else {
        $path = 'http://localhost:3000';
    }

    wp_enqueue_style('app', $path . '/app.css');
    wp_enqueue_script('app',  $path . '/app.js', [], false, true);

    wp_dequeue_style('global-styles');
});

/**
 * Remove wp-embed script from footer
 */
add_action('wp_footer', function () {
    wp_deregister_script('wp-embed');
});

/**
 * Remove jQuery from frontend (if necessary, it's included in theme scripts)
 */
add_filter('wp_default_scripts', function (&$scripts) {
    if (!is_admin()) {
        $scripts->remove('jquery');
    }
});
