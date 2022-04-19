<style>
    .rig-style-guide {
        max-width: 100%;
        padding: 10px;
        background-color: #eee;
        font-size: 16px;
    }

    article>*:hover {
        outline: 1px dashed #666;
    }
</style>

<?php

function style_guide_str($amount = null)
{
    $offset = rand(0, 3);

    if ($amount === 'short') {
        $length = rand(20, 22);
    } else {
        $length = rand(30, (46 - $offset));
    }

    $words = array_slice(explode(' ', 'lorem ipsum dolor sit amet consectetur adipiscing elit duis dignissim massa vitae lacus hendrerit at aliquet elit tincidunt donec felis odio mollis at mi at feugiat suscipit nisl suspendisse volutpat efficitur nisl ut condimentum est feugiat eu vivamus at diam aliquet sodales velit eu vulputate augue'), $offset, $length);
    $words[0] = ucfirst($words[0]);

    return implode(' ', $words);
}
?>
<article>
    <div data-app="events" class="events"></div>
    <div data-app="posts" class="posts"></div>
    <div data-app="examples"></div>

    <h1>Heading 1 <?= style_guide_str('short'); ?></h1>

    <p><strong>Paragraph.</strong> Lorem ipsum dolor <a href="#">sit amet consectetur adipiscing elit</a> duis dignissim <strong>massa vitae lacus</strong> hendrerit at aliquet elit <em>donec felis odio mollis</em> at mi at feugiat suscipit nisl suspendisse volutpat efficitur nisl ut condimentum est feugiat eu vivamus at diam aliquet sodales velit eu vulputate augue.</p>

    <h2>Heading 2 <?= style_guide_str('short'); ?></h2>

    <ul>
        <li><strong>List, unordered</strong></li>
        <li><?= style_guide_str(); ?></li>
        <li><?= style_guide_str('short'); ?></li>
    </ul>

    <h3>Heading 3 <?= style_guide_str('short'); ?></h3>

    <ol>
        <li><strong>List, ordered</strong></li>
        <li><?= style_guide_str(); ?></li>
        <li><?= style_guide_str('short'); ?></li>
    </ol>

    <h4>Heading 4 <?= style_guide_str('short'); ?></h4>

    <figure class="wp-block-table">
        <table>
            <thead>
                <tr>
                    <th>Table header 1</th>
                    <th>Table header 2</th>
                    <th>Table header 2</th>
                </tr>
            </thead>
            <tbody>
                <?php for ($i = 1; $i <= 3; $i++) { ?>
                    <tr>
                        <?php for ($j = 1; $j <= 3; $j++) { ?>
                            <td>Table cell <?= $j; ?></td>
                        <?php } ?>
                    </tr>
                <?php } ?>
            </tbody>
            <tfoot>
                <tr>
                    <td>Table footer 1</td>
                    <td>Table footer 2</td>
                    <td>Table footer 3</td>
                </tr>
            </tfoot>
        </table>
    </figure>

    <h5>Heading 5 <?= style_guide_str('short'); ?></h5>

    <blockquote class="wp-block-quote">
        <p><strong>Quote</strong></p>
        <p><?= style_guide_str('short'); ?>.</p>
        <p><?= style_guide_str(); ?>.</p>
        <cite>Firstname Lastname</cite>
    </blockquote>

    <h6>Heading 6 <?= style_guide_str('short'); ?></h6>

    <figure class="wp-block-pullquote">
        <blockquote>
            <p><strong>Pullquote</strong></p>
            <p><?= style_guide_str('short'); ?>.</p>
            <p><?= style_guide_str(); ?>.</p>
            <cite>Firstname Lastname</cite>
        </blockquote>
    </figure>

    <h2 class="rig-style-guide">Buttons</h2>
    <div class="wp-block-buttons">
        <div class="wp-block-button"><a class="wp-block-button__link" href="#">Buttons</a></div>
        <div class="wp-block-button"><a class="wp-block-button__link" href="#">Lorem ipsum</a></div>
    </div>

    <?php $image = '<figure class="wp-block-image size-large"><a href="/app/themes/demo/img/placeholder.png"><img loading="lazy" width="1024" height="682" data-id="102" src="/app/themes/demo/img/placeholder.png" /></a><figcaption>Image caption</figcaption></figure>'; ?>

    <h2 class="rig-style-guide">Image</h2>
    <?= $image; ?>

    <h2 class="rig-style-guide">Gallery</h2>
    <figure class="wp-block-gallery has-nested-images columns-default is-cropped">
        <?= $image . $image . $image . $image . $image; ?>
        <figcaption class="blocks-gallery-caption">Gallery caption</figcaption>
    </figure>

    <h2 class="rig-style-guide">Columns</h2>
    <div class="wp-block-columns">
        <div class="wp-block-column" style="flex-basis:33.33%">
            <h2>Heading</h2>
            <p><?= style_guide_str(); ?></p>
        </div>
        <div class="wp-block-column" style="flex-basis:66.66%">
            <h3>Heading</h3>
            <p><?= style_guide_str(); ?></p>
        </div>
    </div>

    <h2 class="rig-style-guide">Accordion</h2>
    <section class="block-accordion">
        <button type="button" aria-controls="block_1" aria-expanded="false" data-toggle="block_1">Accordion</button>
        <div id="block_1">
            <p><?= style_guide_str(); ?></p>
        </div>
    </section>

    <h2 class="rig-style-guide">Banner</h2>
    <section class="block-banner">
        <div class="text">
            <h2>Heading</h2>
            <p><?= style_guide_str(); ?></p>
            <div class="wp-block-button"><a class="wp-block-button__link" href="#">Button</a></div>
        </div>
    </section>

    <h2 class="rig-style-guide">Banner (with image)</h2>
    <section class="block-banner">
        <div class="image">
            <img src="/app/themes/demo/img/placeholder.png" alt="Placeholder" />
        </div>
        <div class="text">
            <h2>Heading</h2>
            <p><?= style_guide_str(); ?></p>
            <div class="wp-block-button"><a class="wp-block-button__link" href="#">Button</a></div>
        </div>
    </section>

    <h2 class="rig-style-guide">Posts</h2>
    <div class="wp-block-group has-background has-primary-background-color is-style-centered">
        <h2>Heading</h2>
        <p><?= style_guide_str(); ?></p>
        <section class="block-posts">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <?php for ($i = 1; $i <= 10; $i++) { ?>
                        <a class="swiper-slide" href="http://localhost:8100/sample-page/">
                            <article>
                                <div class="image"><img src="/app/themes/demo/img/placeholder.png" alt="Placeholder"></div>
                                <p><?= style_guide_str('short'); ?></p>
                            </article>
                        </a>
                    <?php } ?>
                </div>
            </div>
        </section>
        <div class="wp-block-buttons">
            <div class="wp-block-button has-custom-width wp-block-button__width-50"><a class="wp-block-button__link" href="#">Button</a></div>
        </div>
    </div>

</article>
