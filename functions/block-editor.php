<?php

/**
 * Enqueue block editor JS and CSS
 */
add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_style('theme-editor', get_stylesheet_directory_uri() . '/assets/dist/admin.css');
    wp_enqueue_script('theme-editor', get_stylesheet_directory_uri() . '/assets/dist/admin.js', ['wp-editor', 'wp-blocks', 'wp-rich-text', 'wp-dom-ready', 'wp-edit-post']);

    wp_set_script_translations('theme-editor', 'rig', realpath(get_template_directory() . '/languages'));
});

/**
 * Register custom blocks
 */
add_action('init', function () {
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
});

/**
 * Add custom block categories
 */
add_filter('block_categories', function ($categories, $post) {
    $new = [
        [
            'slug' => 'media',
            'title' => __('Media', 'rig'),
        ],
    ];

    return array_merge($categories, $new);
}, 10, 2);

/**
 * Disable custom font sizes, then reduce number of available sizes
 */
add_action('after_setup_theme', function () {
    add_theme_support('disable-custom-font-sizes');
    add_theme_support('editor-font-sizes', [
        [
            'name' => __('Small', 'rig'),
            'size' => 12,
            'slug' => 'small'
        ],
        [
            'name' => __('Large', 'rig'),
            'size' => 36,
            'slug' => 'large'
        ],
    ]);
});

/**
 * Disable custom colors, then add theme colors to picker
 */
add_action('after_setup_theme', function () {
    add_theme_support('disable-custom-colors');
    add_theme_support('editor-color-palette', [
        [
            'name' => __('White', 'rig'),
            'slug' => 'white',
            'color' => '#fff',
        ],
        [
            'name' => __('Black', 'rig'),
            'slug' => 'black',
            'color' => '#000',
        ],
        [
            'name' => __('Primary', 'rig'),
            'slug' => 'primary',
            'color' => '#afbf98',
        ],
        [
            'name' => __('Secondary', 'rig'),
            'slug' => 'secondary',
            'color' => '#675a4b',
        ],
        [
            'name' => __('Tertiary', 'rig'),
            'slug' => 'tertiary',
            'color' => '#a39db6',
        ],
    ]);
});

/**
 * Remove core block patterns, add custom patterns
 */
add_action('after_setup_theme', function () {
    remove_theme_support('core-block-patterns');

    register_block_pattern(
        'rig/sample-list',
        [
            'title' => __('Title here', 'rig'),
            'description' => __('Description here', 'rig'),
            'categories' => ['text'],
            'content' => '<!-- wp:list {"className":"sample-class"} -->'
                . '<ul class="sample-class">'
                . '<li><a href="#anchor">Link</a></li>'
                . '</ul>'
                . '<!-- /wp:list -->',
        ],
    );
});
