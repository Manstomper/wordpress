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

$imageId = get_field('image_id');
$image = $imageId ? wp_get_attachment_image($imageId, 'large') : null;
?>

<section class="block-banner">
    <?php if ($image) { ?>
        <div>
            <?= $image; ?>
        </div>
    <?php } ?>
    <div>
        <InnerBlocks allowedBlocks="<?= esc_attr(wp_json_encode($allowedBlocks)); ?>" template="<?= esc_attr(wp_json_encode($template)); ?>" />
    </div>
</section>
