<?php

/**
 * Remove WordPress version from RSS feeds
 */
add_filter('the_generator', '__return_false');

/**
 * Remove id attribute to prevent duplicates when the same menu is printed twice
 */
add_filter('wp_nav_menu_items', function ($items) {
    $items = preg_replace('/ id="menu-item-[0-9]+"/', '', $items);

    return $items;
});

/**
 * Add iframe to list of allowed tags
 */
add_filter('wp_kses_allowed_html', function ($tags) {
    $tags['iframe'] = [
        'src' => true,
        'width' => true,
        'height' => true,
        'style' => true,
        'frameborder' => true,
    ];

    return $tags;
}, 10, 2);

/**
 * Widget for the admin dashboard
 */
add_action('wp_dashboard_setup', function () {
    wp_add_dashboard_widget('rig_dashboard', 'Hello', function () {
        ob_start();
        echo '<p>I\'m a dashboard widget.</p>';
        echo ob_get_clean();
    });
});
