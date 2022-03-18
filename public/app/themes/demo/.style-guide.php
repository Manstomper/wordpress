<?php
trigger_error('foobar');

function style_guide_str($amount = null)
{
    $offset = rand(0, 5);

    if ($amount === 'long') {
        $length = rand(30, 46);
    } elseif ($amount === 'short') {
        $length = rand(10, 12);
    } elseif ($amount === 'mini') {
        $length = rand(6, 7);
    } elseif ($amount === 'range') {
        $length = rand(20, 46);
    } else {
        $length = rand(15, 20);
    }

    $words = array_slice(explode(' ', 'lorem ipsum dolor sit amet consectetur adipiscing elit duis dignissim massa vitae lacus hendrerit at aliquet elit tincidunt donec felis odio mollis at mi at feugiat suscipit nisl suspendisse volutpat efficitur nisl ut condimentum est feugiat eu vivamus at diam aliquet sodales velit eu vulputate augue'), $offset, $length);
    $words[0] = ucfirst($words[0]);

    return implode(' ', $words);
}
?>
<article>
    <h1><?= style_guide_str(); ?> H1</h1>

    <p><?= style_guide_str('long'); ?>. P</p>

    <h2><?= style_guide_str(); ?> H2</h2>

    <ul>
        <?php for ($i = 0; $i <= 5; $i++) { ?>
            <li><?= style_guide_str('range'); ?></li>
        <?php } ?>
    </ul>

    <h3><?= style_guide_str(); ?> H3</h3>

    <ol>
        <?php for ($i = 0; $i <= 5; $i++) { ?>
            <li><?= style_guide_str('range'); ?></li>
        <?php } ?>
    </ol>

    <h4><?= style_guide_str(); ?> H4</h4>

    <blockquote class="wp-block-quote">
        <p><?= style_guide_str('short'); ?></p>
        <p><?= style_guide_str(); ?></p>
        <cite>Firstname Lastname</cite>
    </blockquote>

    <h5><?= style_guide_str(); ?> H5</h5>

    <figure class="wp-block-table">
        <table>
            <thead>
                <tr>
                    <th>Table header 1</th>
                    <th>Header 2</th>
                    <th>Table header 2</th>
                </tr>
            </thead>
            <tbody>
                <?php for ($i = 1; $i <= 5; $i++) { ?>
                    <tr>
                        <?php for ($j = 1; $j <= 3; $j++) { ?>
                            <td><?= style_guide_str('mini'); ?></td>
                        <?php } ?>
                    </tr>
                <?php } ?>
            </tbody>
            <tfoot>
                <tr>
                    <td>Table footer 1</td>
                    <td>Footer 2</td>
                    <td>Table footer 3</td>
                </tr>
            </tfoot>
        </table>
    </figure>

    <h6><?= style_guide_str(); ?> H6</h6>

    <?php $image = '<figure class="wp-block-image size-large"><a href="http://localhost:8100/app/uploads/2022/03/bird.jpg"><img loading="lazy" width="1024" height="682" data-id="102" src="http://localhost:8100/app/uploads/2022/03/bird-1024x682.jpg" alt="" /></a><figcaption>Image caption</figcaption></figure>'; ?>

    <?= $image; ?>

    <div class="wp-block-buttons">
        <div class="wp-block-button"><a class="wp-block-button__link" href="#">Button text</a></div>
        <div class="wp-block-button"><a class="wp-block-button__link" href="#">Lorem ipsum</a></div>
    </div>

    <figure class="wp-block-gallery has-nested-images columns-default is-cropped">
        <?= $image . $image . $image . $image . $image; ?>
        <figcaption class="blocks-gallery-caption">Gallery caption</figcaption>
    </figure>

    <div class="wp-block-columns">
        <div class="wp-block-column" style="flex-basis:33.33%">
            <h2>Column 1</h2>
            <p><?= style_guide_str('long'); ?></p>
        </div>
        <div class="wp-block-column" style="flex-basis:66.66%">
            <h2>Column 2</h2>
            <p><?= style_guide_str('long'); ?></p>
        </div>
    </div>

    <section class="block-accordion">
        <button type="button" aria-controls="block_1" aria-expanded="false" data-toggle="block_1">Toggle</button>
        <div id="block_1">
            <p><?= style_guide_str('long'); ?></p>
        </div>
    </section>

    <section class="block-banner">
        <div>
            <h2>Banner title</h2>
            <p><?= style_guide_str(); ?></p>
            <div class="wp-block-button"><a class="wp-block-button__link" href="#">asdf</a></div>
        </div>
    </section>

    <section class="block-banner">
        <div>
            <img src="http://localhost:8100/app/uploads/2022/03/flowers-1024x683.jpg" alt="" />
        </div>
        <div>
            <h2>Banner title</h2>
            <p><?= style_guide_str(); ?></p>
            <div class="wp-block-button"><a class="wp-block-button__link" href="#">asdf</a></div>
        </div>
    </section>

</article>
