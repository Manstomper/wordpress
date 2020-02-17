/**
 * Add background image selection
 * Note that at the time of writing, it's not possible to add attributes to custom blocks. You need to add "theme: {type: 'string'}" when registering your block.
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
  wp.hooks.addFilter('blocks.registerBlockType', 'rig/background-image-attribute', function(settings, name) {
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
  const withBackgroundImage = wp.compose.createHigherOrderComponent(function(BlockEdit) {
    return function (props) {
      if (!enableForBlocks.includes(props.name)) {
        return wp.element.createElement(BlockEdit, props);
      }

      // Default elements
      var image = null;
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

      // True after query is done
      if (props.attributes.imageUrl) {
        image = wp.element.createElement('div', null,
          wp.element.createElement('img', {src: props.attributes.imageUrl})
        );
      }
      // Fetch image using REST API and then update attribute
      else if (props.attributes.imageId) {
        image = wp.element.createElement('p', null, __('Loading', 'rig'));

        wp.apiFetch({
          path: wp.url.addQueryArgs('/wp/v2/media', {id: props.attributes.imageId})
        })
        .then(function(result) {
          props.setAttributes({imageUrl: result[0].media_details.sizes.medium.source_url});
        });
      }
      // No image is selected
      else {
        controls = wp.element.createElement(
          wp.editor.MediaPlaceholder, {
            allowedTypes: ['image'],
            multiple: false,
            onSelect: function(val) {
              props.setAttributes({imageId: val.id});
            }
          }
        )
      }

      return wp.element.createElement(
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
      );
    };
  }, 'withBackgroundImage');

  wp.hooks.addFilter('editor.BlockEdit', 'rig/control-background-image', withBackgroundImage);

  /**
   * Modify save function
   */
  function saveBackgroundImage(element, block, attributes) {
    if (!enableForBlocks.includes(block.name)) {
      return element;
    }

    // Delete unnecessary attributes to keep database clean
    delete attributes.imageUrl;

    if (!attributes.imageId) {
      delete attributes.imageId;
    }

    return element;
  }

  wp.hooks.addFilter('blocks.getSaveElement', 'rig/save-background-image', saveBackgroundImage);

}());
