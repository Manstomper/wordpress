/**
 * Unregister blocks, formats and styles
 */
wp.domReady(function() {

  var allowedBlocks = [
    'core/block',
    'core/columns',
    'core/column',
    'core/group',
    'core/heading',
    'core/paragraph',
    'core/list',
    'core/table',
    'core/quote',
    'core/button',
    'core/spacer',
    'core/image',
    'core/gallery',
    'core/cover',
    'core/media-text',
    'core/audio',
    'core/video',
    'core/file',
    'core/html',
    'core/freeform',
    'embed/vimeo',
    'embed/youtube',
    'embed/twitter',
    'embed/facebook',
    'embed/instagram'
  ];

  wp.blocks.getBlockTypes().forEach(function(blockType) {
    // Unregister only core blocks
    if (blockType.name.indexOf('core') === 0 && allowedBlocks.indexOf(blockType.name) === -1) {
      wp.blocks.unregisterBlockType(blockType.name);
    }
  });

  wp.richText.unregisterFormatType('core/strikethrough');

  wp.blocks.unregisterBlockStyle('core/quote', 'regular');
  wp.blocks.unregisterBlockStyle('core/quote', 'large');

});
