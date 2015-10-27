import {useView} from 'aurelia-framework';

@useView("/src/shared/showcase.html")
export class Index {

    configureRouter(config, router){
        config.title = 'Mobile';
        config.map([
          { route: ['','page1'],  moduleId: './page1',      nav: true, title:'Not Implemented' },
          ]);

        this.router = router;
    }
}