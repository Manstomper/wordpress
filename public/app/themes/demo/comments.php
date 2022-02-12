<?php

$comments = (new WP_Comment_Query)->query([
    'status' => 'approve',
]);

if ($comments) {
    foreach ($comments as $comment) {
        echo '<p>' . $comment->comment_content . '</p>';
    }
}
