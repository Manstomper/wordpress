/**
 * Move some blocks to a different category to reduce number of accordions
 */
(function() {

  wp.hooks.addFilter('blocks.registerBlockType', 'rig/recategorize', function(settings, name) {
    if (name === 'core/table' || name === 'core/html' || name === 'core/freeform') {
      settings.category = 'common';
    }
    else if (name === 'core/gallery') {
      settings.category = 'layout';
    }

    return settings;
  });

}());
