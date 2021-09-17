<?php

function rig_enqueue()
{
    $path = get_template_directory_uri() . '/assets/dist/';

    wp_enqueue_style('rig-app', $path . 'app.css');

    if (!defined('WP_ENV') || WP_ENV == "production") {
        wp_enqueue_script('rig-app',  $path . 'app.js', [], false, true);
    } else {
        wp_enqueue_script('rig-app',  'http://localhost:9001/app.js', [], false, true);
    }
}

add_action('wp_enqueue_scripts', 'rig_enqueue');

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
