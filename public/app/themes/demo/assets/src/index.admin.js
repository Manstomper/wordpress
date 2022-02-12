function importAll(r) {
  r.keys().forEach(r);
}

// Editor JS and CSS
importAll(require.context('./admin/', false, /\.(js|scss)/));

// Blocks
importAll(require.context('./admin/', true, /block\.(js|scss)/));
