/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_unregister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _blocks_unregister_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_unregister_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_recategorize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _blocks_recategorize_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_recategorize_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_data_stores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _blocks_data_stores_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_data_stores_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_block_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _blocks_block_styles_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_block_styles_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_set_colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _blocks_set_colors_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_set_colors_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_set_background_image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _blocks_set_background_image_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_set_background_image_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_css_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _blocks_css_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_css_scss__WEBPACK_IMPORTED_MODULE_6__);
// Editor JS







// Editor CSS


// Block JS and CSS
function importAll(r) {
  r.keys().forEach(r);
}

importAll(__webpack_require__(14));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Unregister blocks, formats and styles
 */
wp.domReady(function() {

  const { unregisterBlockType, getBlockTypes } = wp.blocks;
  const richText = wp.richText;

  var allowedBlocks = [
    'core/block',
    'core/columns',
    'core/column',
    'core/group',
    'core/heading',
    'core/paragraph',
    'core/list',
    'core/table',
    'core/quote',
    'core/button',
    'core/image',
    'core/gallery',
    'core/cover',
    'core/audio',
    'core/video',
    'core/file',
    'core/embed',
    'core/html',
    'core/freeform',
    'core-embed/vimeo',
    'core-embed/youtube',
    'core-embed/twitter',
    'core-embed/facebook',
    'core-embed/instagram'
  ];

  getBlockTypes().forEach(function(blockType) {
    // Unregister only core blocks
    if (blockType.name.indexOf('core') === 0 && allowedBlocks.indexOf(blockType.name) === -1) {
      unregisterBlockType(blockType.name);
    }
  });

  richText.unregisterFormatType('core/strikethrough');

});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

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


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Data store for using a custom REST API endpoint
 */
(function() {

  const actions = {
    getPosts: function(params) {
      return {
        type: 'GET_POSTS',
        params
      }
    },
    setPosts: function(posts) {
      return {
        type: 'SET_POSTS',
        posts
      }
    }
  };

  wp.data.registerStore('rig', {
    reducer(state = { posts: {} }, action) {
      if (action.type === 'SET_POSTS') {
        return {
          ...state,
          posts: action.posts
        };
      }
      return state;
    },
    controls: {
      GET_POSTS: function(action) {
        return wp.apiFetch({
          path: wp.url.addQueryArgs('/rig/posts', action.params)
        });
      }
    },
    actions: actions,
    selectors: {
      getPosts(state) {
        return state.posts;
      }
    },
    resolvers: {
      * getPosts(params) {
        const posts = yield actions.getPosts(params);
        return actions.setPosts(posts);
      }
    }
  });

}());


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Custom styles and formats
 */
wp.domReady(function() {

  const { __ } = wp.i18n;
  const { registerBlockStyle } = wp.blocks;

  registerBlockStyle('rig/sample', [
    {
      name: 'default',
      label: __('Default', 'rig'),
      isDefault: true
    },
    {
      name: 'test',
      label: __('Test', 'rig')
    }
  ]);

});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

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


/***/ }),
/* 13 */
/***/ (function(module, exports) {

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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./css.scss": 0,
	"./list-posts/block.js": 15,
	"./list-posts/css.scss": 16,
	"./sample/block.js": 17,
	"./sample/css.scss": 18
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 14;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

(function() {

  const {__} = wp.i18n;
  const { registerBlockType } = wp.blocks;
  const { compose, withState } = wp.compose;
  const { withSelect } = wp.data;
  const { URLInput } = wp.editor;
  const { IconButton } = wp.components;
  const el = wp.element.createElement;

  registerBlockType('rig/list-posts', {
    title: __('List posts', 'rig'),
    icon: 'list-view',
    category: 'layout',
    attributes: {
      postIds: {
        type: 'array'
      }
    },
    edit: compose(
      withSelect(function(select, props) {
        const hasPostIds = props.attributes.postIds && props.attributes.postIds.length;
        return { posts: hasPostIds ? select('rig').getPosts({include: props.attributes.postIds}) : [] };
      }),
      withState({ postUrl: '', isURLInputOpen: false })
    )(onEdit),
    save: function() {}
  });

  function onEdit(props) {
    var timer;

    const getPost = function(val) {
      wp.apiFetch({
        path: wp.url.addQueryArgs('/rig/posts', { search: val })
      })
      .then(function(results) {
        const ids = (props.attributes.postIds ? props.attributes.postIds.concat([results[0].id]) : [results[0].id]);
        props.setAttributes({ postIds: ids });
      });
    }

    const url = el(
      URLInput, {
        value: props.postUrl,
        onChange: function(val) {
          window.clearTimeout(timer);
          timer = window.setTimeout(function() {
            if (val.indexOf('http') === 0) {
              getPost(val);
            }
          }, 500);
          props.setState({ postUrl: val });
        }
      }
    );

    const removePost = function(e) {
      let ids = [];
      for (let i = 0; i < props.attributes.postIds.length; i++) {
        if (props.attributes.postIds[i] != e.currentTarget.dataset.id) {
          ids.push(props.attributes.postIds[i]);
        }
      }
      props.setAttributes({ postIds: ids });
    };

    const items = [];

    if (Array.isArray(props.posts)) {
      props.posts.forEach(function(value) {
        items.push(
          el('li', null,
            el(IconButton,
              {
                icon: 'no-alt',
                onClick: removePost,
                'data-id': value.id
              }
            ),
            value.title.rendered
          )
        )
      });
    }

    return [
      (items.length ? el('ul', { className: 'items' }, items) : null),
      url
    ];
  }

}());


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

(function() {

  const { __ } = wp.i18n;
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.editor;
  const el = wp.element.createElement;

  wp.blocks.registerBlockType('rig/sample', {
    title: __('Sample block', 'rig'),
    icon: 'carrot',
    category: 'layout',
    attributes: {
      backgroundColor: {
        type: 'string'
      },
      textColor: {
        type: 'string'
      },
      imageId: {
        type: 'number'
      }
    },
    edit: onEdit,
    save: onSave
  });

  function onEdit(props) {
    /*
    InnerBlocks
    */
    const blocks = el(
      InnerBlocks, {
        allowedBlocks: [
          'core/heading',
          'core/paragraph',
          'core/list',
          'core/image',
          'rig/list-posts'
        ]
      }
    );

    return [
      blocks
    ];
  }

  function onSave(props) {
    return el(InnerBlocks.Content);
  }

}());


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);