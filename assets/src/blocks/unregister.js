/**
 * Unregister blocks, formats and styles
 */
wp.domReady(function() {

  const { unregisterBlockType, getBlockTypes } = wp.blocks;
  const richText = wp.richText;

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
    'core/image',
    'core/gallery',
    'core/cover',
    'core/media-text',
    'core/audio',
    'core/video',
    'core/file',
    'core/embed',
    'core/html',
    'core/freeform',
    'core-embed/vimeo',
    'core-embed/youtube',
    'core-embed/twitter',
    'core-embed/facebook',
    'core-embed/instagram'
  ];

  getBlockTypes().forEach(function(blockType) {
    // Unregister only core blocks
    if (blockType.name.indexOf('core') === 0 && allowedBlocks.indexOf(blockType.name) === -1) {
      unregisterBlockType(blockType.name);
    }
  });

  richText.unregisterFormatType('core/strikethrough');

});
