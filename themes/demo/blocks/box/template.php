<?php
$allowedBlocks = [
    'core/heading',
    'core/paragraph',
    'core/buttons',
    'core/image',
];
$template = [
    ['core/heading'],
    ['core/paragraph'],
];

$classes = rig_get_block_classes($attributes);

/*if (!empty($attributes['align_content'])) {
    $classes .= ' vertical-align-' . $attributes['align_content'];
}*/
//echo "\n\n<pre foo>" . print_r($attributes, true) . "</pre>\n\n";

$image = get_field('image_id') ? wp_get_attachment_image_src(get_field('image_id'), 'large') : null;
$css = !empty($image[0]) ? 'style="background-image: url(' . $image[0] . ');"' : '';
?>

<div class="<?= $classes; ?>" <?= $css; ?>>
    <div>
        <InnerBlocks allowedBlocks="<?= esc_attr(wp_json_encode($allowedBlocks)); ?>" template="<?= esc_attr(wp_json_encode($template)); ?>" />
    </div>
</div>
