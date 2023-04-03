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
        'template' => [
            ['core/group', ['tagName' => 'main', 'className' => 'event-main', 'templateLock' => false]],
            ['core/group', ['tagName' => 'footer', 'className' => 'event-footer', 'templateLock' => 'all'], [
                ['acf/banner', [], [
                    ['core/heading', ['content' => 'Lorem ipsum']],
                    ['core/paragraph', ['content' => 'This is an example of a placeholder block with static content that can be edited.']],
                    ['core/button', ['text' => 'Read more&hellip;', 'url' => home_url('/foo')]],
                ]],
            ]],
            ['core/group', ['tagName' => 'footer', 'className' => 'event-footer', 'templateLock' => false], [
                ['core/block', ['ref' => 324]],
            ]],
        ],
        'template_lock' => 'insert',
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
 * Restrict available blocks for event post type
 */
add_filter('allowed_block_types_all', function ($allowedTypes, $editorContext) {
    if ($editorContext->post->post_type === 'event') {
        return [
            'core/button',
            'core/buttons',
            'core/column',
            'core/columns',
            'core/gallery',
            'core/heading',
            'core/image',
            'core/list',
            'core/paragraph',
            'core/table',
            'acf/banner',
        ];
    }

    return $allowedTypes;
}, 11, 2);

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

    if ($q->is_post_type_archive && $q->query['post_type'] === 'event') {
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
