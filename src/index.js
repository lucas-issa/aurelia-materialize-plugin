
// It is necessary to add the materialize.css file direct into the application.

import 'jquery';
import Hammer from 'hammer';
import 'jquery.hammer';
import 'velocity';
import 'materialize/js/global';
import 'materialize/js/animation';
import 'materialize/js/buttons';
import 'materialize/js/cards';
import 'materialize/js/character_counter';
import 'materialize/js/collapsible';
import 'materialize/js/dropdown';
import 'materialize/js/forms';
//import 'materialize/js/hammer.min'; // Dep. added
import 'materialize/js/jquery.easing.1.3';
//import 'materialize/js/jquery.hammer'; // Dep. added
import 'materialize/js/leanModal';
import 'materialize/js/materialbox';
import 'materialize/js/parallax';
import 'materialize/js/pushpin';
import 'materialize/js/scrollFire';
import 'materialize/js/scrollspy';
import 'materialize/js/sideNav';
import 'materialize/js/slider';
import 'materialize/js/tabs';
import 'materialize/js/toasts';
import 'materialize/js/tooltip';
import 'materialize/js/transitions';
//import 'velocity.min'; // Dep. added
import 'materialize/js/waves';
//,'materialize/js/date_picker/picker';
//,'materialize/js/date_picker/picker.date';  // Did not work!
import './collapsible/collapsible';
import './materialize-attr/materialize-attr';

export function configure(aurelia){

  // Required for toasts.js
  window.Hammer = Hammer;

  aurelia.globalResources(
    './collapsible/collapsible',
    './materialize-attr/materialize-attr'
  );
}
