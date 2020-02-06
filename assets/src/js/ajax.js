(function($) {
  'use strict';

  $(document).ready(function() {

    var el = $('[data-wp-ajax]');

    if (!el || !el.length) {
      return;
    }

    $.ajax({
      url: '/wp/wp-admin/admin-ajax.php',
      method: 'POST',
      data: {
        action: 'loadexample'
      }
    })
    .done(function(response) {
      el.append(response.html);
    })
    .fail(function(obj) {
      console.debug('Request failed. Reason: ' + obj.status + ' ' + obj.statusText);
    });

  });

})(jQuery);
