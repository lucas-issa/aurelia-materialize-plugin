System.register(['jquery', 'materialize/sass/materialize.css!'], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia) {

		var resources = ['collapsible/collapsible'];

		aurelia.globalResources(resources);
	}

	return {
		setters: [function (_jquery) {}, function (_materializeSassMaterializeCss) {}],
		execute: function () {}
	};
});