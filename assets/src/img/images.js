import Vue from 'vue/dist/vue.js';
import star from '../img/star.svg';

/**
 * Images
 */
(function() {

  // One way

  const imgContainer = document.querySelector('.sample-images');

  if (!imgContainer) {
    return;
  }

  const img = document.createElement('img');
  img.src = star;
  imgContainer.appendChild(img);

  // Another way

  const foo = new Vue({
    el: '#image-with-js',
    data: {
      imageSource: star,
      alternativeText: 'This is a logo'
    }
  });


})();
