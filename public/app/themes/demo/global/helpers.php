<?php

/**
 * Wrapper for Polylang string translation
 */
function rig_translate($string)
{
    if (function_exists('pll__')) {
        return pll__($string);
    }

    return $string;
}

/**
 * Wrapper for Polylang function pll_current_language()
 */
function rig_current_language()
{
    return function_exists('pll_current_language') ? pll_current_language() : 'fi';
}

/**
 * Gets a named field outside the Block loop
 * There is no standard way of achieving this, so there's a theoretical possibility that something changes
 */
function rig_get_field($fieldName, $postId = null)
{
    $postContent = get_post_field('post_content', $postId);
    $blocks = parse_blocks($postContent);

    if (empty($blocks) || !is_array($blocks)) {
        return '';
    }

    for ($i = 0; $i < count($blocks); $i++) {
        if (isset($blocks[$i]['attrs']['data'][$fieldName])) {
            return $blocks[$i]['attrs']['data'][$fieldName];
        }
    }
}
