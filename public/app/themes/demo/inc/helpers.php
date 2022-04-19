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
 * Gets a named field outside a Block
 * Note that this will always return the value. For fields with another Return Format, use rig_get_field_object()
 */
function rig_get_field($fieldName, $post = null)
{
    $postContent = get_post_field('post_content', $post);
    $blocks = parse_blocks($postContent);

    if (!empty($blocks) && is_array($blocks)) {
        foreach ($blocks as $b) {
            if (isset($b['attrs']['data'][$fieldName])) {
                return $b['attrs']['data'][$fieldName];
            }
        }
    }
}

/**
 * Gets a named field outside a Block, checks Return Format
 * Supports types "select", "image", "post_object", "taxonomy" and "relationship"
 */
function rig_get_field_object($fieldKey, $post = null)
{
    if (!function_exists('get_field_object') || !function_exists('acf_get_attachment')) {
        return;
    }

    $obj = get_field_object($fieldKey, $post);
    $value = rig_get_field($obj['name'], $post);
    $format = $obj['return_format'];

    if (!$value) {
        return;
    }

    switch ($obj['type']) {
        case 'select':
            if ($format === 'label') {
                return $obj['choices'][$value] ?? '';
            }
            if ($format === 'array') {
                return [
                    'value' => $value,
                    'label' => $obj['choices'][$value] ?? '',
                ];
            }
            break;
        case 'image':
            if ($format === 'array') {
                return acf_get_attachment((int) $value);
            }
            if ($format === 'url') {
                return wp_get_attachment_url((int) $value);
            }
            break;
        case 'post_object':
            if ($format === 'object') {
                return get_post((int) $value);
            }
            break;
        case 'taxonomy':
            if ($format === 'object') {
                return get_term((int) $value, $obj['taxonomy']);
            }
            break;
        case 'relationship':
            if ($format === 'object') {
                $return = [];
                foreach ($value as $postId) {
                    $return[] = get_post((int) $postId);
                }
                return $return;
            }
            break;
    }

    return $value;
}

/**
 * Gets and parses blocks from post_content outside of the block
 */
function rig_get_blocks($postId = null, $blockName = null)
{
    $postContent = get_post_field('post_content', $postId);
    $allBlocks = parse_blocks($postContent);

    if (empty($allBlocks) || !is_array($allBlocks)) {
        return [];
    }

    if ($blockName) {
        $findByName = function ($blocks, &$filteredBlocks) use (&$findByName, $blockName) {
            foreach ($blocks as $b) {
                if (!empty($b['innerBlocks'])) {
                    $findByName($b['innerBlocks'], $filteredBlocks);
                }
                if ($b['blockName'] === $blockName) {
                    $filteredBlocks[] = $b;
                }
            }
        };

        $filteredBlocks = [];
        $findByName($allBlocks, $filteredBlocks);
    }

    return $filteredBlocks ?? $allBlocks;
}
