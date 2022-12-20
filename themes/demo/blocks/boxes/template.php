<?php
$allowedBlocks = [
    'acf/box',
];
$template = [
    ['acf/box'],
    ['acf/box'],
];
?>

<section class="<?= rig_get_block_classes($attributes); ?>">
    <InnerBlocks allowedBlocks="<?= esc_attr(wp_json_encode($allowedBlocks)); ?>" template="<?= esc_attr(wp_json_encode($template)); ?>" />
</section>
