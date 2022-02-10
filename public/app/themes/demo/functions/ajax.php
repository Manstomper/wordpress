<?php

/**
 * Admin AJAX example
 */
function ajax_example()
{
    $q = new \WP_Query([
        'post_type' => 'post',
        'posts_per_page' => 1,
        'ignore_sticky_posts' => true,
        'post_status' => current_user_can('edit_posts') ? ['publish', 'private'] : 'publish',
    ]);

    ob_start();

    if ($q->have_posts()) {

        while ($q->have_posts()) {
            $q->the_post();

            include locate_template('templates/content.php');
        }
    }

    $html = ob_get_clean();

    wp_send_json([
        'html' => $html,
    ]);

    die();
}

add_action('wp_ajax_ajaxexample', 'ajax_example');
add_action('wp_ajax_nopriv_ajaxexample', 'ajax_example');
