<?php

/**
 * Global functions
 */
require_once __DIR__ . '/inc/helpers.php';
require_once __DIR__ . '/inc/settings.php';
require_once __DIR__ . '/inc/rest.php';
require_once __DIR__ . '/inc/admin.php';
require_once __DIR__ . '/inc/menu-walker.php';
require_once __DIR__ . '/inc/plugins/polylang.php';

/**
 * Content type: Event
 */
require_once __DIR__ . '/content-types/event/settings.php';
require_once __DIR__ . '/content-types/event/rest.php';

/**
 * Content type: Person
 */
require_once __DIR__ . '/content-types/person/settings.php';

/**
 * Blocks
 */
$blockDir = opendir(__DIR__ . '/blocks');

while (($dir = readdir($blockDir)) !== false) {
    if ($dir !== '.' && $dir !== '..') {
        require_once __DIR__ . '/blocks/' . $dir . '/config.php';
    }
}

/**
 * Messages in development mode
 */
add_action('wp_print_footer_scripts', function () {
    if (!defined('WP_ENV') || WP_ENV !== 'development') {
        return;
    }

    $messages = ['Development site'];
    $messages = apply_filters('rig_dev_notice', $messages);

    echo '<div id="rig-dev-notice" class="dev-notice"><p>' . implode('</p></p>', $messages) . '</p></div>';
});
