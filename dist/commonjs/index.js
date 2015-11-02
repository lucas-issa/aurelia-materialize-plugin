'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.configure = configure;

require('jquery');

require('materialize/sass/materialize.css!');

function configure(aurelia) {

	var resources = ['collapsible/collapsible'];

	aurelia.globalResources(resources);
}