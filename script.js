// Function to toggle between light and dark themes
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  
  // Save the theme in localStorage
  localStorage.setItem('theme', currentTheme);
}

// On page load, check if a theme is stored and apply it
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
  }
}

// Function to trigger the animation
function triggerAnimation() {
  const box = document.getElementById('box');
  box.classList.add('move-right'); // Add animation class on button click
  
  // Optional: Remove the animation after 1 second to allow re-triggering
  setTimeout(() => box.classList.remove('move-right'), 1000);
}
