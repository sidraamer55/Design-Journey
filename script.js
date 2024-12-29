// Hide the preloader once the page is fully loaded
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
  
  
  
  
  
  
  // Handle mouse movement to create a fog effect
  document.addEventListener('mousemove', function (e) {
    const fogOverlay = document.querySelector('.fog-overlay');
    const { offsetX, offsetY } = e;
  
    // Update the background of the fog layer with a radial gradient
    fogOverlay.style.background = `radial-gradient(circle at ${offsetX}px ${offsetY}px, transparent 30%, rgba(0, 0, 0, 0.8) 50%)`;
  });
  
  
  
  
  
  
  
  
  // JavaScript to toggle play/pause functionality
  const audioButton = document.getElementById('audioButton');
  const audioPlayer = document.getElementById('audioPlayer');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  
  audioButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      audioButton.classList.add('playing'); // Add playing state
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      audioPlayer.pause();
      audioButton.classList.remove('playing'); // Remove playing state
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  });
  
  // Optional: Reset button state when audio ends (if not looping)
  audioPlayer.addEventListener('ended', () => {
    audioButton.classList.remove('playing');
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  });
  
  
  