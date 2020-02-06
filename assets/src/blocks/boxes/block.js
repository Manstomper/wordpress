(function() {

  const {__} = wp.i18n;

  wp.blocks.registerBlockType('rig/boxes', {
    title: __('Boxes', 'rig'),
    icon: 'screenoptions',
    category: 'layout',
    styles: [
      {
        name: 'default',
        label: __('Default', 'rig'),
        isDefault: true
      },
      {
        name: 'test',
        label: __('Test style that doesn\'t do anything', 'rig'),
        isDefault: false
      }
    ],
    edit: onEdit,
    save: onSave
  });

  function onEdit() {
    const blocks = wp.element.createElement(
      wp.editor.InnerBlocks, {
        allowedBlocks: [
          'rig/box'
        ],
        template: [
          ['rig/box']
        ]
      }
    );

    return blocks;
  }

  function onSave(props) {
    return wp.element.createElement(wp.editor.InnerBlocks.Content);
  }

}());
