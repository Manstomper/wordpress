import star from '../img/star.svg';

/**
 * Images
 */
(function() {

  const imgContainer = document.querySelector('.sample-images');

  if (!imgContainer) {
    return;
  }

  const img = document.createElement('img');
  img.src = star;
  imgContainer.appendChild(img)

})();
