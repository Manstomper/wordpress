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
            'name' => __('Event types', 'rig'),
            'singular_name' => __('Event type', 'rig'),
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
    ]);
});

/**
 * Sidebars (formerly known as widget areas)
 */
add_action('widgets_init', function () {
    register_sidebar([
        'name' => __('Event footer', 'rig'),
        'id' => 'event_footer',
        'before_widget' => '',
        'after_widget' => '',
    ]);
});

/**
 * Main query modifications
 */
add_action('pre_get_posts', function ($q) {
    if (is_admin() || !$q->is_main_query()) {
        return;
    }

    if ($q->query['post_type'] === 'event') {
        $q->set('posts_per_page', 2);
    }
});

/**
 * Use a custom template for archive
 */
add_filter('archive_template', function ($template) {
    global $post;

    if ($post->post_type === 'event') {
        $template = __DIR__ . '/templates/template-archive.php';
    }

    return $template;
});

/**
 * Use a custom template for single post
 */
add_filter('single_template', function ($template) {
    global $post;

    if ($post->post_type === 'event') {
        $template = __DIR__ . '/templates/template-single.php';
    }

    return $template;
});
