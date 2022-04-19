/* global wp */

/**
 * Custom styles and formats
 */
wp.domReady(function () {
  const { __ } = wp.i18n;
  const { registerBlockStyle } = wp.blocks;

  registerBlockStyle('core/columns', [
    {
      name: 'default',
      label: __('Default', 'rig'),
      isDefault: true,
    },
    {
      name: 'collapse',
      label: __('Collapse', 'rig'),
    },
  ]);

  registerBlockStyle('core/group', [
    {
      name: 'default',
      label: __('Default', 'rig'),
      isDefault: true,
    },
    {
      name: 'centered',
      label: __('Center', 'rig'),
    },
  ]);

  registerBlockStyle('acf/banner', [
    {
      name: 'image-left',
      label: __('Image on left', 'rig'),
      isDefault: true,
    },
    {
      name: 'image-right',
      label: __('Image on right', 'rig'),
    },
    {
      name: 'image-above',
      label: __('Image above', 'rig'),
    },
  ]);
});
