/**
 * Custom styles and formats
 */
wp.domReady(function() {

  wp.blocks.registerBlockStyle('rig/boxes', [
    {
      name: 'default',
      label: 'Oletus',
      isDefault: true
    },
    {
      name: 'test',
      label: 'Testi'
    }
  ]);

});
