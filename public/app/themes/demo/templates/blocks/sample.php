<?php
$classes = ['block-sample'];
$classes[] = apply_filters('rig_color_class', ($attributes['backgroundColor'] ?? null), 'background-color');
$classes[] = apply_filters('rig_color_class', ($attributes['textColor'] ?? null), 'color');
$classes[] = $attributes['className'] ?? null;

$image = rig_image($attributes['imageId'] ?? null, 'full');
$css = $image ? 'background-image: url(\'' .  $image . '\')' : '';
?>

<div class="<?= implode(' ', $classes); ?>" style="<?= $css; ?>">
    <?= $content; ?>
</div>