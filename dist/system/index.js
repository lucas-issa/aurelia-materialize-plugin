System.register(['jquery', 'materialize/css/materialize.css!'], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia) {

		var resources = ['collapsible/collapsible'];

		aurelia.globalResources(resources);
	}

	return {
		setters: [function (_jquery) {}, function (_materializeCssMaterializeCss) {}],
		execute: function () {}
	};
});