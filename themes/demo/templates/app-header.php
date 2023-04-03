<header>
    <p>This is the site-wide header.</p>

    <?php
    wp_nav_menu([
        'menu' => 'main',
        'container' => 'nav',
        'container_class' => 'nav',
        'items_wrap' => '<ul>%3$s</ul>',
        'item_spacing' => 'discard',
    ]);
    ?>

    <?php if (function_exists('pll_the_languages')) { ?>
        <ul>
            <?php pll_the_languages(); ?>
        </ul>
    <?php } ?>
</header>
