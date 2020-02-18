// Editor JS
import './blocks/unregister.js';
import './blocks/recategorize.js';
import './blocks/data-stores.js';
import './blocks/custom-styles.js';
import './blocks/color-theme.js';
import './blocks/background-image.js';

// Editor CSS
import './blocks/styles.scss';

// Block JS and CSS
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./blocks/', true, /block\.js|styles\.scss/));
