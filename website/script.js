document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to IJP's personal website!");

});
let currentPhoto = 0;
const photos = document.querySelectorAll('.photo-rotator img');
setInterval(() => {
  photos[currentPhoto].style.display = 'none';
  currentPhoto = (currentPhoto + 1) % photos.length;
  photos[currentPhoto].style.display = 'block';
}, 3000);
