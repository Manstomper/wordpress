<?php

require_once __DIR__ . '/global/helpers.php';
require_once __DIR__ . '/global/theme-settings.php';
require_once __DIR__ . '/global/rest.php';
require_once __DIR__ . '/global/polylang.php';
require_once __DIR__ . '/global/admin.php';

/**
 * Event content type
 */
require_once __DIR__ . '/content-types/event/setup.php';
require_once __DIR__ . '/content-types/event/meta.php';

/**
 * Person content type
 */
require_once __DIR__ . '/content-types/person/setup.php';

/**
 * ACF blocks
 */
$blocksDir = opendir(__DIR__ . '/blocks-acf');

while (($dir = readdir($blocksDir)) !== false) {
    if ($dir !== '.' && $dir !== '..') {
        require_once __DIR__ . '/blocks-acf/' . $dir . '/config.php';
    }
}
