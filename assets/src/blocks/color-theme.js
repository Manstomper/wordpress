/**
 * Add color theme selection
 * Note that at the time of writing, it's not possible to add attributes to custom blocks. You need to add "theme: {type: 'string'}" when registering your block.
 * https://github.com/WordPress/gutenberg/issues/9757
 */

(function() {

  const {__} = wp.i18n;

  const enableThemeForBlocks = [
    'core/column',
    'core/quote'
  ];

  const themes = {
    'default': __('White', 'rig'),
    'primary': __('Green', 'rig'),
    'secondary':  __('Blue', 'rig')
  };

  /**
   * Register theme attribute
   */
  wp.hooks.addFilter('blocks.registerBlockType', 'rig/add-theme-attribute', function(settings, name) {
    if (enableThemeForBlocks.includes(name)) {
      settings.attributes = {
        ...settings.attributes,
        theme: {
          type: 'string'
        }
      };
    }

    return settings;
  });

  /**
   * Add theme selection to inspector controls
   */
  const withTheme = wp.compose.createHigherOrderComponent(function(BlockEdit) {
    return function (props) {
      if (!enableThemeForBlocks.includes(props.name)) {
        return wp.element.createElement(BlockEdit, props);
      }

      const options = [];

      for (let [key, value] of Object.entries(themes)) {
        options.push({value: key, label: value});
      }

      return wp.element.createElement(
        wp.element.Fragment,
        null,
        wp.element.createElement(
          BlockEdit,
          props
        ),
        wp.element.createElement(wp.editor.InspectorControls, null,
          wp.element.createElement(wp.components.PanelBody, {title: __('Theme', 'rig'), initialOpen: true},
            wp.element.createElement(wp.components.PanelRow, null,
              wp.element.createElement(wp.components.SelectControl, {
                label: __('Select color theme', 'rig'),
                options: options,
                value: props.attributes.theme,
                onChange: function(val) {
                  props.setAttributes({theme: val});
                }
              })
            )
          )
        )
      );
    };
  }, 'withTheme');

  wp.hooks.addFilter('editor.BlockEdit', 'rig/add-theme-control', withTheme);

  /**
   * Save theme attribute
   */
  function saveThemeAttribute(element, block, attributes) {
    if (enableThemeForBlocks.includes(block.name)) {
      attributes.theme = attributes.theme || Object.keys(themes)[0];
    }

    return element;
  }

  wp.hooks.addFilter('blocks.getSaveElement', 'rig/save-theme', saveThemeAttribute);

  /**
   * Add theme CSS class name to attribute
   * This is one way of customizing core block output. Compared to overriding template, it locks the site into using a custom filter.
   */
  function addThemeClassName(props, blockType) {
    if (blockType.name !== 'core/quote') {
      return props;
    }

    var str = props.className || '';

    // Remove existing names
    for (let [key] of Object.entries(themes)) {
      let regex = new RegExp('\\b' + key + '\\b', 'g');
      str = str.replace(regex, '');
    }

    // Add selected theme name
    str += ' ' + (attributes.theme || Object.keys(themes)[0]);
    str = str.trim();

    Object.assign(props, {
      className: str
    });

    return props;
  }

  wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'rig/add-theme-class', addThemeClassName);

}());
