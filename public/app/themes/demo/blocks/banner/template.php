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
$imageClasses = ['image'];

if (get_field('flip_order')) {
    $imageClasses[] = 'is-flipped';
}
?>

<section class="block-banner">
    <?php if ($image) { ?>
        <div class="<?= implode(' ', $imageClasses); ?>">
            <?= $image; ?>
        </div>
    <?php } ?>
    <div class="text">
        <InnerBlocks allowedBlocks="<?= esc_attr(wp_json_encode($allowedBlocks)); ?>" template="<?= esc_attr(wp_json_encode($template)); ?>" templateLock="all" />
    </div>
</section>
