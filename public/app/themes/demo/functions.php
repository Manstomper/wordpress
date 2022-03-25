<?php

require_once __DIR__ . '/inc/helpers.php';
require_once __DIR__ . '/inc/theme-settings.php';
require_once __DIR__ . '/inc/rest.php';
require_once __DIR__ . '/inc/polylang.php';
require_once __DIR__ . '/inc/admin.php';

/**
 * Content type: Event
 */
require_once __DIR__ . '/content-types/event/setup.php';
require_once __DIR__ . '/content-types/event/meta.php';

/**
 * Content type: Person
 */
require_once __DIR__ . '/content-types/person/setup.php';

/**
 * Blocks
 */
$blockDir = opendir(__DIR__ . '/blocks');

while (($dir = readdir($blockDir)) !== false) {
    if ($dir !== '.' && $dir !== '..') {
        require_once __DIR__ . '/blocks/' . $dir . '/config.php';
    }
}
