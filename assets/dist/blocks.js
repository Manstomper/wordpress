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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_unregister_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _blocks_unregister_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_unregister_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_data_stores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _blocks_data_stores_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_data_stores_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_custom_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _blocks_custom_styles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_custom_styles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_color_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _blocks_color_theme_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_theme_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_recategorize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _blocks_recategorize_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_recategorize_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_shared_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _blocks_shared_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_shared_scss__WEBPACK_IMPORTED_MODULE_5__);
// Editor JS






// Editor CSS


// Block JS and CSS
function importAll(r) {
  r.keys().forEach(r);
}

importAll(__webpack_require__(15));


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Unregister blocks, formats and styles
 */
wp.domReady(function() {

  var allowedBlocks = [
    'core/block',
    'core/columns',
    'core/column',
    'core/column',
    'core/group',
    'core/heading',
    'core/paragraph',
    'core/list',
    'core/table',
    'core/quote',
    'core/image',
    'core/gallery',
    'core/html',
    'core/freeform',
    'rig/boxes',
    'rig/box'
  ];

  wp.blocks.getBlockTypes().forEach(function(blockType) {
    if (allowedBlocks.indexOf(blockType.name) === -1) {
      wp.blocks.unregisterBlockType(blockType.name);
    }
  });

  wp.richText.unregisterFormatType('core/strikethrough');

  wp.blocks.unregisterBlockStyle('core/quote', 'regular');
  wp.blocks.unregisterBlockStyle('core/quote', 'large');

});


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

  wp.blocks.registerBlockStyle('rig/boxes', [
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


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./box/block.js": 16,
	"./box/styles.scss": 17,
	"./boxes/block.js": 18,
	"./boxes/styles.scss": 19
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
webpackContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function() {

  const {__} = wp.i18n;

  wp.blocks.registerBlockType('rig/box', {
    title: __('Box', 'rig'),
    icon: 'screenoptions',
    category: 'layout',
    parent: ['rig/boxes'],
    attributes: {
      columns: {
        type: 'number'
      },
      theme: {
        type: 'string'
      }
    },
    edit: onEdit,
    save: onSave
  });

  function onEdit(props) {
    const blocks = wp.element.createElement(
      wp.editor.InnerBlocks, {
        allowedBlocks: [
          'core/heading',
          'core/paragraph',
          'core/list',
          'core/image',
          'core/html'
        ]
      }
    );

    const options = [{value: 0, label: __('Unset', 'rig')}];

    for (let i = 12; i >= 1; i--) {
      options.push({value: i, label: i});
    }

    inspectorControls = wp.element.createElement(wp.editor.InspectorControls, null,
      wp.element.createElement(wp.components.PanelBody, {title: __('Appearance', 'rig'), initialOpen: true},
        wp.element.createElement(wp.components.PanelRow, null,
          wp.element.createElement(wp.components.SelectControl, {
            label: __('Column width', 'rig'),
            options: options,
            value: props.attributes.columns,
            onChange: function(val) {
              props.setAttributes({columns: val});
            }
          })
        )
      )
    );

    return [inspectorControls, blocks];
  }

  function onSave(props) {
    props.attributes.columns = parseInt(props.attributes.columns) || 0;

    if (!props.attributes.columns) {
      delete props.attributes.columns;
    }

    return wp.element.createElement(wp.editor.InnerBlocks.Content);
  }

}());


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

(function() {

  const {__} = wp.i18n;

  wp.blocks.registerBlockType('rig/boxes', {
    title: __('Boxes', 'rig'),
    icon: 'screenoptions',
    category: 'layout',
    styles: [
      {
        name: 'default',
        label: __('Default', 'rig'),
        isDefault: true
      },
      {
        name: 'test',
        label: __('Test style that doesn\'t do anything', 'rig'),
        isDefault: false
      }
    ],
    edit: onEdit,
    save: onSave
  });

  function onEdit() {
    const blocks = wp.element.createElement(
      wp.editor.InnerBlocks, {
        allowedBlocks: [
          'rig/box'
        ],
        template: [
          ['rig/box']
        ]
      }
    );

    return blocks;
  }

  function onSave(props) {
    return wp.element.createElement(wp.editor.InnerBlocks.Content);
  }

}());


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);