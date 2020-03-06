(function() {

  const { __ } = wp.i18n;
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.editor;
  const el = wp.element.createElement;

  wp.blocks.registerBlockType('rig/sample', {
    title: __('Sample block', 'rig'),
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
    const blocks = el(
      InnerBlocks, {
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
    return el(InnerBlocks.Content);
  }

}());
