/**
 * Add background and text color settings to blocks
 * Note that at the time of writing, it's not possible to add attributes to custom blocks. You need to add "example: {type: 'something'}" when registering your block.
 * https://github.com/WordPress/gutenberg/issues/9757
 *
 * In this example we're not adding custom class names to the output. Instead, color slugs are written to attributes and handled in a template override.
 */

(function() {

  const { __ } = wp.i18n;
  const { addFilter } = wp.hooks;
  const { createHigherOrderComponent } = wp.compose;
  const { Fragment } = wp.element;
  const { withColors, InspectorControls, PanelColorSettings } = wp.editor;
  const el = wp.element.createElement;

  const enableForBlocks = [
    'rig/sample'
  ];

  /**
   * Register attributes
   */
  addFilter('blocks.registerBlockType', 'rig/color-attributes', function(settings, name) {
    if (enableForBlocks.includes(name)) {
      settings.attributes = {
        ...settings.attributes,
        backgroundColor: {
          type: 'string'
        },
        textColor: {
          type: 'string'
        }
      };
    }

    return settings;
  });

  /**
   * Add color palette to Inspector Controls
   */
  const onEdit = function(BlockEdit, props) {
    if (!enableForBlocks.includes(props.name)) {
      return el(BlockEdit, props);
    }

    return el('div',
      {
        className: (props.backgroundColor.color ? 'has-background-color' : ''),
        style: { backgroundColor: props.backgroundColor.color, color: props.textColor.color }
      },
      el(
        Fragment, null,
        el(
          BlockEdit,
          props
        ),
        el(InspectorControls, null,
          el(PanelColorSettings, {
            title: __('Color settings', 'rig'),
            colorSettings: [
              {
                label: __('Background color', 'rig'),
                value: props.backgroundColor.color,
                onChange: props.setBackgroundColor
              },
              {
                label: __('Text color', 'rig'),
                value: props.textColor.color,
                onChange: props.setTextColor
              }
            ]
          })
        )
      )
    );
  };

  const withColorSettings = createHigherOrderComponent(function(BlockEdit) {
    return withColors('backgroundColor', 'textColor')(function(props) {
      return onEdit(BlockEdit, props);
    });
  }, 'withColorSettings');

  addFilter('editor.BlockEdit', 'rig/color-controls', withColorSettings);

}());
