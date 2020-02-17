/**
 * Load posts using the WP REST API
 * Example with Vue
 */
(function() {

  function doRequest(vueApp, url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200) {
        vueApp.posts = [];
        const result = JSON.parse(request.responseText);
        for (let [key, value] of Object.entries(result)) {
          vueApp.posts.push({
            id: value.id,
            url: value.link,
            title: value.title.rendered
          });
        }
      }
      else {
        console.debug('Request failed. Reason: ' + request.status + ' ' + request.statusText);
      }
    };
    request.send();
  }

  Vue.component('rest-example', {
    props: ['post'],
    template: '<li><a :href="post.url">{{ post.title }}</a></li>'
  });

  const restExample = new Vue({
    el: '#rest-example',
    data: {
      posts: [],
      title: 'Example REST query results'
    },
    methods: {
      getPosts: function() {
        doRequest(this, '/wp/wp-json/wp/v2/posts?per_page=3');
      },
      searchPosts: function() {
        doRequest(this, '/wp/wp-json/rig/posts?search=quick+fox');
        this.title = 'Example query results for custom REST endpoint'
      }
    },
    mounted: function() {
      this.getPosts();
    }
  });

})();
