<?php

/**
 * Get image URL by ID
 *
 * @param integer|string $id Attachment ID
 * @param string $size Intermediate size, defaults to thumbnail
 *
 * @return string Image URL
 */
function rig_image($id, $size = 'thumbnail')
{
    $image = wp_get_attachment_image_src($id, $size);

    if (empty($image[0])) {
        return '';
    }

    return $image[0];
}

/**
 * Change color slug to CSS class name (e.g. "green" to "has-green-background-color")
 *
 * @param string $color Color slug
 * @param string $type "background-color" or "color"
 *
 * @return string CSS class name
 */
function rig_color_class($color, $type = 'color')
{
    if ($color) {
        return 'has-' . $color . '-' . $type;
    }

    return '';
}

add_filter('rig_color_class', 'rig_color_class', 10, 2);
