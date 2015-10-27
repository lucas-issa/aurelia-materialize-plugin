System.register(['jquery', 'materialize'], function (_export) {
	'use strict';

	var $;

	_export('configure', configure);

	function configure(aurelia) {

		var resources = ['collapsible/collapsible'];

		aurelia.globalResources(resources);
	}

	return {
		setters: [function (_jquery) {
			$ = _jquery['default'];
		}, function (_materialize) {}],
		execute: function () {}
	};
});