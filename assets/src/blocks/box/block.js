(function() {

  const {__} = wp.i18n;

  wp.blocks.registerBlockType('rig/box', {
    title: __('Box', 'rig'),
    icon: 'screenoptions',
    category: 'layout',
    parent: ['rig/boxes'],
    attributes: {
      columns: {
        type: 'number'
      },
      theme: {
        type: 'string'
      }
    },
    edit: onEdit,
    save: onSave
  });

  function onEdit(props) {
    const blocks = wp.element.createElement(
      wp.editor.InnerBlocks, {
        allowedBlocks: [
          'core/heading',
          'core/paragraph',
          'core/list',
          'core/image',
          'core/html'
        ]
      }
    );

    const options = [{value: 0, label: __('Unset', 'rig')}];

    for (let i = 12; i >= 1; i--) {
      options.push({value: i, label: i});
    }

    inspectorControls = wp.element.createElement(wp.editor.InspectorControls, null,
      wp.element.createElement(wp.components.PanelBody, {title: __('Appearance', 'rig'), initialOpen: true},
        wp.element.createElement(wp.components.PanelRow, null,
          wp.element.createElement(wp.components.SelectControl, {
            label: __('Column width', 'rig'),
            options: options,
            value: props.attributes.columns,
            onChange: function(val) {
              props.setAttributes({columns: val});
            }
          })
        )
      )
    );

    return [inspectorControls, blocks];
  }

  function onSave(props) {
    props.attributes.columns = parseInt(props.attributes.columns) || 0;

    if (!props.attributes.columns) {
      delete props.attributes.columns;
    }

    return wp.element.createElement(wp.editor.InnerBlocks.Content);
  }

}());
