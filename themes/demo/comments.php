<?php
$comments = (new WP_Comment_Query)->query(['status' => 'approve']);

if (!$comments) {
    return;
}
?>

<section class="comments">
    <h2><?= rig_translate('Comments'); ?></h2>
    <?php foreach ($comments as $comment) { ?>
        <blockquote>
            <p><?= $comment->comment_content; ?></p>
        </blockquote>
    <?php } ?>
</section>
