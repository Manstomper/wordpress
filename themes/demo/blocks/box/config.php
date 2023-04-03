<?php

add_action('acf/init', function () {
    if (!function_exists('acf_register_block')) {
        return;
    }

    acf_register_block([
        'name' => 'box',
        'title' => __('Box', 'rig'),
        'description' => '',
        'category' => 'restricted',
        'icon' => 'block-default',
        'mode' => 'preview',
        'supports' => [
            'mode' => false,
            'color' => true,
            'align' => false,
            'align_content' => 'matrix',
            'jsx' => true,
        ],
        'render_template' => __DIR__ . '/template.php',
    ]);
});
