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

    //wp_set_script_translations('theme-editor', 'rig', realpath(get_template_directory() . '/languages'));
});

/**
 * Register custom blocks
 */
add_action('init', function () {
    $blocks = [
        'sample',
    ];
    $path = get_template_directory() . '/templates/blocks/';

    foreach ($blocks as $blockName) {
        register_block_type('rig/' . $blockName, [
            'editor_script' => 'theme-editor-js',
            'render_callback' => function ($attributes, $content) use ($path, $blockName) {
                ob_start();
                include $path . $blockName . '.php';
                return ob_get_clean();
            },
        ]);
    }
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
    $allowForAll = [
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

    if ($editorContext->post->post_type === 'post') {
        return $allowForAll;
    }

    if ($editorContext->post->post_type === 'page') {
        return array_merge($allowForAll, [
            'acf/banner',
            'acf/posts',
        ]);
    }

    return $allowedTypes;
}, 11, 2);
