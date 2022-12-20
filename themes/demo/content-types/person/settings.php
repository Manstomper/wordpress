<?php

/**
 * Register custom post type
 */
add_action('init', function () {
    register_post_type('person', [
        'labels' => [
            'name' => __('Persons', 'rig'),
            'singular_name' => __('Person', 'rig'),
        ],
        'public' => true,
        'delete_with_user' => false,
        'show_in_rest' => true,
        'exclude_from_search' => true,
        'supports' => ['editor', 'title', 'custom-fields', 'revisions'],
        'template' => [
            ['acf/person'],
        ],
        'template_lock' => 'all',
    ]);
});
