(function() {

  const {__} = wp.i18n;

  wp.blocks.registerBlockType('rig/sample', {
    title: __('Block with all toppings', 'rig'),
    icon: 'carrot',
    category: 'layout',
    attributes: {
      backgroundColor: {
        type: 'string'
      },
      textColor: {
        type: 'string'
      },
      imageId: {
        type: 'number'
      }
    },
    edit: onEdit,
    save: onSave
  });

  function onEdit(props) {
    /*
    InnerBlocks
    */
    const blocks = wp.element.createElement(
      wp.editor.InnerBlocks, {
        allowedBlocks: [
          'core/heading',
          'core/paragraph',
          'core/list',
          'core/image',
          'rig/list-posts'
        ]
      }
    );

    return [
      blocks
    ];
  }

  function onSave(props) {
    return wp.element.createElement(wp.editor.InnerBlocks.Content);
  }

}());
