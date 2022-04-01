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
            'color' => '#dee0e6',
        ],
        [
            'name' => 'Secondary',
            'slug' => 'secondary',
            'color' => '#ff6150',
        ],
        [
            'name' => 'Tertiary',
            'slug' => 'Tertiary',
            'color' => '#134e6f',
        ],
    ]);
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

/**
 * Messages in development mode
 */
add_action('wp_print_footer_scripts', function() {
    $messages = [];

    if (defined('WP_ENV') && WP_ENV === 'development') {
        $messages[] = 'Development site';
    }

    $messages = apply_filters('rig_dev_notice', $messages);

    if (!empty($messages)) {
        echo '<div id="rig-dev-notice" class="dev-notice"><p>' . implode('</p></p>', $messages) . '</p></div>';
    }
});
