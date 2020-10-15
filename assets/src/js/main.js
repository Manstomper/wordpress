import Vue from 'vue';
import App from './components/App.vue';

Vue.filter('striptags', function(str) {
  const el = document.createElement('div');
  el.innerHTML = str;

  return el.textContent || el.innerText || '';
});

new Vue({
  el: '#app',
  render: h => h(App)
});
