<?php

/**
 * Sample meta box for adding an arbitrary value
 */
function rig_fruit_meta($post)
{
    $value = get_post_meta($post->ID, 'fruit', true); ?>
    <div class="components-base-control">
        <div class="components-base-control__field">
            <label class="components-base-control__label" for="rig-fruit"><?= __('Select fruit', 'rig'); ?></label>
            <select id="rig-fruit" class="components-select-control__input" style="width: 85%;" name="rig_fruit">
                <option value=""></option>
                <option value="banana" <?= ($value == 'banana' ? 'selected' : ''); ?>><?= __('Banana', 'rig'); ?></option>
                <option value="apple" <?= ($value == 'apple' ? 'selected' : ''); ?>><?= __('Apple', 'rig'); ?></option>
                <option value="mango" <?= ($value == 'mango' ? 'selected' : ''); ?>><?= __('Mango', 'rig'); ?></option>
            </select>
        </div>
    </div>
<?php }

add_action('add_meta_boxes', function () {
    add_meta_box('rig_fruit', __('Example meta box', 'rig'), 'rig_fruit_meta', 'post', 'side');
});

add_action('save_post', function ($postId) {
    $fruit = $_POST['rig_fruit'] ?? null;

    if ($fruit) {
        update_post_meta($postId, 'fruit', $fruit);
    } else {
        delete_post_meta($postId, 'fruit');
    }
});

add_filter('manage_post_posts_columns', function ($columns) {
    return array_merge($columns, ['fruit-column' => __('Example column showing a fruit', 'rig')]);
}, 10, 1);

add_action('manage_post_posts_custom_column', function ($columnKey, $postId) {
    if ($columnKey === 'fruit-column') {
        echo get_post_meta($postId, 'fruit', true);
    }
}, 10, 2);
