define(['exports', 'jquery', 'hammer', 'jquery.hammer', 'velocity', 'materialize/js/global', 'materialize/js/animation', 'materialize/js/buttons', 'materialize/js/cards', 'materialize/js/character_counter', 'materialize/js/collapsible', 'materialize/js/dropdown', 'materialize/js/forms', 'materialize/js/jquery.easing.1.3', 'materialize/js/leanModal', 'materialize/js/materialbox', 'materialize/js/parallax', 'materialize/js/pushpin', 'materialize/js/scrollFire', 'materialize/js/scrollspy', 'materialize/js/sideNav', 'materialize/js/slider', 'materialize/js/tabs', 'materialize/js/toasts', 'materialize/js/tooltip', 'materialize/js/transitions', 'materialize/js/waves', './collapsible/collapsible', './materialize-attr/materialize-attr'], function (exports, _jquery, _hammer, _jqueryHammer, _velocity, _materializeJsGlobal, _materializeJsAnimation, _materializeJsButtons, _materializeJsCards, _materializeJsCharacter_counter, _materializeJsCollapsible, _materializeJsDropdown, _materializeJsForms, _materializeJsJqueryEasing13, _materializeJsLeanModal, _materializeJsMaterialbox, _materializeJsParallax, _materializeJsPushpin, _materializeJsScrollFire, _materializeJsScrollspy, _materializeJsSideNav, _materializeJsSlider, _materializeJsTabs, _materializeJsToasts, _materializeJsTooltip, _materializeJsTransitions, _materializeJsWaves, _collapsibleCollapsible, _materializeAttrMaterializeAttr) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Hammer = _interopRequireDefault(_hammer);

  function configure(aurelia) {
    window.Hammer = _Hammer['default'];

    aurelia.globalResources('./collapsible/collapsible', './materialize-attr/materialize-attr');
  }
});