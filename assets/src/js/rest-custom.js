(function($) {
  'use strict';

  $(document).ready(function() {

    var el = $('[data-wp-rest-custom]');

    if (!el || !el.length) {
      return;
    }

    $.ajax({
      url: '/wp/wp-json/rig/posts',
      method: 'GET',
      data: {
        search: 'quick fox'
      }
    })
    .done(function(response) {
      const ul = document.createElement('ul');
      var li;

      response.forEach(function(post) {
        li = document.createElement('li');
        li.appendChild(document.createTextNode(post.title));
        ul.append(li);
      });

      el.append(ul);
    })
    .fail(function(obj) {
      console.debug('Request failed. Reason: ' + obj.status + ' ' + obj.statusText);
    });

  });

})(jQuery);
