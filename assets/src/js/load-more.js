/**
 * Load posts using the WP REST API
 */
import Vue from 'vue/dist/vue.js';
import axios from 'axios';

Vue.component('load-more', {
  props: ['post'],
  template: '<li><a :href="post.link">{{ post.title.rendered }}</a></li>'
});

const loadMore = new Vue({
  el: '#load-more-rest',
  data: {
    posts: [],
    page: 1,
    title: 'Load posts using REST API',
    isDisabled: false
  },
  methods: {
    getPosts: function() {
      this.isDisabled = true;
      axios.get('/wp-json/wp/v2/posts?per_page=1&page=' + this.page)
        .then(response => {
          this.posts = [...this.posts, ...response.data];
          this.page++;
          this.isDisabled = false;
        })
        .catch(error => {
          if (error.message.indexOf('code 400') !== -1) {
            this.buttonIsDisabled = true;
          }
        });
    }
  },
  mounted: function() {
    this.getPosts();
  }
});
