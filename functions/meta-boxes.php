<?php

/**
 * Sample meta box for adding an arbitrary value
 */
function rig_fruit_meta($post) {
  $value = get_post_meta($post->ID, 'fruit', true);
  ?>
  <div class="components-base-control">
    <div class="components-base-control__field">
      <label class="components-base-control__label" for="rig-fruit"><?= __('Select fruit', 'rig'); ?></label>
      <select id="rig-fruit" class="components-select-control__input" style="width: 85%;" name="rig_fruit">
        <option value="banana" <?= ($value == 'banana' ? 'selected' : ''); ?>><?= __('Banana', 'rig'); ?></option>
        <option value="apple" <?= ($value == 'apple' ? 'selected' : ''); ?>><?= __('Apple', 'rig'); ?></option>
        <option value="mango" <?= ($value == 'mango' ? 'selected' : ''); ?>><?= __('Mango', 'rig'); ?></option>
      </select>
    </div>
  </div>
  <?php
}

function rig_add_fruit_meta() {
  add_meta_box('rig_fruit', __('Example meta box', 'rig'), 'rig_fruit_meta', 'post', 'side');
}

add_action('add_meta_boxes', 'rig_add_fruit_meta');

function rig_save_fruit($postId) {
  $fruit = array_key_exists('rig_fruit', $_POST) ? $_POST['rig_fruit'] : null;

  if ($fruit !== null) {
    update_post_meta($postId, 'fruit', (int) $fruit);
  }
}

add_action('save_post', 'rig_save_fruit');
