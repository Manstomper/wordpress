<?php

add_action('acf/init', function () {
    if (!function_exists('acf_register_block')) {
        return;
    }

    acf_register_block([
        'name' => 'posts',
        'title' => __('Posts', 'rig'),
        'description' => '',
        'category' => 'custom',
        'icon' => 'admin-page',
        'mode' => 'edit',
        'supports' => [
            'mode' => false,
            'align' => false,
        ],
        'render_template' => __DIR__ . '/template.php',
    ]);
});
