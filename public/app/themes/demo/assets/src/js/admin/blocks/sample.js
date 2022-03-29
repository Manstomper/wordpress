/* global wp */

(function () {
  const { __ } = wp.i18n;
  const { registerBlockType } = wp.blocks;
  const { InspectorControls, InnerBlocks } = wp.editor;
  const { PanelBody, PanelRow, TextControl } = wp.components;
  const el = wp.element.createElement;

  registerBlockType('rig/sample', {
    title: __('Sample block', 'rig'),
    icon: 'carrot',
    category: 'layout',
    attributes: {
      exampleValue: {
        type: 'string',
      },
      imageId: {
        type: 'number',
      },
    },
    edit: onEdit,
    save: onSave,
  });

  function onEdit(props) {
    /*
    HTML element
    */
    const exampleElement = el(
      'p',
      {
        style: { color: 'blue' },
      },
      'This is a static paragraph. You cannot edit its content, nor will it be saved to database.'
    );

    /*
    Input element
    */
    const exampleInputControl = el(TextControl, {
      label: __('Sample block', 'rig'),
      value: props.attributes.exampleValue,
      onChange: function (val) {
        props.setAttributes({ exampleValue: val });
      },
    });

    /*
    InnerBlocks
    */
    const exampleInnerBlocks = el(InnerBlocks, {
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/list', 'core/image'],
      template: [['core/heading'], ['core/paragraph']],
    });

    /*
    InspectorControls (lefthand sidebar)
    */
    const exampleInspectorControls = el(
      InspectorControls,
      null,
      el(
        PanelBody,
        {
          title: 'This is a panel body',
          initialOpen: true,
        },
        el(PanelRow, null, el('p', null, 'This is a paragraph in a panel row'))
      )
    );

    return [exampleElement, exampleInputControl, exampleInnerBlocks, exampleInspectorControls];
  }

  function onSave() {
    return el(InnerBlocks.Content);
  }
})();
