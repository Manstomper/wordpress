/**
 * Add background image setting
 * Note that at the time of writing, it's not possible to add attributes to custom blocks. You need to add "example: {type: 'something'}" when registering your block.
 * https://github.com/WordPress/gutenberg/issues/9757
 */

(function() {

  const {__} = wp.i18n;

  const enableForBlocks = [
    'rig/sample'
  ];

  /**
   * Register attribute(s)
   */
  wp.hooks.addFilter('blocks.registerBlockType', 'rig/background-image-attributes', function(settings, name) {
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
      return wp.element.createElement(BlockEdit, props);
    }

    // Default elements
    var imageUrl = '';
    var image = wp.element.createElement('p', null, __('Loading', 'rig'));
    var controls = wp.element.createElement(wp.components.Button,
      {
        isDefault: true,
        isSmall: true,
        onClick: function() {
          props.setAttributes({imageId: null, imageUrl: null});
        }
      },
      __('Clear', 'rig')
    );

    // Image has not been selected, show media placeholder
    if (!props.attributes.imageId) {
      image = null;

      controls = wp.element.createElement(
        wp.editor.MediaPlaceholder, {
          allowedTypes: ['image'],
          multiple: false,
          onSelect: function(val) {
            props.setAttributes({imageId: val.id});
          }
        }
      );
    }
    // Image data has been fetched, show image
    else if (props.image) {
      imageUrl = props.image.media_details.sizes.large.source_url;
      image = wp.element.createElement('div', null,
        wp.element.createElement('img', {src: props.image.media_details.sizes.medium.source_url})
      );
    }

    return wp.element.createElement('div',
      {
        className: (imageUrl ? 'has-background-image' : ''),
        style: {backgroundImage: 'url(' + imageUrl + ')'}
      },
      wp.element.createElement(
        wp.element.Fragment, null,
        wp.element.createElement(
          BlockEdit,
          props
        ),
        wp.element.createElement(wp.editor.InspectorControls, null,
          wp.element.createElement(wp.components.PanelBody, {title: __('Background image', 'rig'), initialOpen: true},
            wp.element.createElement(wp.components.PanelRow, null, image),
            wp.element.createElement(wp.components.PanelRow, null, controls)
          )
        )
      )
    );
  }

  const withBackgroundImage = wp.compose.createHigherOrderComponent(function(BlockEdit) {
    return wp.data.withSelect(function(select, props) {
      return {image: props.attributes.imageId ? select('core').getMedia(props.attributes.imageId) : null};
    })(function(props) {
      return onEdit(BlockEdit, props);
    });
  }, 'withBackgroundImage');

  wp.hooks.addFilter('editor.BlockEdit', 'rig/background-image-controls', withBackgroundImage);

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

  wp.hooks.addFilter('blocks.getSaveElement', 'rig/save-background-image', saveBackgroundImage);

}());
