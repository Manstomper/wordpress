// JS
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./js/', true, /.\.js/));

// CSS
import './scss/main.scss';

// Fonts
// We are not using fontello.css because it loads dead font formats. The @import and basic CSS must be added to theme .scss and updated from source if necessary.
import './fonts/fontello/css/fontello-codes.css';

// Images
import './img/images.js';
