<?php

add_action('acf/init', function () {
    if (!function_exists('acf_register_block')) {
        return;
    }

    acf_register_block([
        'name' => 'banner',
        'title' => __('Banner', 'rig'),
        'description' => '',
        'category' => 'custom',
        'icon' => 'align-wide',
        'mode' => 'preview',
        'supports' => [
            'mode' => false,
            'jsx' => true,
        ],
        'render_template' => __DIR__ . '/template.php',
    ]);
});
