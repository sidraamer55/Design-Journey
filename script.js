// Hide the preloader once the page is fully loaded
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
  
  
  
  // Handle mouse movement to create a fog effect
  document.addEventListener('mousemove', function (s) {
    const fogOverlay = document.querySelector('.fog-overlay');
    const { offsetX, offsetY } = s;
  
    // Update the background of the fog layer with a radial gradient
    fogOverlay.style.background = `radial-gradient(circle at ${offsetX}px ${offsetY}px, transparent 30%, rgba(0, 0, 0, 0.8) 50%)`;
  });


// var loader= document.getElementById("preloader");
// window.addEventListener("load", function(){loader.style.display = "none";})
