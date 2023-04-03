<?php
$firstName = get_field('first_name');
$lastName = get_field('last_name');
$businessTitle = get_field('business_title');
$email = get_field('email');
$phone = get_field('phone');
$role = get_field('role');
?>

<section class="<?= rig_get_block_classes($attributes); ?>">
    <?= $firstName; ?> <?= $lastName; ?><?= $businessTitle ? ', ' . $businessTitle : ''; ?>
    <?php if ($role) { ?>
        <br><?= $role['label']; ?>
    <?php } ?>
    <?php if ($email) { ?>
        <br><a href="mailto:<?= $email; ?>"><?= $email; ?></a>
    <?php } ?>
    <?php if ($phone) { ?>
        <br><a href="tel:<?= str_replace(' ', '', $phone); ?>"><?= $phone; ?></a>
    <?php } ?>
</section>
