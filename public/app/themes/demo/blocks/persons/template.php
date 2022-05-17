<?php
$foo = rig_get_field('first_name', 130);
var_dump($foo);
?>

<?php
$persons = get_field('persons');

if (!$persons) {
    return;
}
?>

<section class="<?= rig_get_block_classes($attributes); ?>">
    <h2><?= rig_translate('Contact persons'); ?></h2>
    <ul>
        <?php foreach ($persons as $postId) { ?>
            <li>
                <?php
                $email = rig_get_field('email', $postId);
                $phone = rig_get_field('phone', $postId);
                ?>

                <?= rig_get_field('first_name', $postId); ?> <?= rig_get_field('last_name', $postId); ?>

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
