<?php

/**
 * Global functions
 */
require_once __DIR__ . '/global/helpers.php';
require_once __DIR__ . '/global/settings.php';
require_once __DIR__ . '/global/rest.php';
require_once __DIR__ . '/global/admin.php';
require_once __DIR__ . '/global/plugins/polylang.php';

/**
 * Content type: Event
 */
require_once __DIR__ . '/content-types/event/settings.php';

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
