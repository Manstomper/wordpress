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
    $new = [
        [
            'slug' => 'custom',
            'title' => __('Theme', 'rig'),
        ],
    ];

    return array_merge($new, $categories);
}, 10, 2);

/**
 * Restrict available blocks for built-in post types
 */
add_filter('allowed_block_types_all', function ($allowedTypes, $editorContext) {
    $allowedForAll = [
        'core/block',
        'core/columns',
        'core/column',
        'core/heading',
        'core/paragraph',
        'core/list',
        'core/table',
        'core/quote',
        'core/buttons',
        'core/button',
        'core/image',
        'core/gallery',
        'acf/accordion',
    ];

    if ($editorContext->post->post_type === 'page') {
        return array_merge($allowedForAll, [
            'acf/banner',
            'core/cover',
            'acf/boxes',
        ]);
    }

    // Keeping all blocks in demo theme in order to track potentially useful additions
    return $allowedTypes;
    //return $allowedForAll;
}, 11, 2);

/**
 * Default color palette
 */
add_action('after_setup_theme', function () {
    add_theme_support('editor-color-palette', [
        [
            'name' => 'Dark',
            'slug' => 'dark',
            'color' => '#272932',
        ],
        [
            'name' => 'Light',
            'slug' => 'light',
            'color' => '#fff',
        ],
        [
            'name' => 'Primary',
            'slug' => 'primary',
            'color' => '#0f7173',
        ],
        [
            'name' => 'Secondary',
            'slug' => 'secondary',
            'color' => '#f05d5e',
        ],
        [
            'name' => 'Tertiary',
            'slug' => 'Tertiary',
            'color' => '#d8a47f',
        ],
    ]);
});
