import Vue from 'vue/dist/vue.min.js';
import axios from 'axios';
import logo from './../../img/logo.png';

new Vue({
  el: '#examples',
  data: {
    logo: logo,
  },
  methods: {
    getPost: function () {
      const params = new URLSearchParams();
      params.append('action', 'rigexample');
      axios.post('/wp-admin/admin-ajax.php', params)
        .then(response => {
          console.debug(response.data.html);
        })
        .catch(error => console.debug(error));
    },
  },
  mounted: function () {
    //this.getPost()
  },
});
