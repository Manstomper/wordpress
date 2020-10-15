import Vue from 'vue/dist/vue.js';
import axios from 'axios';
import logoSrc from './../img/logo.svg';

Vue.component('example-custom-element', {
  props: ['category'],
  template: '<li><a v-bind:href="category.link">{{ category.name }}</a></li>'
});

new Vue({
  el: '#footer',
  data: {
    logo: logoSrc,
    categories: [],
    exampleStaticItems: [ 'one', 'two' ]
  },
  methods: {
    getNewest: function() {
      axios.get('/wp-json/wp/v2/categories')
        .then(response => {this.categories = response.data})
        .catch(error => console.debug(error));
    }
  },
  mounted: function() {
    this.getNewest();
  }
});

(function() {

  const imgContainer = document.querySelector('#logo-2');

  if (!imgContainer) {
    return;
  }

  const img = document.createElement('img');
  img.src = logoSrc;
  imgContainer.appendChild(img);

})();
