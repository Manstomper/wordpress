<?php

add_action('acf/init', function () {
    if (!function_exists('acf_register_block')) {
        return;
    }

    acf_register_block([
        'name' => 'person',
        'title' => __('Person', 'rig'),
        'description' => '',
        'category' => 'custom',
        'icon' => 'admin-users',
        'mode' => 'edit',
        'supports' => [
            'mode' => false,
        ],
        'render_template' => __DIR__ . '/template.php',
    ]);
});
