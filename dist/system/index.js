System.register(['jquery', 'hammer', 'jquery.hammer', 'velocity', 'materialize/js/global', 'materialize/js/animation', 'materialize/js/buttons', 'materialize/js/cards', 'materialize/js/character_counter', 'materialize/js/collapsible', 'materialize/js/dropdown', 'materialize/js/forms', 'materialize/js/jquery.easing.1.3', 'materialize/js/leanModal', 'materialize/js/materialbox', 'materialize/js/parallax', 'materialize/js/pushpin', 'materialize/js/scrollFire', 'materialize/js/scrollspy', 'materialize/js/sideNav', 'materialize/js/slider', 'materialize/js/tabs', 'materialize/js/toasts', 'materialize/js/tooltip', 'materialize/js/transitions', 'materialize/js/waves', './collapsible/collapsible', './materialize-attr/materialize-attr'], function (_export) {
  'use strict';

  var Hammer;

  _export('configure', configure);

  function configure(aurelia) {
    window.Hammer = Hammer;

    aurelia.globalResources('./collapsible/collapsible', './materialize-attr/materialize-attr');
  }

  return {
    setters: [function (_jquery) {}, function (_hammer) {
      Hammer = _hammer['default'];
    }, function (_jqueryHammer) {}, function (_velocity) {}, function (_materializeJsGlobal) {}, function (_materializeJsAnimation) {}, function (_materializeJsButtons) {}, function (_materializeJsCards) {}, function (_materializeJsCharacter_counter) {}, function (_materializeJsCollapsible) {}, function (_materializeJsDropdown) {}, function (_materializeJsForms) {}, function (_materializeJsJqueryEasing13) {}, function (_materializeJsLeanModal) {}, function (_materializeJsMaterialbox) {}, function (_materializeJsParallax) {}, function (_materializeJsPushpin) {}, function (_materializeJsScrollFire) {}, function (_materializeJsScrollspy) {}, function (_materializeJsSideNav) {}, function (_materializeJsSlider) {}, function (_materializeJsTabs) {}, function (_materializeJsToasts) {}, function (_materializeJsTooltip) {}, function (_materializeJsTransitions) {}, function (_materializeJsWaves) {}, function (_collapsibleCollapsible) {}, function (_materializeAttrMaterializeAttr) {}],
    execute: function () {}
  };
});