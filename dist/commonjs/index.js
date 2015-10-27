'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.configure = configure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('materialize');

function configure(aurelia) {

	var resources = ['collapsible/collapsible'];

	aurelia.globalResources(resources);
}