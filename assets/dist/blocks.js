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
/* harmony import */ var _blocks_custom_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _blocks_custom_styles_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_custom_styles_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_color_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _blocks_color_theme_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_theme_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_background_image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _blocks_background_image_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_background_image_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _blocks_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
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
    'core/spacer',
    'core/image',
    'core/gallery',
    'core/cover',
    'core/media-text',
    'core/audio',
    'core/video',
    'core/file',
    'core/html',
    'core/freeform',
    'embed/vimeo',
    'embed/youtube',
    'embed/twitter',
    'embed/facebook',
    'embed/instagram'
  ];

  wp.blocks.getBlockTypes().forEach(function(blockType) {
    // Unregister only core blocks
    if (blockType.name.indexOf('core') === 0 && allowedBlocks.indexOf(blockType.name) === -1) {
      wp.blocks.unregisterBlockType(blockType.name);
    }
  });

  wp.richText.unregisterFormatType('core/strikethrough');

  wp.blocks.unregisterBlockStyle('core/quote', 'regular');
  wp.blocks.unregisterBlockStyle('core/quote', 'large');

});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

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
    reducer(state = {posts: {}}, action) {
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

  wp.blocks.registerBlockStyle('rig/sample', [
    {
      name: 'default',
      label: 'Oletus',
      isDefault: true
    },
    {
      name: 'test',
      label: 'Testi'
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

  const {__} = wp.i18n;

  const enableForBlocks = [
    'core/column',
    'rig/sample'
  ];

  /**
   * Register attributes
   */
  wp.hooks.addFilter('blocks.registerBlockType', 'rig/color-attributes', function(settings, name) {
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
      return wp.element.createElement(BlockEdit, props);
    }

    return wp.element.createElement('div',
      {
        className: (props.backgroundColor.color ? 'has-background-color' : ''),
        style: {backgroundColor: props.backgroundColor.color, color: props.textColor.color}
      },
      wp.element.createElement(
        wp.element.Fragment, null,
        wp.element.createElement(
          BlockEdit,
          props
        ),
        wp.element.createElement(wp.editor.InspectorControls, null,
          wp.element.createElement(wp.editor.PanelColorSettings, {
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

  const withColorSettings = wp.compose.createHigherOrderComponent(function(BlockEdit) {
    return wp.editor.withColors('backgroundColor', 'textColor')(function(props) {
      return onEdit(BlockEdit, props);
    });
  }, 'withColorSettings');

  wp.hooks.addFilter('editor.BlockEdit', 'rig/color-controls', withColorSettings);

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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./list-posts/block.js": 15,
	"./list-posts/styles.scss": 16,
	"./sample/block.js": 17,
	"./sample/styles.scss": 18,
	"./styles.scss": 0
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

  wp.blocks.registerBlockType('rig/list-posts', {
    title: __('List posts', 'rig'),
    icon: 'list-view',
    category: 'layout',
    attributes: {
      postIds: {
        type: 'array'
      }
    },
    edit: wp.compose.compose(
      wp.data.withSelect(function(select, props) {
        const hasPostIds = props.attributes.postIds && props.attributes.postIds.length;
        return {posts: hasPostIds ? select('rig').getPosts({include: props.attributes.postIds}) : []};
      }),
      wp.compose.withState({postUrl: []})
    )(onEdit),
    save: function() {}
  });

  function onEdit(props) {
    var timer;

    const getPost = function(val) {
      wp.apiFetch({
        path: wp.url.addQueryArgs('/rig/posts', {search: val})
      })
      .then(function(results) {
        props.setAttributes({postIds: (props.attributes.postIds ? props.attributes.postIds.concat([results[0].id]) : [results[0].id])});
      });
    }

    const url = wp.element.createElement(
      wp.editor.URLInput, {
        value: props.postUrl,
        onChange: function(val) {
          window.clearTimeout(timer);
          timer = window.setTimeout(function() {
            if (val.indexOf('http') === 0) {
              getPost(val);
            }
          }, 500);
          props.setState({postUrl: val});
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
      props.setAttributes({postIds: ids});
    };

    const items = [];

    if (Array.isArray(props.posts)) {
      props.posts.forEach(function(value) {
        items.push(
          wp.element.createElement('li', null,
            wp.element.createElement(wp.components.IconButton,
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
      url,
      (items.length ? wp.element.createElement('ul', {className: 'items'}, items) : null),
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

  const {__} = wp.i18n;

  wp.blocks.registerBlockType('rig/sample', {
    title: __('Block with all toppings', 'rig'),
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
    const blocks = wp.element.createElement(
      wp.editor.InnerBlocks, {
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
    var classNames = [
      wp.editor.getColorClassName('background-color', props.attributes.backgroundColor),
      wp.editor.getColorClassName('color', props.attributes.textColor),
    ];

    classNames = classNames.filter(function(value) {
      return value;
    });

    return wp.element.createElement('div',
      {
        className: classNames.join(' ')
      },
      wp.element.createElement(wp.editor.InnerBlocks.Content)
    );
  }

}());


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);