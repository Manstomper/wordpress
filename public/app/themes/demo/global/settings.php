<?php

/**
 * Add or remove features
 */
add_action('after_setup_theme', function () {
    load_theme_textdomain('rig', get_template_directory() . '/languages');

    add_theme_support('post-thumbnails');
    add_theme_support('align-wide');
    remove_theme_support('core-block-patterns');
    remove_theme_support('block-templates');

    // Navigation menus
    register_nav_menus([
        'main' => __('Main menu', 'rig'),
    ]);
});

/**
 * Add or remove features
 */
add_action('init', function () {
    // @FIXME doesn't work
    //remove_post_type_support('post', 'comments');
    //remove_post_type_support('page', 'comments');

    // Remove all but the default image sizes
    foreach (get_intermediate_image_sizes() as $size) {
        if (!in_array($size, ['thumbnail', 'medium', 'large'])) {
            remove_image_size($size);
        }
    }
});

/**
 * Enqueue scripts and styles
 */
add_action('wp_enqueue_scripts', function () {
    if (!defined('WP_ENV') || WP_ENV == "production") {
        $uri = get_stylesheet_directory_uri() . '/assets/dist';
    } else {
        $uri = 'http://localhost:3000';
    }

    wp_enqueue_style('app', $uri . '/app.css');
    wp_enqueue_script('app',  $uri . '/app.js', [], false, true);

    wp_dequeue_style('global-styles');
});

/**
 * Clean-up
 */
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'wp_oembed_add_host_js');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10);

/**
 * Remove WordPress version from RSS feeds
 */
add_filter('the_generator', '__return_false');

/**
 * Disable asset versioning
 */
function remove_version_query_var($src)
{
    return $src ? esc_url(remove_query_arg('ver', $src)) : false;
}

add_filter('script_loader_src', 'remove_version_query_var', 15, 1);
add_filter('style_loader_src', 'remove_version_query_var', 15, 1);

/**
 * Remove wp-embed script from footer
 */
add_action('wp_footer', function () {
    wp_deregister_script('wp-embed');
});

/**
 * Remove jQuery from frontend
 */
add_filter('wp_default_scripts', function (&$scripts) {
    if (!is_admin()) {
        $scripts->remove('jquery');
    }
});

/**
 * Remove support for emojis
 */
add_action('init', function () {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

    add_filter('tiny_mce_plugins', function ($plugins) {
        if (is_array($plugins)) {
            return array_diff($plugins, ['wpemoji']);
        }

        return [];
    });

    add_filter('wp_resource_hints', function ($urls, $relationType) {
        if ($relationType === 'dns-prefetch') {
            $url = apply_filters('emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/');
            $urls = array_diff($urls, [$url]);
        }

        return $urls;
    }, 10, 2);
});
