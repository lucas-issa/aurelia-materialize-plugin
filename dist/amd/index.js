define(['exports', 'jquery', 'materialize/css/materialize.css!'], function (exports, _jquery, _materializeCssMaterializeCss) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.configure = configure;

	function configure(aurelia) {

		var resources = ['collapsible/collapsible'];

		aurelia.globalResources(resources);
	}
});