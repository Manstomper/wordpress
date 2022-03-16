<section class="block-person">
    <?= get_field('first_name'); ?> <?= get_field('last_name'); ?><br>
    <?= get_field('business_title'); ?>
    <?php if (get_field('email')) { ?>
        <br><a href="mailto:<?= get_field('email'); ?>"><?= get_field('email'); ?></a>
    <?php } ?>
    <?php if (get_field('phone')) { ?>
        <br><a href="tel:<?= str_replace(' ', '', get_field('phone')); ?>"><?= get_field('phone'); ?></a>
    <?php } ?>
</section>
