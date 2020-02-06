// Editor JS
import './blocks/unregister.js';
import './blocks/data-stores.js';
import './blocks/custom-styles.js';
import './blocks/color-theme.js';
import './blocks/recategorize.js';

// Editor CSS
import './blocks/shared.scss';

// Block JS and CSS
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./blocks/', true, /block\.js|styles\.scss/));
