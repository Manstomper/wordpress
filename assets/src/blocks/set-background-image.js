/**
 * Add background image setting
 * Note that at the time of writing, it's not possible to add attributes to custom blocks. You need to add "example: {type: 'something'}" when registering your block.
 * https://github.com/WordPress/gutenberg/issues/9757
 */

(function() {

  const { __ } = wp.i18n;
  const { addFilter } = wp.hooks;
  const { withSelect } = wp.data;
  const { createHigherOrderComponent } = wp.compose;
  const { Fragment } = wp.element;
  const { InspectorControls, MediaPlaceholder } = wp.editor;
  const { PanelBody, PanelRow, Button } = wp.components;
  const el = wp.element.createElement;

  const enableForBlocks = [
    'rig/sample'
  ];

  /**
   * Register attribute(s)
   */
  addFilter('blocks.registerBlockType', 'rig/background-image-attributes', function(settings, name) {
    if (enableForBlocks.includes(name)) {
      settings.attributes = {
        ...settings.attributes,
        imageId: {
          type: 'number'
        },
        imageUrl: {
          type: 'string'
        }
      };
    }

    return settings;
  });

  /**
   * Add background image selection to Inspector Controls
   */
  const onEdit = function(BlockEdit, props) {
    if (!enableForBlocks.includes(props.name)) {
      return el(BlockEdit, props);
    }

    // Default elements
    var imageUrl = '';
    var image = el('p', null, __('Loading', 'rig'));
    var controls = el(Button,
      {
        isDefault: true,
        isSmall: true,
        onClick: function() {
          props.setAttributes({ imageId: null, imageUrl: null });
        }
      },
      __('Clear', 'rig')
    );

    // Image has not been selected, show media placeholder
    if (!props.attributes.imageId) {
      image = null;

      controls = el(
        MediaPlaceholder, {
          allowedTypes: ['image'],
          multiple: false,
          onSelect: function(val) {
            props.setAttributes({ imageId: val.id });
          }
        }
      );
    }
    // Image data has been fetched, show image
    else if (props.image) {
      imageUrl = props.image.media_details.sizes.large.source_url;
      image = el('div', null,
        el('img', { src: props.image.media_details.sizes.medium.source_url })
      );
    }

    return el('div',
      {
        className: (imageUrl ? 'has-background-image' : ''),
        style: { backgroundImage: 'url(' + imageUrl + ')' }
      },
      el(
        Fragment, null,
        el(
          BlockEdit,
          props
        ),
        el(InspectorControls, null,
          el(PanelBody, { title: __('Background image', 'rig'), initialOpen: true },
            el(PanelRow, null, image),
            el(PanelRow, null, controls)
          )
        )
      )
    );
  }

  const withBackgroundImage = createHigherOrderComponent(function(BlockEdit) {
    return withSelect(function(select, props) {
      return { image: props.attributes.imageId ? select('core').getMedia(props.attributes.imageId) : null };
    })(function(props) {
      return onEdit(BlockEdit, props);
    });
  }, 'withBackgroundImage');

  addFilter('editor.BlockEdit', 'rig/background-image-controls', withBackgroundImage);

  /**
   * Modify save function
   */
  function saveBackgroundImage(element, block, attributes) {
    if (!enableForBlocks.includes(block.name)) {
      return element;
    }

    // Delete empty attribute to keep database clean
    if (!attributes.imageId) {
      delete attributes.imageId;
    }

    return element;
  }

  addFilter('blocks.getSaveElement', 'rig/save-background-image', saveBackgroundImage);

}());
