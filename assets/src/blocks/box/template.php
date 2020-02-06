<?php
$columns = (!empty($attributes['columns']) ? 'col-' . $attributes['columns'] : 'col')
?>

<div class="<?= $columns; ?>">
  <?= $content; ?>
</div>