import 'github:twbs/bootstrap@3.3.5';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
        


    aurelia.use.globalResources('shared/collapse-panel');

    aurelia.start().then(a => a.setRoot('app'));
}
