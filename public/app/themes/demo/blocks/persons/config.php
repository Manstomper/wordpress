<?php

add_action('acf/init', function () {
    if (!function_exists('acf_register_block')) {
        return;
    }

    acf_register_block([
        'name' => 'persons',
        'title' => __('Persons', 'rig'),
        'description' => '',
        'category' => 'custom',
        'icon' => 'groups',
        'mode' => 'edit',
        'supports' => [
            'mode' => false,
            'align' => false,
        ],
        'render_template' => __DIR__ . '/template.php',
    ]);
});
