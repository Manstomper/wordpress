<?php
// This is of limited use because templateLock and allowedBlocks cannot be set inside a column
// It might make more sense to use a block pattern
$allowedBlocks = [
    'core/column',
];
$template = [
    ['core/heading'],
    ['core/columns', ['verticalAlignment' => 'center'], [
        [
            'core/column', [], [
                ['core/heading', ['level' => 3]],
                ['core/paragraph', ['placeholder' => 'Custom placeholder']],
            ],
        ],
        [
            'core/column', [], [
                ['core/cover', ['dimRatio' => 0], [
                    ['core/paragraph', ['placeholder' => '']],
                ]],
            ],
        ],
    ]],
];
?>

<section class="block-boxes">
    <InnerBlocks allowedBlocks="<?= esc_attr(wp_json_encode($allowedBlocks)); ?>" template="<?= esc_attr(wp_json_encode($template)); ?>" />
</section>
