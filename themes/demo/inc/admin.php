<?php

/**
 * Enqueue block editor JS and CSS
 */
add_action('enqueue_block_editor_assets', function () {
    if (!defined('WP_ENV') || WP_ENV == "production") {
        $path = get_stylesheet_directory_uri() . '/assets/dist';
    } else {
        $path = 'http://localhost:3000';
    }

    wp_enqueue_style('theme-editor', $path . '/admin.css');
    wp_enqueue_script('theme-editor', $path . '/admin.js', ['wp-editor', 'wp-blocks', 'wp-rich-text', 'wp-dom-ready', 'wp-edit-post']);

    wp_set_script_translations('theme-editor', 'rig', get_template_directory() . '/languages');
});

/**
 * Add custom block categories
 */
add_filter('block_categories_all', function ($categories) {
    $top = [
        [
            'slug' => 'custom',
            'title' => __('Theme', 'rig'),
        ],
    ];

    $bottom = [
        [
            'slug' => 'restricted',
            'title' => __('Restricted', 'rig'),
        ],
    ];

    return array_merge($top, $categories, $bottom);
}, 10, 2);

/**
 * Restrict available blocks for built-in post types
 */
add_filter('allowed_block_types_all', function ($allowedTypes, $editorContext) {
    if ($editorContext->post->post_type === 'page') {
        return [
            'acf/accordion',
            'acf/banner',
            'acf/boxes',
            'acf/box',
            'acf/posts',
            'core/block',
            'core/button',
            'core/buttons',
            'core/column',
            'core/columns',
            'core/gallery',
            'core/heading',
            'core/image',
            'core/list',
            'core/paragraph',
            'core/quote',
            'core/table',
        ];
    }

    return $allowedTypes;
}, 11, 2);

/**
 * Default color palette
 */
add_action('after_setup_theme', function () {
    add_theme_support('editor-color-palette', [
        [
            'name' => 'Dark',
            'slug' => 'dark',
            'color' => '#222',
        ],
        [
            'name' => 'Light',
            'slug' => 'light',
            'color' => '#fff',
        ],
        [
            'name' => 'Primary',
            'slug' => 'primary',
            'color' => '#e7d7c1',
        ],
        [
            'name' => 'Secondary',
            'slug' => 'secondary',
            'color' => '#735751',
        ],
        [
            'name' => 'Tertiary',
            'slug' => 'tertiary',
            'color' => '#bf4342',
        ],
    ]);
});

add_filter('admin_body_class', function ($classes) {
    $screen = get_current_screen();

    if ($screen->is_block_editor() && $screen->post_type) {
        $classes .= ' single-' . $screen->post_type;
    }

    return $classes;
});

/**
 * Remove dashboard meta boxes
 */
add_action('wp_dashboard_setup', function () {
    remove_action('welcome_panel', 'wp_welcome_panel');
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal');
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');
    remove_meta_box('dashboard_primary', 'dashboard', 'side');
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
});
