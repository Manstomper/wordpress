import Vue from 'vue/dist/vue.min.js';
import axios from 'axios';
import logo from './../img/logo.png';

new Vue({
  el: '#sample-app2',
  data: {
    logo: logo,
    categories: []
  },
  methods: {
    getCategories: function () {
      axios.get('/wp-json/wp/v2/categories')
        .then(response => { this.categories = response.data })
        .catch(error => console.debug(error));
    },
    getPost: function () {
      const params = new URLSearchParams();
      params.append('action', 'rigexample');
      axios.post('/wp-admin/admin-ajax.php', params)
        .then(response => {
          console.debug(response.data.html);
        })
        .catch(error => console.debug(error));
    }
  },
  mounted: function () {
    this.getCategories();
    //this.getPost();
  }
});