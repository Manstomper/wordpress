function importAll(r) {
  r.keys().forEach(r);
}

// Editor JS and CSS
importAll(require.context('./js/admin/', false, /\.js/));
import './css/admin.scss';

// Blocks
importAll(require.context('./js/admin/blocks/', true, /\.js/));
