/**
 * Load posts using admin-ajax
 * Example with plain JavaScript
 */
(function() {

  function doRequest(request, appendTo) {
    if (request.status === 200) {
      const result = JSON.parse(request.responseText);

      if (result.html) {
        appendTo.insertAdjacentHTML('beforeend', result.html);
      }
    }
    else {
      console.debug('Request failed. Reason: ' + request.status + ' ' + request.statusText);
    }
  }

  function sendRequest() {
    window.removeEventListener('load', sendRequest, false);

    const el = document.querySelector('[data-ajax]');

    if (!el) {
      return;
    }

    const request = new XMLHttpRequest();

    request.open('POST', '/wp/wp-admin/admin-ajax.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.onload = function() {
      doRequest(request, el);
    };
    request.send(encodeURI('action=rigexample'));
  }

  window.addEventListener('load', sendRequest, false);

})();
