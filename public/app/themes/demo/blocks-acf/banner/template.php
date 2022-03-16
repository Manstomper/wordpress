<?php
$allowedBlocks = [
    'core/heading',
    'core/paragraph',
    'core/image',
    'core/button',
];

$template = [
    ['core/heading'],
    ['core/paragraph', ['placeholder' => 'Custom placeholder']],
    ['core/button'],
];

$imageId = get_field('image');
$images = [
    'medium' => wp_get_attachment_image_url($imageId, 'medium'),
    'large' => wp_get_attachment_image_url($imageId, 'large'),
];
?>

<section class="block-banner">
    <div class="image"></div>
    <div>
        <InnerBlocks allowedBlocks="<?= esc_attr(wp_json_encode($allowedBlocks)); ?>" template="<?= esc_attr(wp_json_encode($template)); ?>" />
    </div>
</section>
