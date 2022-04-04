<?php

/**
 * Custom REST API endpoint that returns dummy events (no database query)
 */
function rig_events(\WP_REST_Request $request)
{
    $events = [];

    $generateText = function () {
        $arr = explode(' ', 'lorem ipsum dolor sit amet consectetur adipiscing elit duis dignissim massa vitae lacus hendrerit at aliquet elit tincidunt');
        shuffle($arr);
        $words = array_slice($arr, rand(0, 3), rand(6, 10));
        $words[0] = ucfirst($words[0]);

        return implode(' ', $words);
    };

    for ($i = 1; $i <= 47; $i++) {
        $events[] = [
            'id' => $i,
            'title' => $generateText(),
            'time' => '2022-01-' . rand(1, 29) . ' ' . rand(10, 16) . ':00:00',
        ];
    }

    return rest_ensure_response($events);
}

add_action('rest_api_init', function () {
    register_rest_route('rig', '/events', [
        'methods' => 'GET',
        'callback' => 'rig_events',
        'permission_callback' => '__return_true',
    ]);
});
