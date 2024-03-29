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

$image = get_field('image_id') ? wp_get_attachment_image(get_field('image_id'), 'large') : null;
?>

<section class="<?= rig_get_block_classes($attributes); ?>">
    <div class="container">
        <?php if ($image) { ?>
            <div class="image">
                <?= $image; ?>
            </div>
        <?php } ?>
        <div class="text">
            <InnerBlocks allowedBlocks="<?= esc_attr(wp_json_encode($allowedBlocks)); ?>" template="<?= esc_attr(wp_json_encode($template)); ?>" templateLock="all" />
        </div>
    </div>
</section>
