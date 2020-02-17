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
/* harmony import */ var _blocks_background_image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _blocks_background_image_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_background_image_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _blocks_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
// Editor JS




//import './blocks/color-theme.js';


// Editor CSS


// Block JS and CSS
function importAll(r) {
  r.keys().forEach(r);
}

importAll(__webpack_require__(13));


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


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sample/block.js": 14,
	"./sample/styles.scss": 15,
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
webpackContext.id = 13;

/***/ }),
/* 14 */
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
      imageId: {
        type: 'number'
      },
      imageUrl: {
        type: 'string'
      }
    },
    edit: wp.compose.compose(
      wp.editor.withColors('backgroundColor')
    )(onEdit),
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
          'core/image'
        ]
      }
    );

    /*
    Color controls for sidebar
    */
    const colorControls = wp.element.createElement(wp.editor.PanelColorSettings, {
      title: __('Color settings', 'rig'),
      colorSettings: [
        {
          label: __('Background color', 'rig'),
          value: props.backgroundColor.color,
          onChange: props.setBackgroundColor
        }
      ]
    });

    /*
    InspectorControls (Sidebar)
    */
    inspectorControls = wp.element.createElement(wp.editor.InspectorControls, null,
      colorControls
    );

    return [
      wp.element.createElement('div',
        {
          className: props.backgroundColor.class,
          style: {backgroundColor: props.backgroundColor.color}
        },
        inspectorControls,
        blocks
      )
    ];
  }

  function onSave(props) {
    return wp.element.createElement('div',
      {
        className: wp.editor.getColorClassName('background-color', props.attributes.backgroundColor)
      },
      wp.element.createElement(wp.editor.InnerBlocks.Content)
    );
  }

}());


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);