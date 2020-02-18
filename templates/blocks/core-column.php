<?php
$classes = 'wp-block-column';
$classes .= (isset($attributes['backgroundColor']) ? ' has-' . $attributes['backgroundColor'] . '-background-color' : '');
$classes .= (isset($attributes['textColor']) ? ' has-' . $attributes['textColor'] . '-color' : '');

$width = (isset($attributes['width']) ? $attributes['width'] : 50);

// This is one way of customizing core block output. Unlike adding a custom class name, it doesn't lock the site into using custom logic.
// Could also just add a wrapper and ignore the fact that flex-basis is set twice.
$content = trim($content);
$content = preg_replace('/^\<div[^\>]+\>/', '', $content);
$content = preg_replace('/\<\/div\>$/', '', $content);
?>

<div class="<?= $classes; ?>" style="flex-basis: <?= $width; ?>%">
  <?= $content; ?>
</div>