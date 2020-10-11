<?php

class rigExample extends WP_Widget
{
  function __construct() {
    parent::__construct('rig-example', __('Custom widget', 'rig'));

    add_action('widgets_init', function() {
      register_widget('rigExample');
    });
  }

  public function widget($args, $instance) {
    echo $args['before_widget'];

    $title = !empty($instance['title']) ? $instance['title'] : '';

    if ($title) {
			echo $args['before_title'] . $title . $args['after_title'];
		}

    echo '<p>Hello</p>';

    echo $args['after_widget'];
  }

  public function form($instance) {
    $title = !empty($instance['title']) ? $instance['title'] : '';

    ?>
    <p>
      <label for="<?= esc_attr($this->get_field_id('title')); ?>"><?= esc_html__('Title:'); ?></label>
      <input class="widefat" id="<?= esc_attr($this->get_field_id('title')); ?>" name="<?= esc_attr($this->get_field_name('title')); ?>" type="text" value="<?= esc_attr($title); ?>">
    </p>
    <?php
  }

  public function update($newInstance, $oldInstance) {
    $instance = [];

    $instance['title'] = (!empty($newInstance['title']) ) ? strip_tags($newInstance['title']) : '';

    return $instance;
  }
}

$rigExample = new rigExample();
