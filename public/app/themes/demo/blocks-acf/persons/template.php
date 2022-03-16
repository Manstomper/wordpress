<?php $people = get_field('people'); ?>

<section class="block-persons">
    <?php foreach ($people as $postId) { ?>
        <?php
        $blocks = rig_get_blocks($postId);
        $block = $blocks[0] ?? [];
        var_dump($block);

        $firstName = rig_get_field('first_name', $block);
        $lastName = rig_get_field('last_name', $block);
        $businessTitle = rig_get_field('business_title', $block);
        $phone = rig_get_field('phone', $block);
        $email = rig_get_field('email', $block);
        ?>
    <?php } ?>
</section>
