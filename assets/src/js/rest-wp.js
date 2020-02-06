(function($) {
  'use strict';

  $(document).ready(function() {

    var el = $('[data-wp-rest]');

    if (!el || !el.length) {
      return;
    }

    $.ajax({
      url: '/wp/wp-json/wp/v2/posts',
      method: 'GET',
      data: {
        per_page: 1
      }
    })
    .done(function(response) {
      const title = document.createElement('h2');
      title.appendChild(document.createTextNode(response[0].title.rendered));
      el.append(title);
      el.append(response[0].content.rendered);
    })
    .fail(function(obj) {
      console.debug('Request failed. Reason: ' + obj.status + ' ' + obj.statusText);
    });

  });

})(jQuery);
