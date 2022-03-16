<?php

/**
 * Register custom post type and taxonomies
 */
add_action('init', function () {
    register_post_type('event', [
        'labels' => [
            'name' => __('Events', 'rig'),
            'singular_name' => __('Event', 'rig'),
        ],
        'public' => true,
        'delete_with_user' => false,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => ['editor', 'title', 'excerpt', 'custom-fields', 'revisions'],
    ]);

    register_taxonomy('event-type', 'event', [
        'labels' => [
            'name' => __('Types', 'rig'),
            'singular_name' => __('Type', 'rig'),
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
    ]);
});
