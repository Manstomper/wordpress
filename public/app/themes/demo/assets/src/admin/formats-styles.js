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
      name: 'example',
      label: __('Test', 'rig')
    }
  ]);

  registerBlockStyle('core/columns', [
    {
      name: 'default',
      label: __('Default', 'rig'),
      isDefault: true
    },
    {
      name: 'collapse',
      label: __('Collapse', 'rig')
    }
  ]);

});
