<?php
$theme = (isset($attributes['theme']) ? 'theme ' . $attributes['theme'] : '');
// This is one way of customizing core block output. Unlike adding a class name, doesn't lock the site into custom logic.
$content = trim($content);
$content = preg_replace('/^\<div[^\>]+\>/', '', $content);
$content = preg_replace('/\<\/div\>$/', '', $content);
?>

<div class="wp-block-column <?= $theme; ?>" style="flex-basis: <?= $attributes['width']; ?>%">
  <?= $content; ?>
</div>