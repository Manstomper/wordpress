<?php
$imageUrl = '';

if (has_post_thumbnail()) {
  $imageUrl = get_the_post_thumbnail_url();
}
else {
  $imageUrl = get_the_post_thumbnail_url((int) get_option('page_on_front'));
}
?>

<?php if ($imageUrl) { ?>
  <div class="hero" style="background-image: url('<?= $imageUrl; ?>');"></div>
<?php } ?>