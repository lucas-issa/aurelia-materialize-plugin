import $ from 'jquery';
import 'materialize';
// TODO: Do we import the common styles here or let the user do it in their app?

export function configure(aurelia){

	var resources = [
	  'collapsible/collapsible'
	];
	
	aurelia.globalResources(resources);
}