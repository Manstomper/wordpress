window.addEventListener('load', function load() {
  window.removeEventListener('load', load);

  const el = this.document.querySelector('#rig-dev-notice');

  if (!el) {
    return;
  }

  const css = this.document.createElement('style');
  css.append(
    '.dev-notice { position: fixed; z-index: 999999; top: 0; right: 20%; max-width: 40%; padding: 8px 15px 8px 30px; background-color: #eee; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; box-shadow: 0px 2px rgb(0 0 0 / 20%); font-size: 14px; line-height: 20px; overflow: hidden; }' +
      ' .dev-notice:hover { opacity: 0.7; }' +
      ' .dev-notice::before { content: "\\00D7"; position: absolute; top: 10px; left: 12px; font-family: sans-serif; font-size: 16px; line-height: 1; }' +
      ' .dev-notice.is-collapsed { width: 34px; height: 34px; padding: 0; }' +
      ' .dev-notice.is-collapsed > * { display: none; }' +
      ' .dev-notice.is-collapsed::before { content: "+"; }'
  );
  el.appendChild(css);

  el.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('is-collapsed');
  });
});
