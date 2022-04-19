<header>
    <p>This is the site-wide header.</p>
    <?php
    wp_nav_menu([
        'menu' => 'main',
        'container' => 'nav',
        'container_class' => 'nav',
        'items_wrap' => '<ul>%3$s</ul>',
        'item_spacing' => 'discard',
        // @TODO WIP
        //'walker' => new RiG\Menu(),
    ]);
    ?>
</header>
