<?php

/*
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
*/

add_action('after_setup_theme', function () {
    load_theme_textdomain('rig', get_template_directory() . '/languages');

    add_theme_support('post-thumbnails');
    add_theme_support('align-wide');

    remove_theme_support('core-block-patterns');

    register_nav_menus([
        'main' => __('Main menu', 'rig'),
    ]);

    add_action('widgets_init', function () {
        register_sidebar([
            'name' => 'Example sidebar',
            'id' => 'rig_sidebar',
            'before_widget' => '<aside>',
            'after_widget' => '</aside>',
            'before_title' => '<h2>',
            'after_title' => '</h2>',
        ]);
    });
});

/**
 * Add custom block categories
 */
add_filter('block_categories', function ($categories) {
    $new = [
        [
            'slug' => 'custom',
            'title' => __('Theme', 'rig'),
        ],
    ];

    return array_merge($categories, $new);
}, 10, 2);

/**
 * Remove support for emojis
 */
/*add_action('init', function () {
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
});*/
