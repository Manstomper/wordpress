/**
 * Load posts using the WP REST API
 * Example with Vue
 */
import Vue from 'vue/dist/vue.js';

function doRequest(vueApp, url) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
    if (request.status === 200) {
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

Vue.component('load-more', {
  props: ['post'],
  template: '<li><a :href="post.url">{{ post.title }}</a></li>'
});

const loadMoreExample = new Vue({
  el: '#load-more-example',
  data: {
    posts: [],
    page: 1,
    title: 'Load more posts'
  },
  methods: {
    getPosts: function() {
      doRequest(this, '/wp/wp-json/wp/v2/posts?per_page=1&page=' + this.page);
      this.page++;
    }
  },
  mounted: function() {
    this.getPosts();
  }
});
