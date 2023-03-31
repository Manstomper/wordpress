window.addEventListener('load', function load() {
  window.removeEventListener('load', load);

  document.querySelector('#rig-dev-notice')?.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('is-collapsed');
  });
});
