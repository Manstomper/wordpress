// Editor JS
import './blocks/unregister.js';
import './blocks/recategorize.js';
import './blocks/data-stores.js';
import './blocks/formats-styles.js';
import './blocks/set-colors.js';
import './blocks/set-background-image.js';

// Editor CSS
import './blocks/css.scss';

// Block JS and CSS
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./blocks/', true, /block\.js|css\.scss/));
