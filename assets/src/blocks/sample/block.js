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
      imageId: {
        type: 'number'
      },
      imageUrl: {
        type: 'string'
      }
    },
    edit: wp.compose.compose(
      wp.editor.withColors('backgroundColor')
    )(onEdit),
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
          'core/image'
        ]
      }
    );

    /*
    Colors for Inspector controls
    */
    const colorControls = wp.element.createElement(wp.editor.PanelColorSettings, {
      title: __('Color settings', 'rig'),
      colorSettings: [
        {
          label: __('Background color', 'rig'),
          value: props.backgroundColor.color,
          onChange: props.setBackgroundColor
        }
      ]
    });

    /*
    Inspector controls
    */
    inspectorControls = wp.element.createElement(wp.editor.InspectorControls, null,
      colorControls
    );

    return [
      wp.element.createElement('div',
        {
          className: props.backgroundColor.class,
          style: {backgroundColor: props.backgroundColor.color}
        },
        inspectorControls,
        blocks
      )
    ];
  }

  function onSave(props) {
    return wp.element.createElement('div',
      {
        className: wp.editor.getColorClassName('background-color', props.attributes.backgroundColor)
      },
      wp.element.createElement(wp.editor.InnerBlocks.Content)
    );
  }

}());
