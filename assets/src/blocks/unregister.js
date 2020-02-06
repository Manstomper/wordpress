/**
 * Unregister blocks, formats and styles
 */
wp.domReady(function() {

  var allowedBlocks = [
    'core/block',
    'core/columns',
    'core/column',
    'core/column',
    'core/group',
    'core/heading',
    'core/paragraph',
    'core/list',
    'core/table',
    'core/quote',
    'core/image',
    'core/gallery',
    'core/html',
    'core/freeform',
    'rig/boxes',
    'rig/box'
  ];

  wp.blocks.getBlockTypes().forEach(function(blockType) {
    if (allowedBlocks.indexOf(blockType.name) === -1) {
      wp.blocks.unregisterBlockType(blockType.name);
    }
  });

  wp.richText.unregisterFormatType('core/strikethrough');

  wp.blocks.unregisterBlockStyle('core/quote', 'regular');
  wp.blocks.unregisterBlockStyle('core/quote', 'large');

});
