<?php

/**
 * Register custom post types and taxonomies
 */
add_action('init', function () {
    register_post_type('event', [
        'labels' => [
            'name' => __('Events', 'rig'),
            'singular_name' => __('Event', 'rig'),
        ],
        'public' => true,
        'menu_position' => 4,
        'show_in_rest' => true,
        'supports' => ['editor', 'title', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions'],
    ]);

    // Custom taxonomy
    register_taxonomy('event-type', 'event', [
        'labels' => [
            'name' => __('Types', 'rig'),
            'singular_name' => __('Type', 'rig'),
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
    ]);
});
