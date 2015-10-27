define(['exports', 'jquery', 'materialize'], function (exports, _jquery, _materialize) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.configure = configure;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _$ = _interopRequireDefault(_jquery);

	function configure(aurelia) {

		var resources = ['collapsible/collapsible'];

		aurelia.globalResources(resources);
	}
});