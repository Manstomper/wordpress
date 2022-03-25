<?php

add_action('init', function () {
    register_block_type('rig/sample', [
        'editor_script' => 'theme-editor-js',
        'render_callback' => function ($attributes, $content) {
            ob_start();
            include __DIR__ . '/template.php';
            return ob_get_clean();
        },
    ]);
});
