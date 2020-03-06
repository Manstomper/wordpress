/**
 * Move some blocks to a different category to reduce number of accordions
 */
(function() {

  wp.hooks.addFilter('blocks.registerBlockType', 'rig/recategorize', function(settings, name) {
    const common = ['core/table', 'core/button', 'core/html', 'core/freeform'];
    const layout = ['core/pullquote'];
    const media = ['core/image', 'core/gallery', 'core/cover', 'core/audio', 'core/video', 'core/file']

    if (common.includes(name)) {
      settings.category = 'common';
    }
    else if (layout.includes(name)) {
      settings.category = 'layout';
    }
    else if (media.includes(name)) {
      settings.category = 'media';
    }

    return settings;
  });

}());
