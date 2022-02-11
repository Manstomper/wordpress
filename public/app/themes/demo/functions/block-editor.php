<?php

/**
 * Enqueue block editor JS and CSS
 */
/*add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_style('theme-editor', get_stylesheet_directory_uri() . '/assets/dist/admin.css');
    wp_enqueue_script('theme-editor', get_stylesheet_directory_uri() . '/assets/dist/admin.js', ['wp-editor', 'wp-blocks', 'wp-rich-text', 'wp-dom-ready', 'wp-edit-post']);

    wp_set_script_translations('theme-editor', 'rig', realpath(get_template_directory() . '/languages'));
});*/

/**
 * Register custom blocks
 */
/*add_action('init', function () {
    $blocks = [
        'list-posts',
        'sample',
    ];

    foreach ($blocks as $block) {
        register_block_type('rig/' . $block, [
            'editor_script' => 'theme-editor-js',
            'render_callback' => function ($attributes, $content) use ($block) {
                ob_start();
                include get_template_directory() . '/templates/blocks/' . $block . '.php';
                return ob_get_clean();
            },
        ]);
    }
});*/

