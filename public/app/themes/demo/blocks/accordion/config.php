<?php

add_action('acf/init', function () {
    if (!function_exists('acf_register_block')) {
        return;
    }

    acf_register_block([
        'name' => 'accordion',
        'title' => __('Accordion', 'rig'),
        'description' => '',
        'category' => 'custom',
        'icon' => 'arrow-down-alt',
        'mode' => 'preview',
        'supports' => [
            'mode' => false,
            'jsx' => true,
        ],
        'render_template' => __DIR__ . '/template.php',
    ]);
});
