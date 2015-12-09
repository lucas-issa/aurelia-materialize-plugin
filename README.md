# aurelia-materialize-plugin

## Installing the plugin

The steps here assume you are using JSPM for package management

1. Install the plugin

  `jspm install aurelia-materialize-plugin=github:lucas-issa/aurelia-materialize-plugin`

2. Register the plugin with Aurelia in your `main.js` or equivalent.


```javascript
import "aurelia-materialize-plugin";

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // ...
    .plugin('aurelia-materialize-plugin') // install the aurelia-materialize-plugin integration plugin.
    // ...
  ;
  aurelia.start().then(a => a.setRoot());
}

```


3. Drop some custom-elements into your DOM

4. That's it!

Visit the docs or sample application for more information
