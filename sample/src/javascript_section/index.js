import {useView} from 'aurelia-framework';

@useView("/src/shared/showcase.html")
export class Index {

	configureRouter(config, router){
            config.title = 'JavaScript Modules';
            config.map([
                { route: ['','collapsible'],  moduleId: './collapsible',  nav: true, title:'Collapsible' },
                { route:     'dialogs',   moduleId: './dialogs',  nav: true, title:'Dialogs' },
                { route:     'dropdown',   moduleId: './dropdown',  nav: true, title:'Dropdown' },
                { route:     'media',   moduleId: './media',  nav: true, title:'Media' },
                { route:     'modals',   moduleId: './modals',  nav: true, title:'Modals' },
                { route:     'parallax',   moduleId: './parallax',  nav: true, title:'Parallax' },
                { route:     'pushpin',   moduleId: './pushpin',  nav: true, title:'Pushpin' },
                { route:     'scrollfire',   moduleId: './scrollfire',  nav: true, title:'ScrollFire' },
                { route:     'scrollspy',   moduleId: './scrollspy',  nav: true, title:'ScrollSpy' },
                { route:     'sidenav',   moduleId: './sidenav',  nav: true, title:'SideNav' },
                { route:     'tabs',   moduleId: './tabs',  nav: true, title:'Tabs' },
                { route:     'transitions',   moduleId: './transitions',  nav: true, title:'Transitions' },
                { route:     'waves',   moduleId: './waves',  nav: true, title:'Waves' }
	     ]);

	    this.router = router;
	}
}