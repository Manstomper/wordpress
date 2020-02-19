<?php
$classes = array_filter([
  'wp-block-column',
  apply_filters('rig_color_class', ($attributes['backgroundColor'] ?? null), 'background-color'),
  apply_filters('rig_color_class', ($attributes['textColor'] ?? null), 'color'),
]);

// This is one way of customizing core block output. Unlike adding a class name, it does not lock the site into using custom logic.
// Could also just add a wrapper and ignore styles and/or class names
// NOTE that this template is not currently used, it only servers as an example.
$content = preg_replace(['/^\<div[^\>]+\>/', '/\<\/div\>$/'], '', trim($content));
?>

<div class="<?= implode($classes, ' '); ?>" style="flex-basis: <?= $attributes['width'] ?? 50; ?>%">
  <?= $content; ?>
</div>