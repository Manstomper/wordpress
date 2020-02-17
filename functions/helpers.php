<?php

/**
 * Get image URL by ID
 *
 * @param integer|string $id Attachment ID
 * @param string $size Intermediate size, defaults to thumbnail
 *
 * @return string Image URL
 */
function rig_image($id, $size = 'thumbnail') {
  $image = wp_get_attachment_image_src($id, $size);

  if (empty($image[0])) {
    return '';
  }

  return $image[0];
}
