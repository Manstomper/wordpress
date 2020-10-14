<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php wp_title('|', true, 'right') ?? bloginfo('title'); ?></title>
  <?php wp_head(); ?>
</head>

<body>