<?php
$persons = get_field('persons');

if (!$persons) {
    return;
}
?>

<section class="block-persons">
    <h2><?= rig_translate('Contact persons'); ?></h2>
    <ul>
        <?php foreach ($persons as $postId) { ?>
            <li>
                <?php
                $blocks = rig_get_blocks($postId);
                $block = $blocks[0] ?? null;
                if (!$block) {
                    continue;
                }
                $firstName = rig_get_field('first_name', $block);
                $lastName = rig_get_field('last_name', $block);
                $email = rig_get_field('email', $block);
                $phone = rig_get_field('phone', $block);
                ?>

                <?= $firstName; ?> <?= $lastName; ?>
                <?php if ($email) { ?>
                    <br><a href="mailto:<?= $email; ?>"><?= $email; ?></a>
                <?php } ?>
                <?php if ($phone) { ?>
                    <br><a href="tel:<?= str_replace(' ', '', $phone); ?>"><?= $phone; ?></a>
                <?php } ?>
            </li>
        <?php } ?>
    </ul>
</section>
