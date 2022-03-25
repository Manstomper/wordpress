<?php
$allowedBlocks = [
    'core/heading',
    'core/paragraph',
    'core/image',
];
?>

<section class="block-accordion">
    <button type="button" aria-controls="<?= $block['id']; ?>" aria-expanded="false" data-toggle="<?= $block['id']; ?>">
        <?= get_field('title'); ?>
    </button>
    <div id="<?= $block['id']; ?>">
        <InnerBlocks allowedBlocks="<?= esc_attr(wp_json_encode($allowedBlocks)); ?>" />
    </div>
</section>
