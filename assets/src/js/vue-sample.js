import Vue from 'vue/dist/vue.js';
import axios from 'axios';
import logo from './../img/logo.png';

if (document.getElementById('#sample-app2')) {
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
      }
    },
    mounted: function () {
      this.getCategories();
    }
  });
}