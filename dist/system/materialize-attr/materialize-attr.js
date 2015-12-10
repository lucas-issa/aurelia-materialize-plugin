System.register(['aurelia-framework', 'aurelia-task-queue'], function (_export) {
  'use strict';

  var inject, customAttribute, TaskQueue, MaterializeAttr;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }

  function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }],
    execute: function () {
      MaterializeAttr = (function () {
        function MaterializeAttr(element, taskQueue) {
          _classCallCheck(this, _MaterializeAttr);

          this.element = element;
          this.taskQueue = taskQueue;
        }

        _createClass(MaterializeAttr, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            if (!this.value) {
              this.value = this.element.nodeName.toLowerCase();
            }

            switch (this.value) {
              case 'datepicker':
                $(this.element).pickadate({
                  format: 'm/d/yyyy',
                  selectMonths: true,
                  selectYears: 15,
                  onSet: function onSet() {
                    return fireEvent(_this.element, 'change');
                  } });
                break;

              case 'select':
                setTimeout(function () {
                  return _this.bindSelect();
                }, 10);
                break;

              case 'sidenav':
                setTimeout(function () {
                  return $(_this.element).sideNav({
                    closeOnClick: true
                  });
                }, 10);
                break;

              case 'label':
                this.taskQueue.queueMicroTask({ call: function call() {
                    return _this.fixLabelOverlap();
                  } });
                break;

              default:
                throw new Error('Unrecognized materialize attribute value: \'' + this.value + '\'');
            }
          }
        }, {
          key: 'detached',
          value: function detached() {
            clearInterval(this._interval);
            if (this.domObserver) {
              this.domObserver.disconnect();
              this.domObserver = null;
            }
          }
        }, {
          key: 'fixLabelOverlap',
          value: function fixLabelOverlap() {
            var $el = $(this.element);
            if ($el.prevUntil(null, ':input').val().length) {
              $el.addClass('active');
            }
          }
        }, {
          key: 'bindSelect',
          value: function bindSelect() {
            var _this2 = this;

            var input, getSelectedOption, selectedOption, lastSelectValue;

            $(this.element).material_select();
            input = $(this.element).prevUntil(null, ':input')[0];

            getSelectedOption = function () {
              var i, options, option, optionValue;
              options = _this2.element.options;
              i = options.length;
              while (i--) {
                option = options.item(i);
                if (option.selected) {
                  return option;
                }
              }
              throw new Error('should have found a selected option');
            };

            selectedOption = getSelectedOption();
            input.value = selectedOption.text;

            lastSelectValue = this.element.value;

            this._interval = setInterval(function () {
              if (lastSelectValue !== _this2.element.value) {
                selectedOption = getSelectedOption();
                if (input.value === selectedOption.text) {
                  fireEvent(_this2.element, 'change');
                } else {
                  input.value = selectedOption.text;
                }
                lastSelectValue = _this2.element.value;
              }
            }, 120);

            this.domObserver = new MutationObserver(function () {
              _this2.detached();
              $(_this2.element).material_select('destroy');
              _this2.bindSelect();
            });
            this.domObserver.observe(this.element, { childList: true, subtree: true });
          }
        }]);

        var _MaterializeAttr = MaterializeAttr;
        MaterializeAttr = inject(Element, TaskQueue)(MaterializeAttr) || MaterializeAttr;
        MaterializeAttr = customAttribute('materialize')(MaterializeAttr) || MaterializeAttr;
        return MaterializeAttr;
      })();

      _export('MaterializeAttr', MaterializeAttr);
    }
  };
});