<?php

/**
 * Remove id attribute to prevent duplicates when the same menu is printed twice
 */
add_filter('wp_nav_menu_items', function ($items) {

    $items = preg_replace('/ id="menu-item-[0-9]+"/', '', $items);

    return $items;
});

/**
 * Remove all but the default image sizes
 */
add_filter('init', function () {
    foreach (get_intermediate_image_sizes() as $size) {
        if (!in_array($size, ['thumbnail', 'medium', 'large'])) {
            remove_image_size($size);
        }
    }
});

/**
 * Remove unused image size "medium_large"
 */
add_filter('intermediate_image_sizes', function ($sizes) {
    $key = array_search('medium_large', $sizes);

    if ($key !== false) {
        unset($sizes[$key]);
    }

    return $sizes;
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

/**
 * Use a different template for some content
 */
add_filter('single_template', function ($template) {
    global $post;

    if (has_category('foo', $post->ID)) {
        $template = get_template_directory() . '/foo.php';
    }

    return $template;
});
