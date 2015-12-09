'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('jquery');

var _hammer = require('hammer');

var _hammer2 = _interopRequireDefault(_hammer);

require('jquery.hammer');

require('velocity');

require('materialize/js/global');

require('materialize/js/animation');

require('materialize/js/buttons');

require('materialize/js/cards');

require('materialize/js/character_counter');

require('materialize/js/collapsible');

require('materialize/js/dropdown');

require('materialize/js/forms');

require('materialize/js/jquery.easing.1.3');

require('materialize/js/leanModal');

require('materialize/js/materialbox');

require('materialize/js/parallax');

require('materialize/js/pushpin');

require('materialize/js/scrollFire');

require('materialize/js/scrollspy');

require('materialize/js/sideNav');

require('materialize/js/slider');

require('materialize/js/tabs');

require('materialize/js/toasts');

require('materialize/js/tooltip');

require('materialize/js/transitions');

require('materialize/js/waves');

require('./collapsible/collapsible');

require('./materialize-attr/materialize-attr');

function configure(aurelia) {
  window.Hammer = _hammer2['default'];

  aurelia.globalResources('./collapsible/collapsible', './materialize-attr/materialize-attr');
}