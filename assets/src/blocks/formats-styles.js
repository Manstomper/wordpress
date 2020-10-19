/**
 * Custom styles and formats
 */
wp.domReady(function() {

  const { __ } = wp.i18n;
  const { registerBlockStyle } = wp.blocks;

  registerBlockStyle('rig/sample', [
    {
      name: 'default',
      label: __('Default', 'rig'),
      isDefault: true
    },
    {
      name: 'test',
      label: __('Test', 'rig')
    }
  ]);

});
