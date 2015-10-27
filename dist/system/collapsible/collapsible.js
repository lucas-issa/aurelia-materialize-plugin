System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customAttribute, bindable, bindingMode, inject, MaterialCollapsible;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      MaterialCollapsible = (function () {
        function MaterialCollapsible(element) {
          _classCallCheck(this, _MaterialCollapsible);

          this.element = element;
        }

        _createClass(MaterialCollapsible, [{
          key: 'attached',
          value: function attached() {
            $(this.element).collapsible({
              accordion: this.accordion
            });
          }
        }]);

        var _MaterialCollapsible = MaterialCollapsible;
        MaterialCollapsible = inject(Element)(MaterialCollapsible) || MaterialCollapsible;
        MaterialCollapsible = bindable({ name: 'accordion', defaultValue: false })(MaterialCollapsible) || MaterialCollapsible;
        MaterialCollapsible = customAttribute('material-collapsible')(MaterialCollapsible) || MaterialCollapsible;
        return MaterialCollapsible;
      })();

      _export('MaterialCollapsible', MaterialCollapsible);
    }
  };
});