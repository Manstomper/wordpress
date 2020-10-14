/**
 * Load posts using admin-ajax
 */
import Vue from 'vue/dist/vue.js';
import axios from 'axios';

Vue.component('get-posts', {
  props: ['html'],
  template: '<article>{{ html }}</article>'
});

const getPosts = new Vue({
  el: '#get-posts-ajax',
  data: {
    posts: '',
    title: 'Get posts using admin AJAX'
  },
  methods: {
    getPosts: function() {
      const data = encodeURI('action=rigexample');
      const options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      axios.post('/wp-admin/admin-ajax.php', data, options)
        .then(response => this.posts = response.data.html)
        .catch(error => console.debug(error));
    }
  },
  mounted: function() {
    this.getPosts();
  }
});
