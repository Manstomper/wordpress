<?php

// This file is required in the root directory so WordPress can find it.
// WP is hardcoded to look in its own directory or one directory up for wp-config.php.

require_once __DIR__ . '/vendor/autoload.php';

$webrootDir = __DIR__;

define('WP_ENV', getenv('WP_ENV') ?: 'production');

$wpHome = getenv('WP_HOME') ?: 'http://wp.local';
define('WP_HOME', trim($wpHome, '/'));
define('WP_SITEURL', WP_HOME . '/wp');
define('CONTENT_DIR', '/app');
define('WP_CONTENT_DIR', realpath($webrootDir . '/' . CONTENT_DIR));
define('WP_CONTENT_URL', WP_HOME . CONTENT_DIR);

define('DB_NAME', 'wordpress');
define('DB_USER', 'root');
define('DB_PASSWORD', 'password');
define('DB_HOST', 'mysql');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');
$table_prefix = getenv('TABLE_PREFIX') ?: 'wp_';

define('AUTH_KEY', getenv('WP_AUTH_KEY'));
define('SECURE_AUTH_KEY', getenv('WP_SECURE_AUTH_KEY'));
define('LOGGED_IN_KEY', getenv('WP_LOGGED_IN_KEY'));
define('NONCE_KEY', getenv('WP_NONCE_KEY'));
define('AUTH_SALT', getenv('WP_AUTH_SALT'));
define('SECURE_AUTH_SALT', getenv('WP_SECURE_AUTH_SALT'));
define('LOGGED_IN_SALT', getenv('WP_LOGGED_IN_SALT'));
define('NONCE_SALT', getenv('WP_NONCE_SALT'));

define('WP_CACHE', (WP_ENV !== 'developemnt'));
define('DISABLE_WP_CRON', (WP_ENV === 'developemnt'));
define('WP_POST_REVISIONS', getenv('WP_POST_REVISIONS') ?: 5);
define('AUTOMATIC_UPDATER_DISABLED', true);
define('DISALLOW_FILE_EDIT', true);
define('DISALLOW_FILE_MODS', true);

define('WP_DEBUG', (WP_ENV === 'development'));
define('WP_DEBUG_DISPLAY', (WP_ENV === 'developemnt'));
define('WP_DEBUG_LOG', false);
define('SCRIPT_DEBUG', false);

// Allow setting custom error level, because some plugins generate a large amount of deprecation notices
if (WP_ENV === 'development' && getenv('PHP_ERROR_LEVEL')) {
    error_reporting((int) getenv('PHP_ERROR_LEVEL'));
    ini_set('display_errors', 1);

    $GLOBALS['wp_filter'] = [
        'enable_wp_debug_mode_checks' => [
            10 => [
                [
                    'accepted_args' => 0,
                    'function' => function () {
                        return false;
                    },
                ],
            ],
        ],
    ];
}

// Allow WordPress to detect HTTPS when used behind a reverse proxy or a load balancer
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
    $_SERVER['HTTPS'] = 'on';
}

if (!defined('ABSPATH')) {
    define('ABSPATH', $webrootDir . '/wp/');
}

require_once ABSPATH . 'wp-settings.php';
