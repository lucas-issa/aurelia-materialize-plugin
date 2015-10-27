import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([{
            route: '',
            redirect: 'javascript_section'
        }, {
            route: 'javascript_section',
            moduleId: 'javascript_section/index',
            nav: true,
            title: 'JavaScript'
        }, {
            route: 'css_section',
            moduleId: 'css_section/index',
            nav: true,
            title: 'CSS'
        },  {
            route: 'components_section',
            moduleId: 'components_section/index',
            nav: true,
            title: 'Components'
        },  {
            route: 'mobile_section',
            moduleId: 'mobile_section/index',
            nav: true,
            title: 'Mobile'
        }]);

        this.router = router;
    }
}