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
 * Gets and parses blocks from post_content outside of a Loop
 * There is no standard way of achieving this, so there's a theoretical possibility that something changes
 */
function rig_get_blocks($postId)
{
    $postContent = get_post_field('post_content', $postId);
    $blocks = parse_blocks($postContent);

    if (!is_array($blocks)) {
        return [];
    }

    return $blocks;
}

/**
 * Gets a named field from a parsed block
 * There is no standard way of achieving this, so there's a theoretical possibility that something changes
 */
function rig_get_field($fieldName, $block)
{
    if (isset($block['attrs']['data'][$fieldName])) {
        return $block['attrs']['data'][$fieldName];
    }
}
